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
  };

  const navClass = ({ isActive }) =>
    isActive
      ? "px-3 py-2 rounded-xl bg-primary/10 text-primary font-semibold"
      : "px-3 py-2 rounded-xl hover:bg-base-200/60 transition";

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-base-100/70 backdrop-blur border-b border-base-200">
        <div className="container-page">
          <div className="navbar px-0">
            <div className="flex-1">
              <Link
                to="/"
                className="flex items-center gap-2 font-extrabold tracking-tight text-lg sm:text-xl"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  SS
                </span>
                <span>SkillSwap</span>
              </Link>
            </div>

            <div className="flex-none gap-2">
              <ul className="hidden sm:flex items-center gap-2">
                <li>
                  <NavLink to="/" className={navClass}>
                    Home
                  </NavLink>
                </li>
                {user && (
                  <li>
                    <NavLink to="/profile" className={navClass}>
                      My Profile
                    </NavLink>
                  </li>
                )}
              </ul>

              {/* Mobile menu */}
              <div className="dropdown dropdown-end sm:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-2xl w-56 border border-base-200">
                  <li><NavLink to="/" className={navClass}>Home</NavLink></li>
                  {user && <li><NavLink to="/profile" className={navClass}>My Profile</NavLink></li>}
                </ul>
              </div>

              {!user ? (
                <div className="flex gap-2">
                  <Link className="btn btn-ghost rounded-xl" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-primary rounded-xl" to="/signup">
                    Signup
                  </Link>
                </div>
              ) : (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    className="btn btn-ghost rounded-2xl px-2 gap-2"
                    title={user.displayName || "User"}
                  >
                    <div className="avatar">
                      <div className="w-9 rounded-2xl ring-1 ring-base-200">
                        <img
                          alt="avatar"
                          src={user.photoURL || `https://i.pravatar.cc/100?u=${user.uid}`}
                        />
                      </div>
                    </div>
                    <span className="hidden md:inline text-sm font-semibold max-w-[140px] truncate">
                      {user.displayName || "User"}
                    </span>
                  </div>

                  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-2xl w-56 border border-base-200">
                    <li className="px-3 py-2 text-sm opacity-70">
                      {user.displayName || "User"}
                    </li>
                    <li>
                      <button onClick={handleLogout} className="rounded-xl">
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
