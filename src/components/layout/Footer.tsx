import React from "react";
import { Link } from "react-router";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="border-t border-border bg-surface px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-5 text-center">
      <Link to="/" className="font-serif text-md text-muted font-semibold">
        Study<span className="text-accent">Fire</span>
      </Link>
      <ul className="flex flex-wrap gap-7 justify-center list-none">
        <li>
          <Link
            to="/#features"
            className="text-xs text-muted hover:text-text transition duration-200"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            to="/#pricing"
            className="text-xs text-muted hover:text-text transition duration-200"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className="text-xs text-muted hover:text-text transition duration-200"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/privacy"
            className="text-xs text-muted hover:text-text transition duration-200"
          >
            Privacy
          </Link>
        </li>
        <li>
          <Link
            to="/terms"
            className="text-xs text-muted hover:text-text transition duration-200"
          >
            Terms
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-xs text-muted hover:text-text transition duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>
      <p className="text-xs text-muted">
        © 2026 StudyFire. All rights reserved.
      </p>
    </footer>
  );
}
