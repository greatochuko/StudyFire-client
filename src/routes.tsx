import HomePage from "./pages/landing/HomePage";
import Layout from "./components/layout/Layout";
import NotFoundPage from "./pages/layout/NotFoundPage";
import LoginPage from "./pages/landing/LoginPage";
import { createBrowserRouter } from "react-router";
import SignupPage from "./pages/landing/SignupPage";
import AuthWrapper from "./components/layout/AuthWrapper";

export const router = createBrowserRouter([
  {
    Component: AuthWrapper,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "/login", element: <LoginPage /> },
          { path: "/signup", element: <SignupPage /> },
        ],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
