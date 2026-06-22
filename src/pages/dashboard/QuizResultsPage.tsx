import React, { useMemo, useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router";

interface BreakdownItem {
  id: string;
  question: string;
  options: string[];
  userSelectedIndex: number;
  correctIndex: number;
  explanation: string;
}

interface QuizAttempt {
  id: string;
  timestamp: string; // The text to be displayed in the dropdown options
  timeElapsed: string;
  breakdown: BreakdownItem[];
}

// Grouped Quiz History Records
const mockQuizHistory: Record<string, QuizAttempt[]> = {
  "quiz-1": [
    {
      id: "session-7aa93",
      timestamp: "June 22, 2026 @ 11:30 AM",
      timeElapsed: "3m 42s",
      breakdown: [
        {
          id: "q-1",
          question:
            "Which of the following cryptographic algorithms uses a symmetric key structure?",
          options: ["RSA", "AES", "ECC", "Diffie-Hellman"],
          userSelectedIndex: 1,
          correctIndex: 1,
          explanation:
            "AES (Advanced Encryption Standard) is a symmetric-key block cipher, meaning the exact same key is utilized to handle both plaintext encryption and ciphered decryption processes.",
        },
        {
          id: "q-2",
          question:
            "What is the primary objective of implementing Salting frameworks alongside standard hashing routines?",
          options: [
            "To speed up database decryption throughput",
            "To compress plaintext payloads prior to storage",
            "To neutralize precomputed rainbow table attacks",
            "To obscure transport layers using TLS wrappers",
          ],
          userSelectedIndex: 0,
          correctIndex: 2,
          explanation:
            "Salting introduces randomized string noise to inputs before hashing. This forces unique hash footprints for otherwise identical strings, rendering precomputed dictionary arrays (rainbow tables) practically useless.",
        },
        {
          id: "q-3",
          question:
            "Which protocol operates on port 443 by default to secure raw application data payloads?",
          options: ["SSH", "SFTP", "HTTPS", "IMAPS"],
          userSelectedIndex: 2,
          correctIndex: 2,
          explanation:
            "HTTPS (HTTP Secure) layers standard web requests inside encrypted TLS socket pipelines routed through port 443 by default.",
        },
      ],
    },
    {
      id: "session-2bb84",
      timestamp: "June 18, 2026 @ 4:15 PM",
      timeElapsed: "5m 10s",
      breakdown: [
        {
          id: "q-1",
          question:
            "Which of the following cryptographic algorithms uses a symmetric key structure?",
          options: ["RSA", "AES", "ECC", "Diffie-Hellman"],
          userSelectedIndex: 0,
          correctIndex: 1,
          explanation:
            "AES (Advanced Encryption Standard) is a symmetric-key block cipher, meaning the exact same key is utilized to handle both plaintext encryption and ciphered decryption processes.",
        },
        {
          id: "q-2",
          question:
            "What is the primary objective of implementing Salting frameworks alongside standard hashing routines?",
          options: [
            "To speed up database decryption throughput",
            "To compress plaintext payloads prior to storage",
            "To neutralize precomputed rainbow table attacks",
            "To obscure transport layers using TLS wrappers",
          ],
          userSelectedIndex: 3,
          correctIndex: 2,
          explanation:
            "Salting introduces randomized string noise to inputs before hashing. This forces unique hash footprints for otherwise identical strings, rendering precomputed dictionary arrays (rainbow tables) practically useless.",
        },
        {
          id: "q-3",
          question:
            "Which protocol operates on port 443 by default to secure raw application data payloads?",
          options: ["SSH", "SFTP", "HTTPS", "IMAPS"],
          userSelectedIndex: 2,
          correctIndex: 2,
          explanation:
            "HTTPS (HTTP Secure) layers standard web requests inside encrypted TLS socket pipelines routed through port 443 by default.",
        },
      ],
    },
  ],
};

export default function QuizResultsPage(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  // Fallback to our dummy quiz collection if route data is unpopulated
  const historyList =
    mockQuizHistory[id || "quiz-1"] || mockQuizHistory["quiz-1"];

  // Read current tracking key from URL string state (?session=...)
  const activeSessionParam = searchParams.get("session");

  // Enforce structural sync: If param is completely absent or wrong, seed it into the URL route smoothly
  useEffect(() => {
    const isValidSession = historyList.some((h) => h.id === activeSessionParam);
    if (!activeSessionParam || !isValidSession) {
      if (historyList.length > 0) {
        setSearchParams({ session: historyList[0].id }, { replace: true });
      }
    }
  }, [activeSessionParam, historyList, setSearchParams]);

  // Compute active attempt log selection framework from search param state
  const activeAttempt = useMemo(() => {
    return (
      historyList.find((attempt) => attempt.id === activeSessionParam) ||
      historyList[0]
    );
  }, [activeSessionParam, historyList]);

  // Handle programmatic adjustment updates on the select node element block
  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ session: e.target.value });
  };

  if (!activeAttempt) {
    return (
      <div className="text-muted text-xs">No attempt data discovered.</div>
    );
  }

  const totalQuestions = activeAttempt.breakdown.length;
  const correctCount = activeAttempt.breakdown.filter(
    (item) => item.userSelectedIndex === item.correctIndex,
  ).length;
  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

  return (
    <main className="flex flex-1 flex-col gap-8">
      {/* ── HEADER NAVIGATION & DROP-SELECT PANEL ── */}
      <div className="border-border/40 flex flex-col justify-between gap-4 border-b pb-5 sm:flex-row sm:items-center">
        <div>
          <span className="text-muted block font-mono text-[0.62rem] tracking-wider uppercase">
            Assessment Analytics
          </span>
          <h1 className="text-text mt-0.5 font-serif text-2xl font-bold tracking-tight">
            Quiz Performance Profile
          </h1>

          {/* URL SearchParam-bound Select dropdown structure */}
          <div className="mt-3 flex items-center gap-2">
            <label
              htmlFor="attempt-selector"
              className="text-muted text-[0.68rem] font-bold tracking-wider uppercase"
            >
              Attempt History:
            </label>
            <div className="relative">
              <select
                id="attempt-selector"
                value={activeAttempt.id}
                onChange={handleDropdownChange}
                className="bg-surface border-border text-text focus:border-accent cursor-pointer appearance-none rounded-xl border py-1.5 pr-8 pl-3 text-xs font-semibold shadow-xs transition outline-none"
              >
                {historyList.map((attempt) => (
                  <option key={attempt.id} value={attempt.id}>
                    {attempt.timestamp}
                  </option>
                ))}
              </select>
              <span className="text-muted pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[0.5rem] select-none">
                ▼
              </span>
            </div>
          </div>
        </div>

        <Link
          to="/dashboard/quizzes"
          className="bg-surface border-border hover:border-border/80 text-text shrink-0 cursor-pointer rounded-xl border px-4 py-2 text-center text-xs font-bold shadow-xs transition sm:self-start"
        >
          Back to Assessments
        </Link>
      </div>

      {/* ── CENTRAL ANALYTICS SCORECARD ── */}
      <div className="bg-surface border-border/80 grid grid-cols-1 items-center gap-6 rounded-2xl border p-6 shadow-xs sm:grid-cols-3 sm:p-8">
        {/* Ring Chart Metric Frame */}
        <div className="border-border/50 flex flex-col items-center justify-center border-b pb-6 text-center sm:border-r sm:border-b-0 sm:pr-6 sm:pb-0">
          <span className="text-muted mb-2 block text-[0.62rem] font-bold tracking-wider uppercase">
            Final Accuracy
          </span>
          <div className="relative flex h-24 w-24 items-center justify-center">
            <svg
              className="h-full w-full -rotate-90 transform"
              viewBox="0 0 36 36"
            >
              <path
                className="text-border/40"
                strokeWidth="3"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-accent"
                strokeWidth="3"
                strokeDasharray={`${scorePercentage}, 100`}
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="text-text absolute font-serif text-xl font-bold">
              {scorePercentage}%
            </span>
          </div>
        </div>

        {/* Breakdown details list section */}
        <div className="flex flex-col justify-center gap-3.5 sm:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-muted block text-[0.62rem] font-bold tracking-wider uppercase">
                Correct Answers
              </span>
              <span className="text-text mt-0.5 block font-serif text-lg font-bold">
                {correctCount}{" "}
                <span className="text-muted font-sans text-xs">
                  / {totalQuestions}
                </span>
              </span>
            </div>
            <div>
              <span className="text-muted block text-[0.62rem] font-bold tracking-wider uppercase">
                Time Elapsed
              </span>
              <span className="text-text mt-0.5 block font-serif text-lg font-bold">
                {activeAttempt.timeElapsed}
              </span>
            </div>
          </div>

          <div className="bg-bg/60 border-border/40 text-muted rounded-xl border px-4 py-2.5 text-[0.7rem] leading-relaxed">
            🚀{" "}
            {scorePercentage >= 70
              ? "Solid performance! You are showing stable understanding of these security profiles."
              : "Keep pushing! Review the concept errors below to patch your memory gaps."}
          </div>
        </div>
      </div>

      {/* ── ITEMIZED DISSECTION BREAKDOWN STACK ── */}
      <div className="flex flex-col gap-4">
        <h3 className="text-text px-1 font-serif text-base font-bold">
          Review Question Breakdown
        </h3>

        <div className="flex flex-col gap-4">
          {activeAttempt.breakdown.map((item, index) => {
            const isUserCorrect = item.userSelectedIndex === item.correctIndex;

            return (
              <div
                key={item.id}
                className="bg-surface border-border/80 flex flex-col gap-4 rounded-2xl border p-5 shadow-xs sm:p-6"
              >
                {/* Header line context */}
                <div className="border-border/40 flex items-center justify-between gap-2 border-b pb-3">
                  <span className="text-muted font-mono text-[0.65rem] font-bold">
                    Question 0{index + 1}
                  </span>
                  <span
                    className={`rounded-md border px-2 py-0.5 text-[0.62rem] font-bold tracking-wide uppercase ${
                      isUserCorrect
                        ? "border-green-100 bg-green-50 text-green-600"
                        : "border-red-100 bg-red-50 text-red-600"
                    }`}
                  >
                    {isUserCorrect ? "Correct" : "Incorrect"}
                  </span>
                </div>

                {/* Core Question Content */}
                <h4 className="text-text font-serif text-sm leading-relaxed font-bold">
                  {item.question}
                </h4>

                {/* Answer choice comparison track */}
                <div className="mt-1 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div className="bg-bg/40 border-border/60 rounded-xl border px-3 py-2.5 text-xs">
                    <span className="text-muted mb-0.5 block text-[0.62rem] font-bold tracking-wider uppercase">
                      Your Choice
                    </span>
                    <span
                      className={
                        isUserCorrect
                          ? "font-semibold text-green-600"
                          : "font-semibold text-red-500"
                      }
                    >
                      {isUserCorrect ? "✓ " : "✗ "}
                      {item.options[item.userSelectedIndex]}
                    </span>
                  </div>

                  {!isUserCorrect && (
                    <div className="bg-bg/40 border-border/60 rounded-xl border px-3 py-2.5 text-xs">
                      <span className="text-accent mb-0.5 block text-[0.62rem] font-bold tracking-wider uppercase">
                        Correct Target
                      </span>
                      <span className="text-text font-semibold">
                        ✓ {item.options[item.correctIndex]}
                      </span>
                    </div>
                  )}
                </div>

                {/* AI Explanatory Insight block context */}
                <div className="bg-bg/40 border-border text-muted rounded-xl border border-dashed p-3.5 text-xs leading-relaxed">
                  <strong className="text-text mb-1 block font-medium">
                    Coach Insight:
                  </strong>
                  {item.explanation}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
