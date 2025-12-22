import { useAuth } from "../../context/AuthProvider";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-hot-toast";

export default function Profile(){
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const update = async (e)=>{
    e.preventDefault();
    try{
      await updateProfile(auth.currentUser, { displayName:name, photoURL:photo });
      toast.success("Profile updated");
      window.location.reload();
    }catch(err){ toast.error(err.message); }
  }

  if(!user) return null;

  return (
    <div className="max-w-xl mx-auto p-6" data-aos="fade-up">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <div className="flex items-center gap-4 mb-6">
        <img className="w-20 h-20 rounded-full" src={user.photoURL || "https://i.pravatar.cc/100"} />
        <div>
          <div className="font-semibold">{user.displayName || "User"}</div>
          <div className="opacity-70">{user.email}</div>
        </div>
      </div>
      <form onSubmit={update} className="space-y-3">
        <input value={name} onChange={e=>setName(e.target.value)} className="input input-bordered w-full" placeholder="Name"/>
        <input value={photo} onChange={e=>setPhoto(e.target.value)} className="input input-bordered w-full" placeholder="Photo URL"/>
        <button className="btn btn-primary w-full">Update Profile</button>
      </form>
    </div>
  );
}
