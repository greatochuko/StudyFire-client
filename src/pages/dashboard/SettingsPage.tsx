import React, { useState } from "react";

interface UserProfile {
  name: string;
  email: string;
  avatarUrl: string;
}

interface CoachPreferences {
  aiModelTier: "standard" | "advanced-reasoning";
  socraticRigor: "gentle" | "balanced" | "hardcore";
  autoGenerateFlashcards: boolean;
}

export default function SettingsPage(): React.JSX.Element {
  // ── LOCAL STATE MOCKS ──
  const [profile, setProfile] = useState<UserProfile>({
    name: "Alex Mercer",
    email: "alex.mercer@secplus-pipeline.io",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  });

  const [coachPrefs, setCoachPrefs] = useState<CoachPreferences>({
    aiModelTier: "advanced-reasoning",
    socraticRigor: "balanced",
    autoGenerateFlashcards: true,
  });

  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  // ── ACTION HANDLERS ──
  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <main className="flex flex-1 flex-col gap-8">
      {/* ── HEADER CONTAINER ── */}
      <div className="border-border/40 flex items-center justify-between border-b pb-5">
        <div>
          <h1 className="text-text font-serif text-3xl font-bold tracking-tight">
            Account & System Settings
          </h1>
          <p className="text-muted mt-1 text-xs">
            Manage your interface ecosystem variables, profile preferences, and
            AI tutor alignment criteria.
          </p>
        </div>

        {saveSuccess && (
          <div className="animate-fade-in rounded-xl border border-green-100 bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
            ✓ Modifications cached safely
          </div>
        )}
      </div>

      <form onSubmit={handleSaveChanges} className="flex flex-col gap-6">
        {/* ── CARD 1: USER ACCOUNT IDENTITY PROFILE ── */}
        <div className="bg-surface border-border/80 rounded-2xl border p-6 shadow-xs">
          <span className="text-muted block font-mono text-[0.62rem] font-bold tracking-wider uppercase">
            User Workspace
          </span>
          <h3 className="text-text mt-1 font-serif text-base font-bold">
            Profile Credentials
          </h3>
          <p className="text-muted mt-0.5 text-xs">
            Update your public interface identification signatures.
          </p>

          <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="relative h-16 w-16 shrink-0">
              <img
                src={profile.avatarUrl}
                alt="Profile Avatar"
                className="border-border/60 h-full w-full rounded-2xl border object-cover"
              />
              <button
                type="button"
                className="bg-text text-bg border-surface absolute -right-1 -bottom-1 cursor-pointer rounded-md border px-1.5 py-0.5 text-[0.55rem] font-bold tracking-wider uppercase"
              >
                Edit
              </button>
            </div>

            <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="user-name"
                  className="text-muted text-[0.68rem] font-bold tracking-wider uppercase"
                >
                  Full Name
                </label>
                <input
                  id="user-name"
                  type="text"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile((p) => ({ ...p, name: e.target.value }))
                  }
                  className="bg-bg border-border text-text focus:border-accent w-full rounded-xl border px-3 py-2 text-xs transition outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="user-email"
                  className="text-muted text-[0.68rem] font-bold tracking-wider uppercase"
                >
                  Email Target Path
                </label>
                <input
                  id="user-email"
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile((p) => ({ ...p, email: e.target.value }))
                  }
                  className="bg-bg border-border text-text focus:border-accent w-full rounded-xl border px-3 py-2 text-xs transition outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── CARD 2: COACHING INFERENCE TUNING PARAMETERS ── */}
        <div className="bg-surface border-border/80 rounded-2xl border p-6 shadow-xs">
          <span className="text-accent block font-mono text-[0.62rem] font-bold tracking-wider uppercase">
            Intelligence Matrix
          </span>
          <h3 className="text-text mt-1 font-serif text-base font-bold">
            AI Study Coach Tuning
          </h3>
          <p className="text-muted mt-0.5 text-xs">
            Alter the deep reasoning pipelines and conversational patterns of
            your digital tutor.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* AI Model Core Selector */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="ai-model"
                className="text-muted text-[0.68rem] font-bold tracking-wider uppercase"
              >
                Inference Intelligence Model
              </label>
              <div className="relative">
                <select
                  id="ai-model"
                  value={coachPrefs.aiModelTier}
                  onChange={(e) =>
                    setCoachPrefs((c) => ({
                      ...c,
                      aiModelTier: e.target.value as any,
                    }))
                  }
                  className="bg-bg border-border text-text focus:border-accent w-full cursor-pointer appearance-none rounded-xl border py-2 pr-8 pl-3 text-xs font-semibold transition outline-none"
                >
                  <option value="standard">
                    Standard Engine (Fast Throughput)
                  </option>
                  <option value="advanced-reasoning">
                    Advanced Reasoning (Deep Chain-of-Thought)
                  </option>
                </select>
                <span className="text-muted pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[0.5rem]">
                  ▼
                </span>
              </div>
            </div>

            {/* Dialogue Style Selection */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="socratic-rigor"
                className="text-muted text-[0.68rem] font-bold tracking-wider uppercase"
              >
                Socratic Rigor Framework
              </label>
              <div className="relative">
                <select
                  id="socratic-rigor"
                  value={coachPrefs.socraticRigor}
                  onChange={(e) =>
                    setCoachPrefs((c) => ({
                      ...c,
                      socraticRigor: e.target.value as any,
                    }))
                  }
                  className="bg-bg border-border text-text focus:border-accent w-full cursor-pointer appearance-none rounded-xl border py-2 pr-8 pl-3 text-xs font-semibold transition outline-none"
                >
                  <option value="gentle">
                    Gentle Guidance (Explains errors instantly)
                  </option>
                  <option value="balanced">
                    Balanced Dialogue (Mixed prompt testing)
                  </option>
                  <option value="hardcore">
                    Extreme Reciprocal Inquiry (Forces rigorous defense)
                  </option>
                </select>
                <span className="text-muted pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[0.5rem]">
                  ▼
                </span>
              </div>
            </div>

            {/* Auto Flashcard Generation Toggle Switch */}
            <div className="bg-bg/40 border-border/40 mt-1 flex items-center justify-between gap-4 rounded-xl border p-4 sm:col-span-2">
              <div>
                <span className="text-text block text-xs font-bold">
                  Autonomous Recall Extractor
                </span>
                <span className="text-muted mt-0.5 block text-[0.68rem] leading-relaxed">
                  Automatically parse diagnostic test mismatches into persistent
                  flashcard decks.
                </span>
              </div>
              <label className="relative inline-flex cursor-pointer items-center select-none">
                <input
                  type="checkbox"
                  checked={coachPrefs.autoGenerateFlashcards}
                  onChange={(e) =>
                    setCoachPrefs((c) => ({
                      ...c,
                      autoGenerateFlashcards: e.target.checked,
                    }))
                  }
                  className="peer sr-only"
                />
                <div className="bg-border/60 peer after:bg-surface after:border-border peer-checked:bg-accent h-5 w-9 rounded-full peer-focus:outline-none after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:border after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white" />
              </label>
            </div>
          </div>
        </div>

        {/* ── CARD 3: APPLICATION STYLING & VIEWPORT ── */}
        <div className="bg-surface border-border/80 rounded-2xl border p-6 shadow-xs">
          <span className="text-muted block font-mono text-[0.62rem] font-bold tracking-wider uppercase">
            Viewport Interface
          </span>
          <h3 className="text-text mt-1 font-serif text-base font-bold">
            Application Preferences
          </h3>
          <p className="text-muted mt-0.5 text-xs">
            Adjust visual rendering profiles matching your lighting setup.
          </p>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {(["light", "dark", "system"] as const).map((t) => {
              const isActive = theme === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTheme(t)}
                  className={`cursor-pointer rounded-xl border p-3 text-center text-xs font-semibold capitalize shadow-xs transition ${
                    isActive
                      ? "border-text bg-text text-bg"
                      : "border-border/50 bg-bg/20 text-text hover:border-border"
                  }`}
                >
                  {t === "system"
                    ? "💻 System"
                    : t === "dark"
                      ? "🌙 Dark"
                      : "☀️ Light"}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── ACTION COMMIT TRAY ── */}
        <div className="border-border/40 flex items-center justify-end gap-3 border-t pt-5">
          <button
            type="button"
            className="border-border hover:border-border/80 text-text bg-surface cursor-pointer rounded-xl border px-5 py-2 text-xs font-bold shadow-xs transition"
          >
            Reset Overrides
          </button>
          <button
            type="submit"
            className="bg-text text-bg cursor-pointer rounded-xl px-6 py-2 text-xs font-bold shadow-xs transition hover:opacity-95"
          >
            Commit Modifications
          </button>
        </div>

        {/* ── CARD 4: DANGER ACTION BOUNDARIES ── */}
        <div className="mt-4 rounded-2xl border border-red-200/60 bg-red-50/20 p-6">
          <span className="block font-mono text-[0.62rem] font-bold tracking-wider text-red-600 uppercase">
            Critical Actions Boundary
          </span>
          <h3 className="mt-1 font-serif text-base font-bold text-red-900">
            Destructive System Protocols
          </h3>
          <p className="mt-0.5 text-xs leading-relaxed text-red-700/70">
            Executing operations inside this sector instantly wipes active
            records. There are no safe recursive backups available.
          </p>

          <div className="mt-5 flex flex-col justify-between gap-4 border-t border-red-100 pt-4 sm:flex-row sm:items-center">
            <div>
              <span className="block text-xs font-bold text-red-900">
                Flush All Session Logs
              </span>
              <span className="mt-0.5 block text-[0.68rem] text-red-700/60">
                Wipes all mock exam score profiles and dialogue history
                permanently.
              </span>
            </div>
            <button
              type="button"
              className="shrink-0 cursor-pointer rounded-xl border border-red-200 bg-white px-4 py-2 text-xs font-bold text-red-600 shadow-xs transition hover:bg-red-50"
            >
              Purge Study Storage
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
