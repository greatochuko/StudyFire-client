import React, { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";

export default function DashboardPage(): React.JSX.Element {
  const { user } = useAuth();
  const [materialTitle, setMaterialTitle] = useState<string>("");

  return (
    <main className="flex flex-1 flex-col gap-8">
      {/* ── PAGE TITLE SECTION ── */}
      <div className="">
        <h1 className="text-text flex items-center gap-2 font-serif text-3xl font-bold tracking-tight">
          Good morning, {user?.fullName?.split(" ")[0] || "azeez"} 👋
        </h1>
        <p className="text-muted mt-1 text-xs">
          Here's what's happening with your studies today.
        </p>
      </div>

      {/* ── TWO-COLUMN CORE METRIC GRID (Inspired by dashboard.webp) ── */}
      <div className="flex flex-1 flex-col items-start gap-6 lg:flex-row">
        {/* LEFT COLUMN COMPONENT TRACKER: CREATOR & STATS (2/3 Grid Width) */}
        <div className="flex w-full flex-2 flex-col gap-6 lg:col-span-2">
          {/* Top Scope-Aligned Metric Cards Row */}
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Link
              to="/dashboard/materials"
              className="bg-surface border-border/80 group hover:border-border flex cursor-pointer items-center justify-between rounded-2xl border p-4 shadow-xs transition-all"
            >
              <div>
                <span className="text-muted mb-1 block text-[0.68rem] font-bold tracking-wider uppercase">
                  Documents
                </span>
                <p className="text-text font-serif text-2xl font-bold">3</p>
                <span className="text-muted mt-0.5 block text-[0.62rem]">
                  Total files source
                </span>
              </div>
              <span className="text-muted/50 group-hover:text-text text-xs transition-colors">
                📁
              </span>
            </Link>

            <Link
              to="/dashboard/flashcards"
              className="bg-surface border-border/80 group hover:border-border flex cursor-pointer items-center justify-between rounded-2xl border p-4 shadow-xs transition-all"
            >
              <div>
                <span className="text-muted mb-1 block text-[0.68rem] font-bold tracking-wider uppercase">
                  Flashcards
                </span>
                <p className="text-text font-serif text-2xl font-bold">48</p>
                <span className="text-muted mt-0.5 block text-[0.62rem]">
                  Generated review decks
                </span>
              </div>
              <span className="text-muted/50 group-hover:text-text text-xs transition-colors">
                🎴
              </span>
            </Link>

            <div className="bg-surface border-border/80 flex items-center justify-between rounded-2xl border p-4 shadow-xs">
              <div>
                <span className="text-muted mb-1 block text-[0.68rem] font-bold tracking-wider uppercase">
                  Quiz Avg
                </span>
                <p className="text-text font-serif text-2xl font-bold">13%</p>
                <span className="text-muted mt-0.5 block text-[0.62rem]">
                  Across quiz attempts
                </span>
              </div>

              {/* Radial Score Progress Circle Component using brand style variables */}
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
                <svg
                  className="h-full w-full -rotate-90 transform"
                  viewBox="0 0 36 36"
                >
                  <path
                    className="text-bg"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-accent"
                    strokeWidth="3"
                    strokeDasharray="13, 100"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="text-text absolute text-[0.62rem] font-bold">
                  13%
                </span>
              </div>
            </div>
          </section>

          {/* Creation Central Segment Target Board */}
          <section className="bg-surface border-border/80 rounded-2xl border p-6 shadow-xs">
            <h2 className="text-text mb-1 font-serif text-lg font-bold">
              Create New Study Set
            </h2>
            <p className="text-muted mb-5 text-[0.7rem]">
              Upload an educational source file to instantly generate
              interactive quiz structures and flashcards.
            </p>

            {/* Centered Drag-and-Drop Parsing File Input Deck */}
            <div className="border-border hover:border-accent/50 bg-bg/40 group mb-5 cursor-pointer rounded-2xl border-2 border-dashed p-10 text-center transition-colors">
              <span className="text-muted/60 mb-2 block text-2xl transition-transform group-hover:scale-105">
                📥
              </span>
              <p className="text-text text-xs font-bold">
                Drop PDF here or click to upload
              </p>
              <p className="text-muted mt-1 text-[0.65rem]">
                Supports PDF up to 100MB
              </p>
            </div>

            {/* Input Row for Generation Title Parameters */}
            <div className="flex flex-col items-end gap-3 sm:flex-row">
              <div className="w-full flex-1">
                <label className="text-muted mb-1.5 block pl-0.5 text-[0.65rem] font-bold tracking-wider uppercase">
                  Material Title <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  value={materialTitle}
                  onChange={(e) => setMaterialTitle(e.target.value)}
                  placeholder="e.g., CompTIA Security+ Chapter 4"
                  className="bg-bg border-border text-text placeholder-muted/50 focus:border-accent focus:ring-accent/10 w-full rounded-xl border px-3.5 py-2.5 text-xs shadow-inner transition outline-none focus:ring-1"
                />
              </div>
              <button className="bg-text text-bg w-full shrink-0 cursor-pointer rounded-xl px-5 py-3 text-xs font-bold tracking-wide shadow-xs transition duration-150 hover:opacity-95 sm:w-auto">
                Upload & Generate
              </button>
            </div>

            {/* Document Parameters Context Guidelines Row */}
            <div className="border-border/40 text-muted mt-4 flex items-center gap-4 border-t pt-4 text-[0.65rem]">
              <span>⏰ Accepted formats: PDF</span>
              <span>• Max file size: 100MB</span>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN COMPONENT TRACKER: RECENT INDEX & ASSISTANT RAILS (1/3 Grid Width) */}
        <div className="flex w-full min-w-xs flex-1 flex-col gap-6">
          {/* AI Advisor Assistant Recommendation Dashboard Deck */}
          <div className="bg-surface border-border/80 rounded-2xl border p-5 shadow-xs">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-text flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase">
                <span className="text-accent">✨</span> Study Coach
              </h3>
              <Link
                to="/dashboard/coach"
                className="text-accent bg-accent-lo border-accent/20 cursor-pointer rounded-md border px-2 py-1 text-[0.6rem] font-bold transition hover:opacity-90"
              >
                Unlock Advanced Coach
              </Link>
            </div>

            <div className="bg-bg/60 border-border/50 rounded-xl border p-4">
              <span className="text-accent mb-1 block text-[0.65rem] font-bold tracking-wide uppercase">
                ✦ AI Recommendation
              </span>
              <h4 className="text-text mb-1 font-serif text-sm leading-snug font-bold">
                Review your weak areas next
              </h4>
              <p className="text-muted mb-4 text-[0.7rem] leading-relaxed">
                Your latest quiz score shows this section needs another review
                pass.
              </p>
              <Link
                to="/dashboard/quizzes"
                className="bg-surface border-border text-text hover:border-accent flex w-full cursor-pointer items-center justify-center gap-1 rounded-xl border py-2 text-xs font-bold shadow-xs transition"
              >
                Open dynamic quiz <span className="text-[0.65rem]">→</span>
              </Link>
            </div>
            <span className="text-muted mt-3 block text-[0.62rem]">
              💡 Based on your recent study activity
            </span>
          </div>

          {/* Historical Reference Module Library Tracker Panel */}
          <div className="bg-surface border-border/80 rounded-2xl border p-5 shadow-xs">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-muted text-xs font-bold tracking-wider uppercase">
                Recent Documents
              </h3>
              <Link
                to="/dashboard/materials"
                className="text-text hover:text-accent text-[0.68rem] font-bold hover:underline"
              >
                View all
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              {[
                { name: "Comptia Notes", meta: "PDF", time: "25 days ago" },
                {
                  name: "Cybersecurity factsheets",
                  meta: "PDF",
                  time: "61 days ago",
                },
                {
                  name: "Structural Topology",
                  meta: "PDF",
                  time: "61 days ago",
                },
              ].map((doc, idx) => (
                <Link
                  key={idx}
                  to="/dashboard/materials"
                  className="border-border/40 hover:bg-bg/60 group flex cursor-pointer items-center justify-between rounded-xl border p-2.5 text-left transition"
                >
                  <div className="min-w-0">
                    <h4 className="text-text group-hover:text-accent truncate text-xs font-bold transition-colors">
                      {doc.name}
                    </h4>
                    <span className="text-muted mt-0.5 block text-[0.62rem] font-semibold tracking-wider uppercase">
                      {doc.meta}
                    </span>
                  </div>
                  <span className="text-muted shrink-0 text-[0.65rem] font-medium">
                    {doc.time}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
