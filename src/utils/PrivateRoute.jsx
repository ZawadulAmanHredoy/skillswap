import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function PrivateRoute({children}){
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <div className="min-h-[50vh] grid place-items-center">Loading…</div>;
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
  return children;
}
