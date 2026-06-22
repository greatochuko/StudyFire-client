import { SparklesIcon } from "lucide-react";
import React from "react";

export default function AuthLoadingPage(): React.JSX.Element {
  return (
    <div className="bg-bg text-text relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-6 font-sans antialiased">
      {/* Centered geometric loading block */}
      <div className="flex w-full max-w-xs flex-col items-center text-center">
        {/* Animated Custom Ring Spinner */}
        <div className="relative mb-4 flex h-12 w-12 items-center justify-center">
          {/* Static track ring */}
          <div className="border-border/40 absolute inset-0 rounded-full border-2" />
          {/* Animated spinning indicator clip */}
          <div className="border-t-accent absolute inset-0 animate-spin rounded-full border-2 border-transparent" />

          {/* Minimal center spark element */}
          <span className="text-accent animate-pulse text-xs select-none">
            <SparklesIcon size={12} />
          </span>
        </div>

        {/* Brand/App Identifier text framework */}
        <h2 className="text-text flex items-center gap-1 font-serif text-base font-bold tracking-tight">
          Study<span className="text-accent">Fire</span>
        </h2>

        <p className="text-muted mt-1.5 animate-pulse text-[0.68rem] font-medium tracking-wider uppercase duration-1000">
          Securing workspace session...
        </p>
      </div>
    </div>
  );
}
