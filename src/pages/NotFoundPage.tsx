import React from "react";
import { Link } from "react-router";

export default function NotFoundPage(): React.JSX.Element {
  return (
    <div className="bg-bg text-text font-sans antialiased selection:bg-accent/15 min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* ── TOP DECORATIVE HEADER ── */}
      <header className="px-6 md:px-12 py-5 border-b border-border/60 bg-bg/85 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center max-w-300 w-full mx-auto">
        <Link
          to="/"
          className="font-serif text-lg tracking-tight text-text font-semibold"
        >
          Study<span className="text-accent">Flow</span>
        </Link>
        <Link
          to="/"
          className="text-xs font-semibold text-muted hover:text-text transition duration-200"
        >
          Back to home →
        </Link>
      </header>

      {/* ── MAIN HERO BODY ── */}
      <main
        className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16 relative"
        style={{
          background:
            "radial-gradient(circle 400px at center, rgba(99,102,241,0.04) 0%, transparent 100%)",
        }}
      >
        <div className="max-w-125 w-full">
          {/* Subtle Accent Badge */}
          <div className="inline-flex items-center gap-1.5 bg-accent-lo text-accent border border-accent/20 text-[0.68rem] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
            Error 404
          </div>

          {/* Huge Serif Header */}
          <h1 className="font-serif text-7xl md:text-8xl tracking-tight text-text font-bold mb-4">
            Page <em className="not-italic text-accent">Not Found.</em>
          </h1>

          {/* Contextual Subtext */}
          <p className="text-md text-muted leading-relaxed mb-10 max-w-105 mx-auto">
            It looks like this link was omitted from the study guide. Let's get
            you back to your dashboard or your document library.
          </p>

          {/* Interactive Card Mock (Acts as an elegant menu wrapper) */}
          <div className="bg-surface border border-border rounded-2xl shadow-xl shadow-gray-200/40 p-2.5 text-left mb-8">
            <p className="text-[0.68rem] font-bold uppercase tracking-wider text-muted px-4 pt-3 pb-2">
              Suggested destinations
            </p>
            <div className="flex flex-col">
              <Link
                to="/"
                className="flex items-center justify-between p-3.5 rounded-xl hover:bg-bg border border-transparent hover:border-border group transition duration-150"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent-lo text-accent rounded-lg flex items-center justify-center text-sm font-semibold">
                    📁
                  </span>
                  <div>
                    <h4 className="text-xs font-semibold text-text group-hover:text-accent transition duration-150">
                      My Document Library
                    </h4>
                    <p className="text-[0.7rem] text-muted">
                      Access your uploaded PDFs and lecture slides
                    </p>
                  </div>
                </div>
                <span className="text-muted text-sm group-hover:translate-x-0.5 transition-transform duration-150">
                  →
                </span>
              </Link>

              <Link
                to="/"
                className="flex items-center justify-between p-3.5 rounded-xl hover:bg-bg border border-transparent hover:border-border group transition duration-150"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent-lo text-accent rounded-lg flex items-center justify-center text-sm font-semibold">
                    ⚡
                  </span>
                  <div>
                    <h4 className="text-xs font-semibold text-text group-hover:text-accent transition duration-150">
                      Active Study Session
                    </h4>
                    <p className="text-[0.7rem] text-muted">
                      Jump straight back into your latest quiz or flashcards
                    </p>
                  </div>
                </div>
                <span className="text-muted text-sm group-hover:translate-x-0.5 transition-transform duration-150">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Primary Call to Action Option */}
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/"
              className="bg-accent text-white px-6 py-2.75 rounded-xl text-xs font-semibold shadow-md shadow-accent/10 hover:bg-accent/95 transform hover:-translate-y-px transition duration-150"
            >
              Go to main dashboard
            </Link>
            <button
              onClick={() => window.history.back()}
              className="border border-border bg-surface text-muted px-6 py-2.75 rounded-xl text-xs font-medium hover:border-accent hover:text-accent transition duration-200 shadow-sm cursor-pointer"
            >
              ← Go back
            </button>
          </div>
        </div>
      </main>

      {/* ── FOOTER DECORATION ── */}
      <footer className="border-t border-border bg-surface py-6 px-6 text-center text-[0.7rem] text-muted">
        <div>
          © 2026 StudyFlow Inc. All tools context-locked to your materials.
        </div>
      </footer>
    </div>
  );
}
