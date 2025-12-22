import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import "../../styles/form.css";

export default function Login(){
  const { login, googleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const from = (useLocation().state?.from?.pathname) || "/";

  const submit = async (e)=>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    try{
      setLoading(true);
      await login(email, password);
      toast.success("Welcome back!");
      navigate(from, { replace:true });
    }catch(err){
      toast.error(err.message);
    }finally{ setLoading(false); }
  };

  const google = async ()=>{
    try{
      await googleLogin();
      toast.success("Logged in with Google");
      navigate(from, { replace:true });
    }catch(err){ toast.error(err.message); }
  };

  return (
    <div className="section" data-aos="fade-up">
      <div className="container-page">
        <div className="max-w-md mx-auto surface p-6 sm:p-8">
          <h1 className="text-3xl font-extrabold tracking-tight">Welcome back</h1>
          <p className="mt-2 opacity-70">Login to continue swapping skills.</p>

          <form onSubmit={submit} className="mt-6 space-y-3">
            <input
              name="email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              required
              type="email"
              placeholder="Email"
              className="input input-bordered w-full rounded-xl"
            />

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

            <button disabled={loading} className="btn btn-primary w-full rounded-xl">
              {loading ? "Please wait…" : "Login"}
            </button>
          </form>

          <div className="flex justify-between mt-3 text-sm">
            <Link state={{prefill:email}} to="/forgot" className="link link-hover">
              Forget Password?
            </Link>
            <Link to="/signup" className="link link-hover">
              Create account
            </Link>
          </div>

          <div className="divider my-6">OR</div>

          <button className="btn w-full rounded-xl" onClick={google}>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
