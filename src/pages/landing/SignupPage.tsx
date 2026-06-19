import React, { useState } from "react";
import { Link } from "react-router";

export default function SignupPage(): React.JSX.Element {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);
    // Handle registration submission logic here
    setTimeout(() => setIsLoading(false), 1200);
  };

  return (
    <div className="bg-bg flex-1 text-text font-sans antialiased selection:bg-accent/15 grid grid-cols-1 lg:grid-cols-2 overflow-x-hidden">
      {/* ── LEFT COLUMN: AMBIENT DISPLAY / VALUE SHOWCASE ── */}
      <div
        className="hidden lg:flex flex-col justify-center items-center p-12 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(99,102,241,0.06) 0%, transparent 65%)",
        }}
      >
        {/* Subtle abstract soft pattern loops */}
        <div className="absolute top-12 left-12 w-64 h-64 rounded-full bg-accent-lo/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-12 right-12 w-80 h-80 rounded-full bg-accent-lo/15 blur-3xl pointer-events-none" />

        <div className="max-w-110 w-full text-center relative z-10">
          {/* Dashboard Preview Overlay Mock Card */}
          <div className="bg-surface border border-border/80 rounded-2xl shadow-2xl shadow-gray-200/60 p-5 text-left mb-10 transform scale-102 hover:scale-104 transition duration-500">
            <div className="flex items-center justify-between pb-3.5 border-b border-border/60 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-md">⚡</span>
                <div>
                  <h4 className="text-xs font-bold text-text leading-tight">
                    Instant Workspace Initialization
                  </h4>
                  <p className="text-[0.65rem] text-muted font-medium">
                    Account Status: Pending Creation
                  </p>
                </div>
              </div>
              <span className="text-[0.65rem] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-md uppercase tracking-wider">
                Free Tier
              </span>
            </div>

            <div className="p-3 bg-bg rounded-xl border border-border/40 text-[0.72rem] text-muted leading-relaxed">
              <strong className="text-text block mb-1 font-serif text-sm">
                🎁 Included Welcome Benefits:
              </strong>
              Full access to AI quiz builds, contextual document isolation
              engines, up to 3 active libraries, and custom spaced repetition
              trackers.
            </div>
          </div>

          {/* Inspirational Narrative Quote Hook */}
          <h2 className="font-serif text-3xl font-medium tracking-tight text-text leading-tight mb-4">
            "The page-cited assistant pinpointed exactly where I was confused."
          </h2>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
            Sarah M.
          </p>
          <p className="text-[0.7rem] text-muted">
            Nursing Student · UT Austin
          </p>
        </div>
      </div>

      {/* ── RIGHT COLUMN: REGISTRATION FORM ── */}
      <div className="flex flex-col justify-between p-6 md:p-12 bg-surface border-r border-border/50 relative z-10">
        {/* Top Header Logo */}
        <header className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="font-serif text-lg tracking-tight text-text font-semibold"
          >
            Study<span className="text-accent">Fire</span>
          </Link>
          <span className="text-xs text-muted">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-accent font-semibold hover:underline decoration-accent/30 underline-offset-4"
            >
              Log in
            </Link>
          </span>
        </header>

        {/* Center Card Content Form */}
        <main className="w-full max-w-90 mx-auto my-12 lg:my-auto py-8">
          <div className="mb-8">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-text mb-2">
              Start studying smarter
            </h1>
            <p className="text-xs text-muted leading-relaxed">
              Create your account in seconds to immediately parse your first
              textbook chapter or PDF.
            </p>
          </div>

          {/* Social Providers Buttons Stack */}
          <div className="flex flex-col gap-2.5 mb-6">
            <button className="w-full flex items-center justify-center gap-2.5 border border-border bg-bg/40 hover:bg-bg py-2.5 rounded-xl text-xs font-semibold text-text transition duration-150 cursor-pointer shadow-xs">
              <img
                src="/icons/google.svg"
                alt="google icon"
                width={16}
                height={16}
              />
              Sign up with Google
            </button>
          </div>

          {/* Elegant Section Divider */}
          <div className="flex items-center gap-3 my-6 text-[0.65rem] font-bold uppercase tracking-widest text-muted/60 before:h-px before:flex-1 before:bg-border/60 after:h-px after:flex-1 after:bg-border/60">
            Or with email
          </div>

          {/* Core Sign Up Registration Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-[0.68rem] font-bold uppercase tracking-wider text-muted mb-1.5 pl-0.5"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Alex Morgan"
                className="w-full bg-bg border border-border rounded-xl px-3.5 py-2.5 text-xs text-text placeholder-muted/50 outline-none focus:border-accent focus:ring-1 focus:ring-accent/10 transition duration-150 shadow-inner"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[0.68rem] font-bold uppercase tracking-wider text-muted mb-1.5 pl-0.5"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="youname@email.com"
                className="w-full bg-bg border border-border rounded-xl px-3.5 py-2.5 text-xs text-text placeholder-muted/50 outline-none focus:border-accent focus:ring-1 focus:ring-accent/10 transition duration-150 shadow-inner"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5 pl-0.5">
                <label
                  htmlFor="password"
                  className="block text-[0.68rem] font-bold uppercase tracking-wider text-muted"
                >
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  className="w-full bg-bg border border-border rounded-xl pl-3.5 pr-10 py-2.5 text-xs text-text placeholder-muted/50 outline-none focus:border-accent focus:ring-1 focus:ring-accent/10 transition duration-150 shadow-inner"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted/70 hover:text-text text-xs font-semibold cursor-pointer select-none"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <p className="text-xs text-muted mb-2 select-none text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-accent font-semibold hover:underline decoration-accent/30 underline-offset-4"
              >
                Log in
              </Link>
            </p>

            {/* Primary Sign Up Trigger Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full  bg-accent text-white py-3 rounded-xl text-xs font-bold shadow-md shadow-accent/15 hover:bg-accent/95 disabled:opacity-50 transform hover:-translate-y-px active:translate-y-0 disabled:transform-none transition duration-150 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Generating account...
                </>
              ) : (
                "Create Free Account"
              )}
            </button>
          </form>
        </main>

        {/* Footer Support Notice */}
        <section className="text-[0.68rem] text-muted text-center">
          Protected by context-locked storage secure nodes. <br />
          By continuing, you agree to our{" "}
          <Link to="/" className="underline hover:text-text">
            Terms
          </Link>{" "}
          &{" "}
          <Link to="/" className="underline hover:text-text">
            Privacy
          </Link>
          .
        </section>
      </div>
    </div>
  );
}
