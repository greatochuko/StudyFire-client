import React from "react";
import { Link } from "react-router";

export default function DashboardNotFoundPage(): React.JSX.Element {
  return (
    <div className="animate-fadeIn flex min-h-[calc(100vh-3.5rem)] w-full flex-col items-center justify-center p-6 text-center">
      <div className="bg-surface border-border max-w-md rounded-2xl border p-8 shadow-xs">
        <span className="mb-4 block text-4xl select-none">🔍</span>

        <h2 className="text-text mb-2 font-serif text-2xl font-bold">
          Page Not Found
        </h2>

        <p className="text-muted mb-6 text-xs leading-relaxed">
          We couldn't find the page you're looking for. It might have been
          moved, renamed, or it hasn't been built yet.
        </p>

        <div className="flex justify-center">
          <Link
            to="/dashboard"
            className="bg-accent rounded-xl px-6 py-2.5 text-center text-xs font-bold text-white shadow-xs transition duration-150 hover:opacity-95"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
