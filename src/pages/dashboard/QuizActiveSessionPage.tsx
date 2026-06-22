import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router";

interface Question {
  id: string;
  text: string;
  options: string[];
}

const mockQuestions: Question[] = [
  {
    id: "q-1",
    text: "Which of the following cryptographic algorithms uses a symmetric key structure?",
    options: ["RSA", "AES", "ECC", "Diffie-Hellman"],
  },
  {
    id: "q-2",
    text: "What is the primary objective of implementing Salting frameworks alongside standard hashing routines?",
    options: [
      "To speed up database decryption throughput",
      "To compress plaintext payloads prior to storage",
      "To neutralize precomputed rainbow table attacks",
      "To obscure transport layers using TLS wrappers",
    ],
  },
  {
    id: "q-3",
    text: "Which protocol operates on port 443 by default to secure raw application data payloads?",
    options: ["SSH", "SFTP", "HTTPS", "IMAPS"],
  },
];

export default function QuizActiveSessionPage(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Mock Question Database Structure

  // Component state management layers
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, number>
  >({});
  const [timeLeft, setTimeLeft] = useState<number>(12 * 60); // 12 Minutes tracking instance
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Countdown execution tracking framework loop
  useEffect(() => {
    if (timeLeft <= 0 || isSubmitting) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isSubmitting]);

  // Formatter utilities for clean numeric display configurations
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleSelectOption = (optionIndex: number) => {
    const activeQuestion = mockQuestions[currentIndex];
    setSelectedAnswers((prev) => ({
      ...prev,
      [activeQuestion.id]: optionIndex,
    }));
  };

  const handleSubmitQuiz = () => {
    setIsSubmitting(true);

    // Simulate database pipeline latency before routing to analytics output slice
    setTimeout(() => {
      navigate(`/dashboard/quizzes/${id}/results?sessiong=session-2bb84`);
    }, 1500);
  };

  const currentQuestion = mockQuestions[currentIndex];
  const progressPercentage = Math.round(
    ((currentIndex + 1) / mockQuestions.length) * 100,
  );
  const isLastQuestion = currentIndex === mockQuestions.length - 1;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6">
      {/* ── TOP LIVE METRIC HEADER STATUS ROW ── */}
      <div className="flex items-center justify-between">
        <Link
          to="/dashboard/quizzes"
          className="text-muted hover:text-text flex items-center gap-1 text-xs font-semibold transition"
        >
          ← Quit Assessment
        </Link>

        <div className="flex items-center gap-4">
          <span className="text-muted font-mono text-[0.65rem] tracking-wider uppercase">
            Question {currentIndex + 1} of {mockQuestions.length}
          </span>
          <span
            className={`rounded-lg border px-3 py-1 font-mono text-xs font-bold ${
              timeLeft < 60 && !isSubmitting
                ? "animate-pulse border-red-100 bg-red-50 text-red-600"
                : "bg-surface border-border text-text"
            }`}
          >
            ⏱️ {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* ── INTERACTIVE PROGRESS RAIL ── */}
      <div className="bg-surface border-border/40 h-1.5 w-full overflow-hidden rounded-full border">
        <div
          className="bg-accent h-full rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* ── CORE EXAM SHEET COMPONENT ── */}
      <div className="bg-surface border-border/80 flex flex-col gap-6 rounded-2xl border p-6 shadow-xs sm:p-8">
        <div>
          <span className="text-muted mb-2 block text-[0.62rem] font-bold tracking-wider uppercase">
            Multiple Choice Select
          </span>
          <h2 className="text-text font-serif text-lg leading-relaxed font-bold">
            {currentQuestion.text}
          </h2>
        </div>

        {/* Option Selection List Deck */}
        <div className="flex flex-col gap-2.5">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedAnswers[currentQuestion.id] === idx;
            return (
              <button
                key={idx}
                disabled={isSubmitting}
                onClick={() => handleSelectOption(idx)}
                className={`group flex w-full cursor-pointer items-center rounded-xl border px-4 py-3.5 text-left text-xs font-medium transition ${
                  isSelected
                    ? "bg-accent-lo border-accent text-accent"
                    : "bg-bg/40 border-border hover:bg-bg hover:border-border/80 text-text"
                } disabled:cursor-not-allowed disabled:opacity-60`}
              >
                <div
                  className={`mr-3 flex h-4 w-4 items-center justify-center rounded-full border text-[0.5rem] transition ${
                    isSelected
                      ? "border-accent bg-accent text-white"
                      : "border-border bg-surface group-hover:border-muted"
                  }`}
                >
                  {isSelected && "✓"}
                </div>
                <span>{option}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── NAVIGATIONAL SHUFFLE NAVIGATION CONTROLS ── */}
      <div className="mt-2 flex items-center justify-between gap-4">
        <button
          disabled={currentIndex === 0 || isSubmitting}
          onClick={() => setCurrentIndex((prev) => prev - 1)}
          className="bg-surface border-border text-text hover:border-border cursor-pointer rounded-xl border px-5 py-2.5 text-xs font-bold shadow-xs transition disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>

        {isLastQuestion ? (
          <button
            onClick={handleSubmitQuiz}
            disabled={isSubmitting}
            className="bg-accent shadow-accent/15 flex min-w-27.5 cursor-pointer items-center justify-center gap-2 rounded-xl px-6 py-2.5 text-xs font-bold tracking-wide text-white shadow-xs transition hover:opacity-95"
          >
            {isSubmitting ? (
              <>
                <div className="h-3 w-3 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                <span>Saving...</span>
              </>
            ) : (
              <span>Submit Quiz</span>
            )}
          </button>
        ) : (
          <button
            onClick={() => setCurrentIndex((prev) => prev + 1)}
            className="bg-text text-bg cursor-pointer rounded-xl px-6 py-2.5 text-xs font-bold tracking-wide shadow-xs transition hover:opacity-95"
          >
            Next Question
          </button>
        )}
      </div>
    </main>
  );
}
