import { useLocation } from "react-router-dom";
import { sendPasswordResetEmail, auth } from "../../firebase";
import { toast } from "react-hot-toast";

export default function ForgotPassword(){
  const prefill = useLocation().state?.prefill || "";

  const submit = async (e)=>{
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    try{
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset link sent. Redirecting to Gmail…");
      window.location.href = "https://mail.google.com/";
    }catch(err){ toast.error(err.message); }
  };

  return (
    <div className="section" data-aos="fade-up">
      <div className="container-page">
        <div className="max-w-md mx-auto surface p-6 sm:p-8">
          <h1 className="text-3xl font-extrabold tracking-tight">Reset Password</h1>
          <p className="mt-2 opacity-70">
            Enter your email to receive a reset link.
          </p>

          <form onSubmit={submit} className="mt-6 space-y-3">
            <input
              name="email"
              defaultValue={prefill}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full rounded-xl"
              required
            />
            <button className="btn btn-primary w-full rounded-xl">Send reset link</button>
          </form>
        </div>
      </div>
    </div>
  );
}
