import React, { useState } from "react";
import { Link } from "react-router";

interface QuizItem {
  id: string;
  title: string;
  sourceDocument: string;
  questionCount: number;
  durationMinutes: number;
  lastAttemptScore: number | null; // null if unattempted
  difficulty: "Easy" | "Medium" | "Hard";
}

export default function QuizzesPage(): React.JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const mockQuizzes: QuizItem[] = [
    {
      id: "quiz-1",
      title: "CompTIA Security+ Protocol Verification Assessment",
      sourceDocument: "Comptia Notes.pdf",
      questionCount: 15,
      durationMinutes: 20,
      lastAttemptScore: 13, // 13% average metric matching dashboard
      difficulty: "Hard",
    },
    {
      id: "quiz-2",
      title: "Cryptography Concepts Quick Check",
      sourceDocument: "Cybersecurity factsheets.pdf",
      questionCount: 10,
      durationMinutes: 12,
      lastAttemptScore: null,
      difficulty: "Medium",
    },
  ];

  const filteredQuizzes = mockQuizzes.filter(
    (quiz) =>
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.sourceDocument.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main className="flex flex-1 flex-col gap-8">
      {/* ── HEADER CONTAINER ── */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-text font-serif text-3xl font-bold tracking-tight">
            AI Quizzes
          </h1>
          <p className="text-muted mt-1 text-xs">
            Challenge yourself with dynamically engineered questions sourced
            from your materials.
          </p>
        </div>
      </div>

      {/* ── UTILITY FILTER TOOLBAR ── */}
      <div className="bg-surface border-border/80 flex flex-col items-center justify-between gap-3 rounded-2xl border p-4 shadow-xs sm:flex-row">
        <div className="relative w-full sm:max-w-md">
          <span className="text-muted absolute top-1/2 left-3.5 -translate-y-1/2 text-xs select-none">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search quizzes or doc sources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-bg border-border text-text placeholder-muted/50 focus:border-accent w-full rounded-xl border py-2 pr-4 pl-9 text-xs transition outline-none"
          />
        </div>
        <div className="text-muted shrink-0 text-[0.65rem] font-medium">
          Showing <strong>{filteredQuizzes.length}</strong> active assessments
        </div>
      </div>

      {/* ── QUIZ OPTIONS DISPLAY GRID ── */}
      {filteredQuizzes.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {filteredQuizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-surface border-border/80 hover:border-border group flex flex-col justify-between rounded-2xl border p-5 shadow-xs transition-all"
            >
              {/* Meta Info Header */}
              <div className="mb-5">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`rounded-md border px-2 py-0.5 text-[0.6rem] font-bold tracking-wider uppercase ${
                      quiz.difficulty === "Hard"
                        ? "border-red-100 bg-red-50 text-red-600"
                        : quiz.difficulty === "Medium"
                          ? "border-amber-100 bg-amber-50 text-amber-600"
                          : "border-green-100 bg-green-50 text-green-600"
                    }`}
                  >
                    {quiz.difficulty}
                  </span>

                  <div className="text-muted flex items-center gap-2 text-[0.65rem] font-medium">
                    <span>⏱️ {quiz.durationMinutes} mins</span>
                    <span>•</span>
                    <span>{quiz.questionCount} Questions</span>
                  </div>
                </div>

                <h3 className="text-text group-hover:text-accent mt-3.5 line-clamp-2 font-serif text-sm font-bold transition-colors">
                  {quiz.title}
                </h3>

                <div className="text-muted mt-2 flex items-center gap-1.5 truncate text-[0.65rem]">
                  <span>📄 Source:</span>
                  <span className="truncate font-semibold underline">
                    {quiz.sourceDocument}
                  </span>
                </div>
              </div>

              {/* Status Performance Row */}
              <div className="border-border/40 flex flex-col justify-between gap-4 border-t pt-4 lg:flex-row lg:items-center">
                <div>
                  <span className="text-muted block text-[0.62rem] font-bold tracking-wider uppercase">
                    Last Attempt Score
                  </span>
                  <span
                    className={`mt-0.5 block font-serif text-sm font-bold ${
                      quiz.lastAttemptScore !== null
                        ? "text-text"
                        : "text-muted font-sans text-xs font-medium italic"
                    }`}
                  >
                    {quiz.lastAttemptScore !== null
                      ? `${quiz.lastAttemptScore}%`
                      : "Not taken yet"}
                  </span>
                </div>

                {/* Interactive Action Layout Wrapper */}
                <div className="grid shrink-0 grid-cols-2 gap-2 sm:flex sm:items-center sm:justify-end">
                  {quiz.lastAttemptScore !== null && (
                    <Link
                      to={`/dashboard/quizzes/${quiz.id}/results`}
                      className="bg-surface border-border text-text hover:border-border/80 rounded-xl border px-4 py-2.5 text-center text-xs font-bold tracking-wide shadow-xs transition"
                    >
                      View Results
                    </Link>
                  )}

                  <Link
                    to={`/dashboard/quizzes/${quiz.id}`}
                    className={`bg-text text-bg rounded-xl px-5 py-2.5 text-center text-xs font-bold tracking-wide shadow-xs transition hover:opacity-95 ${
                      quiz.lastAttemptScore !== null
                        ? "col-span-1"
                        : "col-span-2 sm:w-auto"
                    }`}
                  >
                    {quiz.lastAttemptScore !== null ? "Retake" : "Start Quiz"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-surface border-border rounded-2xl border border-dashed p-16 text-center shadow-xs">
          <span className="text-muted/40 mb-3 block text-3xl">📝</span>
          <h3 className="text-text text-sm font-bold">No quiz sets found</h3>
          <p className="text-muted mx-auto mt-1 max-w-xs text-xs">
            {searchQuery
              ? "No assessments match your filter selection."
              : "Upload documents to your workspace to automatically build comprehensive test configurations."}
          </p>
        </div>
      )}
    </main>
  );
}
