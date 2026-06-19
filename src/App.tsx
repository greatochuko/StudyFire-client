import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
