import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  { path: "*", element: <NotFoundPage /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
