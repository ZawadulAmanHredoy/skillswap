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
  };

  if(!user) return null;

  return (
    <div className="section" data-aos="fade-up">
      <div className="container-page">
        <div className="max-w-2xl mx-auto surface p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-20 rounded-2xl ring-1 ring-base-200">
                <img src={user.photoURL || "https://i.pravatar.cc/100"} alt="profile" />
              </div>
            </div>

            <div className="min-w-0">
              <h1 className="text-3xl font-extrabold tracking-tight">My Profile</h1>
              <p className="mt-1 opacity-70 break-all">{user.email}</p>
              <p className="mt-1 font-semibold truncate">{user.displayName || "User"}</p>
            </div>
          </div>

          <div className="soft-divider my-6" />

          <form onSubmit={update} className="space-y-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-semibold">Name</span>
              </div>
              <input
                value={name}
                onChange={e=>setName(e.target.value)}
                className="input input-bordered w-full rounded-xl"
                placeholder="Name"
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </div>
              <input
                value={photo}
                onChange={e=>setPhoto(e.target.value)}
                className="input input-bordered w-full rounded-xl"
                placeholder="Photo URL"
              />
            </label>

            <button className="btn btn-primary w-full rounded-xl">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}
