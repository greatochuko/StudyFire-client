import React from "react";
import { Link } from "react-router";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="border-border bg-surface flex flex-col items-center justify-between gap-5 border-t px-6 py-10 text-center md:flex-row md:px-12">
      <Link to="/" className="text-md text-muted font-serif font-semibold">
        Study<span className="text-accent">Fire</span>
      </Link>
      <ul className="flex list-none flex-wrap justify-center gap-7">
        <li>
          <Link
            to="/#features"
            className="text-muted hover:text-text text-xs transition duration-200"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            to="/#pricing"
            className="text-muted hover:text-text text-xs transition duration-200"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className="text-muted hover:text-text text-xs transition duration-200"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/privacy-policy"
            className="text-muted hover:text-text text-xs transition duration-200"
          >
            Privacy
          </Link>
        </li>
        <li>
          <Link
            to="/terms-of-service"
            className="text-muted hover:text-text text-xs transition duration-200"
          >
            Terms
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-muted hover:text-text text-xs transition duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>
      <p className="text-muted text-xs">
        © 2026 StudyFire. All rights reserved.
      </p>
    </footer>
  );
}
