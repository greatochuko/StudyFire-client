import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

export default function Header(): React.JSX.Element {
  const [activeSection, setActiveSection] = useState<string>("");
  const location = useLocation();

  // 1. Handle scrolling to the section when the URL hash changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Timeout ensures the DOM element has finished rendering if switching pages
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100, // Offset to clear your fixed navbar
            behavior: "smooth",
          });
        }, 100);
      }
    } else if (location.pathname === "/") {
      // Scroll to top if on home page with no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  // 2. Track scroll position to update active states in the nav menu
  useEffect(() => {
    const handleScroll = (): void => {
      const sections = ["features", "how", "pricing", "testimonials"];
      let currentSection = "";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && window.scrollY >= el.offsetTop - 120) {
          currentSection = sectionId;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4.5 bg-bg/85 backdrop-blur-md border-b border-border/60">
      <Link
        to="/"
        className="font-serif text-lg tracking-tight text-text font-semibold"
      >
        Study<span className="text-accent">Fire</span>
      </Link>
      <ul className="hidden md:flex gap-8 list-none">
        <li>
          <Link
            to="/#features"
            className={`text-sm font-medium transition-colors duration-200 ${activeSection === "features" ? "text-accent font-semibold" : "text-muted hover:text-text"}`}
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            to="/#how"
            className={`text-sm font-medium transition-colors duration-200 ${activeSection === "how" ? "text-accent font-semibold" : "text-muted hover:text-text"}`}
          >
            How it works
          </Link>
        </li>
        <li>
          <Link
            to="/#pricing"
            className={`text-sm font-medium transition-colors duration-200 ${activeSection === "pricing" ? "text-accent font-semibold" : "text-muted hover:text-text"}`}
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="/#testimonials"
            className={`text-sm font-medium transition-colors duration-200 ${activeSection === "testimonials" ? "text-accent font-semibold" : "text-muted hover:text-text"}`}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <div className="flex gap-3 items-center">
        <Link
          to="/login"
          className="text-muted px-5 py-2 rounded-lg text-sm font-medium hover:text-text transition-colors duration-200"
        >
          Log in
        </Link>
        <Link
          to="/signup"
          className="bg-accent text-white px-5.5 py-2.25 rounded-lg text-sm font-semibold shadow-sm hover:bg-accent/95 transform hover:-translate-y-px transition duration-150 inline-block"
        >
          Start free
        </Link>
      </div>
    </nav>
  );
}
