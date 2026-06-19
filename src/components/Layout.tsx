import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";

export default function Layout(): React.JSX.Element {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = (): void => {
      const sections = ["features", "how", "pricing", "testimonials"];
      let currentSection = "";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        // Checks if the element exists and if the scroll window has reached its top position
        // offsetTop - 120 gives a healthy buffer for sticky headers
        if (el && window.scrollY >= el.offsetTop - 120) {
          currentSection = sectionId;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once immediately to check position on initial load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-bg text-text font-sans antialiased selection:bg-accent/15 overflow-x-hidden min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4.5 bg-bg/85 backdrop-blur-md border-b border-border/60">
        <a
          href="#"
          className="font-serif text-lg tracking-tight text-text font-semibold"
        >
          Study<span className="text-accent">Flow</span>
        </a>
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <a
              href="#features"
              className={`text-sm font-medium transition-colors duration-200 ${activeSection === "features" ? "text-accent font-semibold" : "text-muted hover:text-text"}`}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#how"
              className={`text-sm font-medium transition-colors duration-200 ${activeSection === "how" ? "text-accent font-semibold" : "text-muted hover:text-text"}`}
            >
              How it works
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className={`text-sm font-medium transition-colors duration-200 ${activeSection === "pricing" ? "text-accent font-semibold" : "text-muted hover:text-text"}`}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className={`text-sm font-medium transition-colors duration-200 ${activeSection === "testimonials" ? "text-accent font-semibold" : "text-muted hover:text-text"}`}
            >
              Reviews
            </a>
          </li>
        </ul>
        <div className="flex gap-3 items-center">
          <a
            href="#"
            className="text-muted px-5 py-2 rounded-lg text-sm font-medium hover:text-text transition-colors duration-200"
          >
            Log in
          </a>
          <a
            href="#"
            className="bg-accent text-white px-5.5 py-2.25 rounded-lg text-sm font-semibold shadow-sm hover:bg-accent/95 transform hover:-translate-y-px transition duration-150 inline-block"
          >
            Start free
          </a>
        </div>
      </nav>

      <Outlet />

      <footer className="border-t border-border bg-surface px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between max-w-300 mx-auto gap-5 text-center">
        <a href="#" className="font-serif text-md text-muted font-semibold">
          Study<span className="text-accent">Flow</span>
        </a>
        <ul className="flex flex-wrap gap-7 justify-center list-none">
          <li>
            <a
              href="#"
              className="text-xs text-muted hover:text-text transition duration-200"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xs text-muted hover:text-text transition duration-200"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xs text-muted hover:text-text transition duration-200"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xs text-muted hover:text-text transition duration-200"
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xs text-muted hover:text-text transition duration-200"
            >
              Terms
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xs text-muted hover:text-text transition duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
        <p className="text-xs text-muted">
          © 2026 StudyFlow. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
