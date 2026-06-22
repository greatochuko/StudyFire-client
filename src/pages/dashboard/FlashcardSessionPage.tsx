import React, { useState } from "react";
import { Link, useParams } from "react-router";

interface Flashcard {
  id: string;
  question: string;
  answer: string;
}

export default function FlashcardSessionPage(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();

  console.log({ id });

  // Track quiz metrics locally
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [score, setScore] = useState<{ correct: number; total: number }>({
    correct: 0,
    total: 0,
  });
  const [sessionComplete, setSessionComplete] = useState<boolean>(false);

  // Mocked individual flashcards for a specific deck configuration
  const mockCards: Flashcard[] = [
    {
      id: "card-1",
      question:
        "What is the difference between Symmetric and Asymmetric encryption?",
      answer:
        "Symmetric encryption uses a single secret key for both encryption and decryption. Asymmetric encryption uses a public key pair (a public key and a private key) to secure data transmission.",
    },
    {
      id: "card-2",
      question: "What port does secure HTTPS communication use by default?",
      answer: "Port 443.",
    },
    {
      id: "card-3",
      question: "Define 'Salting' in the context of password hashing.",
      answer:
        "Salting is adding unique, random data to a password before it is run through a hashing function. This ensures that identical passwords yield completely distinct hash outputs, neutralizing rainbow table attacks.",
    },
  ];

  const currentCard = mockCards[currentIndex];
  const progressPercentage = Math.round(
    (currentIndex / mockCards.length) * 100,
  );

  const handleNextCard = (wasCorrect: boolean) => {
    if (wasCorrect) {
      setScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
    }

    setIsFlipped(false);

    // Give a brief delay for the flip transition back to face forward
    setTimeout(() => {
      if (currentIndex < mockCards.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setSessionComplete(true);
      }
    }, 200);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setScore({ correct: 0, total: 0 });
    setSessionComplete(false);
  };

  if (sessionComplete) {
    return (
      <main className="mx-auto flex max-w-md flex-1 flex-col items-center justify-center gap-6 text-center">
        <div className="bg-surface border-border/80 w-full rounded-2xl border p-8 shadow-xs">
          <span className="mb-4 block text-4xl select-none">🏆</span>
          <h2 className="text-text mb-1 font-serif text-2xl font-bold">
            Session Complete!
          </h2>
          <p className="text-muted mb-6 text-xs">
            You've finished reviewing this smart deck flashcard stack.
          </p>

          <div className="bg-bg/60 border-border/50 mb-6 rounded-xl border p-4">
            <span className="text-muted mb-1 block text-[0.62rem] font-bold tracking-wider uppercase">
              Accuracy Score
            </span>
            <span className="text-text block font-serif text-3xl font-bold">
              {Math.round((score.correct / mockCards.length) * 100)}%
            </span>
            <span className="text-muted mt-1 block text-[0.65rem]">
              Correctly recalled {score.correct} out of {mockCards.length} terms
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleRestart}
              className="bg-bg border-border text-text hover:border-accent cursor-pointer rounded-xl border py-2.5 text-xs font-bold shadow-xs transition"
            >
              Study Again
            </button>
            <Link
              to="/dashboard/flashcards"
              className="bg-text text-bg block rounded-xl py-2.5 text-center text-xs font-bold shadow-xs transition hover:opacity-95"
            >
              Back to Decks
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6">
      {/* ── TOP UTILITY META BAR ── */}
      <div className="flex items-center justify-between">
        <Link
          to="/dashboard/flashcards"
          className="text-muted hover:text-text flex items-center gap-1 text-xs font-semibold transition"
        >
          ← Exit Session
        </Link>
        <span className="text-muted font-mono text-[0.65rem]">
          Card {currentIndex + 1} of {mockCards.length}
        </span>
      </div>

      {/* ── PROGRESS BAR TIMER RAIL ── */}
      <div className="bg-surface border-border/40 h-1.5 w-full overflow-hidden rounded-full border">
        <div
          className="bg-accent h-full rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* ── CARD PERSPECTIVE FLIP SLUSH LAYOUT ── */}
      {/* CSS Perspective helps make the 3D rotating card animation clean */}
      <div
        className="group h-80 w-full cursor-pointer select-none"
        style={{ perspective: "1000px" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className="relative h-full w-full rounded-2xl transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* FRONT SIDE (Question) */}
          <div
            className="bg-surface border-border/80 absolute inset-0 flex flex-col justify-between rounded-2xl border-2 p-8 shadow-xs backface-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <span className="text-muted text-[0.62rem] font-bold tracking-wider uppercase">
              Question
            </span>
            <p className="text-text my-auto px-4 text-center font-serif text-lg leading-relaxed font-medium">
              {currentCard.question}
            </p>
            <span className="text-muted block text-center text-[0.62rem] italic">
              Click card canvas to reveal answer
            </span>
          </div>

          {/* BACK SIDE (Answer) */}
          <div
            className="bg-surface border-accent/30 absolute inset-0 flex flex-col justify-between rounded-2xl border-2 p-8 shadow-xs backface-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <span className="text-accent text-[0.62rem] font-bold tracking-wider uppercase">
              Correct Answer
            </span>
            <p className="text-text my-auto max-h-48 overflow-y-auto px-2 text-center text-xs leading-relaxed">
              {currentCard.answer}
            </p>
            <span className="text-muted block text-center text-[0.62rem] italic">
              Click card again to view prompt
            </span>
          </div>
        </div>
      </div>

      {/* ── ACTIVE RECALL VERDICT BUTTON CONTROLS ── */}
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <button
          disabled={!isFlipped}
          onClick={() => handleNextCard(false)}
          className={`border-border flex-1 cursor-pointer rounded-xl border py-3 text-xs font-bold shadow-xs transition ${
            isFlipped
              ? "bg-bg border-red-200 text-red-500 hover:bg-red-50/50"
              : "bg-bg text-muted cursor-not-allowed opacity-40"
          }`}
        >
          ❌ I got this wrong
        </button>

        <button
          disabled={!isFlipped}
          onClick={() => handleNextCard(true)}
          className={`flex-1 cursor-pointer rounded-xl py-3 text-xs font-bold shadow-xs transition ${
            isFlipped
              ? "bg-text text-bg shadow-accent/10 hover:opacity-95"
              : "bg-bg text-muted cursor-not-allowed opacity-40"
          }`}
        >
          ✅ I knew it!
        </button>
      </div>
    </main>
  );
}
