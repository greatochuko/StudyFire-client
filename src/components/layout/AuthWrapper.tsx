import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";
import AuthLoadingPage from "../../pages/layout/AuthLoadingPage";

const authRoutes = ["/login", "/signup"];

export default function AuthWrapper() {
  const { isAuthenticated, isLoading } = useAuth();

  const { pathname } = useLocation();

  if (pathname !== "/") {
    if (isLoading) return <AuthLoadingPage />;

    if (!isAuthenticated && pathname.startsWith("/dashboard")) {
      return <Navigate to={"/login"} />;
    }

    if (isAuthenticated && authRoutes.includes(pathname)) {
      return <Navigate to={"/dashboard"} />;
    }
  }

  return <Outlet />;
}
