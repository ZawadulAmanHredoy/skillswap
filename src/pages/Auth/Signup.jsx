import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import "../../styles/form.css";

const validPassword = (p)=>/[A-Z]/.test(p) && /[a-z]/.test(p) && p.length>=6;

export default function Signup(){
  const { register, googleLogin } = useAuth();
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const submit = async (e)=>{
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = f.get("name"), email = f.get("email"), photo = f.get("photo"), password = f.get("password");
    if (!validPassword(password)){
      setErr("Password must have Uppercase, Lowercase, and be at least 6 characters.");
      return;
    }
    try{
      await register(name, photo, email, password);
      toast.success("Account created");
      navigate("/");
    }catch(er){ toast.error(er.message); }
  };

  return (
    <div className="section" data-aos="fade-up">
      <div className="container-page">
        <div className="max-w-md mx-auto surface p-6 sm:p-8">
          <h1 className="text-3xl font-extrabold tracking-tight">Create an account</h1>
          <p className="mt-2 opacity-70">Join SkillSwap and start learning locally.</p>

          <form onSubmit={submit} className="mt-6 space-y-3">
            <input name="name" required placeholder="Name" className="input input-bordered w-full rounded-xl"/>
            <input name="email" required type="email" placeholder="Email" className="input input-bordered w-full rounded-xl"/>
            <input name="photo" required type="url" placeholder="Photo URL" className="input input-bordered w-full rounded-xl"/>

            <div className="input-with-eye">
              <input
                name="password"
                required
                type={show?"text":"password"}
                placeholder="Password"
                className="input input-bordered w-full rounded-xl"
              />
              <button
                type="button"
                className="btn btn-ghost btn-xs rounded-lg"
                onClick={()=>setShow(s=>!s)}
              >
                {show ? "Hide" : "Show"}
              </button>
            </div>

            {err && <p className="text-error text-sm">{err}</p>}

            <button className="btn btn-primary w-full rounded-xl">Register</button>
          </form>

          <div className="flex justify-between mt-3 text-sm">
            <span className="opacity-70">Already have an account?</span>
            <Link to="/login" className="link link-hover">Login</Link>
          </div>

          <div className="divider my-6">OR</div>

          <button
            className="btn w-full rounded-xl"
            onClick={async()=>{
              await googleLogin();
              toast.success("Signed in with Google");
              navigate("/");
            }}
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
