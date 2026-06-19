import React, { useState } from "react";
import { Link } from "react-router";

export default function LoginPage(): React.JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);
    // Handle auth submission logic here
    setTimeout(() => setIsLoading(false), 1200);
  };

  return (
    <div className="bg-bg flex-1 text-text font-sans antialiased selection:bg-accent/15  grid grid-cols-1 lg:grid-cols-2 overflow-x-hidden">
      {/* ── LEFT COLUMN: AUTH FORM ── */}
      <div
        className="hidden  lg:flex flex-col justify-center items-center p-12 relative overflow-hidden"
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
                <span className="text-md">📑</span>
                <div>
                  <h4 className="text-xs font-bold text-text leading-tight">
                    MCAT Biochemistry — Ch.4
                  </h4>
                  <p className="text-[0.65rem] text-muted font-medium">
                    Uploaded 10 seconds ago
                  </p>
                </div>
              </div>
              <span className="text-[0.65rem] font-bold text-green-custom bg-green-custom/10 px-2 py-0.5 rounded-md uppercase tracking-wider">
                Ready
              </span>
            </div>

            <div className="p-3 bg-bg rounded-xl border border-border/40 text-[0.72rem] text-muted leading-relaxed">
              <strong className="text-text block mb-1 font-serif text-sm">
                🧠 Generated Study Metric:
              </strong>
              "We found 14 primary terms, 4 pathways, and mapped 25 spaced
              repetition modules across 3 difficulty variants."
            </div>
          </div>

          {/* Inspirational Narrative Quote Hook */}
          <h2 className="font-serif text-3xl font-medium tracking-tight text-text leading-tight mb-4">
            "Turned my continuous lecture slides into structured custom
            modules."
          </h2>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
            Marcus P.
          </p>
          <p className="text-[0.7rem] text-muted">
            Computer Science student · Georgia Tech
          </p>
        </div>
      </div>

      {/* ── RIGHT COLUMN: AMBIENT DISPLAY / TESTIMONIAL SHOWCASE ── */}
      <div className=" flex flex-col justify-between p-6 md:p-12 bg-surface border-r border-border/50 relative z-10">
        {/* Top Header Logo */}
        <header className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="font-serif text-lg tracking-tight text-text font-semibold"
          >
            Study<span className="text-accent">Flow</span>
          </Link>
          <span className="text-xs text-muted">
            New here?{" "}
            <Link
              to="/"
              className="text-accent font-semibold hover:underline decoration-accent/30 underline-offset-4"
            >
              Create an account
            </Link>
          </span>
        </header>

        {/* Center Card Content Form */}
        <main className="w-full max-w-90 mx-auto my-12 lg:my-auto">
          <div className="mb-8">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-text mb-2">
              Welcome back
            </h1>
            <p className="text-xs text-muted leading-relaxed">
              Log in to your context-locked workspace to resume your active
              study sessions.
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
              Continue with Google
            </button>
          </div>

          {/* Elegant Section Divider */}
          <div className="flex items-center gap-3 my-6 text-[0.65rem] font-bold uppercase tracking-widest text-muted/60 before:h-px before:flex-1 before:bg-border/60 after:h-px after:flex-1 after:bg-border/60">
            Or with email
          </div>

          {/* Core Login Credentials Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                placeholder="you@university.edu"
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
                <Link
                  to="/"
                  className="text-[0.68rem] font-medium text-muted hover:text-accent transition duration-150"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
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

            {/* Remember Device Checkbox Option */}
            <label className="flex items-center gap-2.5 mt-1 cursor-pointer group select-none">
              <input
                type="checkbox"
                className="w-4 h-4 accent-accent rounded-md border-border bg-bg text-white focus:ring-0 cursor-pointer"
              />
              <span className="text-xs text-muted group-hover:text-text transition duration-150">
                Keep me logged in for 30 days
              </span>
            </label>

            {/* Primary Log In Trigger Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-4 bg-accent text-white py-3 rounded-xl text-xs font-bold shadow-md shadow-accent/15 hover:bg-accent/95 disabled:opacity-50 transform hover:-translate-y-px active:translate-y-0 disabled:transform-none transition duration-150 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Verifying...
                </>
              ) : (
                "Log into StudyFire"
              )}
            </button>
          </form>
        </main>

        {/* Footer Support Notice */}
        <section className="text-[0.68rem] text-muted text-center  ">
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
