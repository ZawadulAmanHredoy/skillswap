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
      // Simple redirect (examiner convenience)
      window.location.href = "https://mail.google.com/";
    }catch(err){ toast.error(err.message); }
  }

  return (
    <div className="max-w-md mx-auto p-6" data-aos="fade-up">
      <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
      <form onSubmit={submit} className="space-y-3">
        <input name="email" defaultValue={prefill} type="email" placeholder="Email" className="input input-bordered w-full"/>
        <button className="btn btn-primary w-full">Send reset link</button>
      </form>
    </div>
  );
}
