import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-hot-toast";

export default function Navbar(){
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async ()=>{
    await logout();
    toast.success("Logged out");
    navigate("/");
  }

  return (
    <div className="navbar bg-base-100 border-b">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">SkillSwap</Link>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/">Home</NavLink></li>
          {user && <li><NavLink to="/profile">My Profile</NavLink></li>}
        </ul>
        {!user ? (
          <div className="flex gap-2">
            <Link className="btn btn-outline btn-sm" to="/login">Login</Link>
            <Link className="btn btn-primary btn-sm" to="/signup">Signup</Link>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="avatar" src={user.photoURL || `https://i.pravatar.cc/100?u=${user.uid}`} />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li className="px-3 py-2 text-sm opacity-70">{user.displayName || "User"}</li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
