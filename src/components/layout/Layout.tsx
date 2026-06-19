import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(): React.JSX.Element {
  return (
    <div className="bg-bg text-text font-sans antialiased selection:bg-accent/15 overflow-x-hidden min-h-screen">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
