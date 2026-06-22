import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";

const authRoutes = ["/login", "/signup"];

export default function AuthWrapper() {
  const { isAuthenticated } = useAuth();

  const { pathname } = useLocation();

  if (!isAuthenticated && pathname.startsWith("/dashboard")) {
    return <Navigate to={"/login"} />;
  }

  if (isAuthenticated && authRoutes.includes(pathname)) {
    return <Navigate to={"/dashboard"} />;
  }

  return <Outlet />;
}
