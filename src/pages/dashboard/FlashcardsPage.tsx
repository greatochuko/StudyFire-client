import React, { useState } from "react";
import { Link } from "react-router";

interface FlashcardDeck {
  id: string;
  title: string;
  sourceDocument: string;
  cardCount: number;
  lastStudied: string;
  masteryPercentage: number;
}

export default function FlashcardsPage(): React.JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const mockDecks: FlashcardDeck[] = [
    {
      id: "deck-1",
      title: "CompTIA Security+ Threats & Vulnerabilities",
      sourceDocument: "Comptia Notes.pdf",
      cardCount: 24,
      lastStudied: "2 days ago",
      masteryPercentage: 65,
    },
    {
      id: "deck-2",
      title: "Network Security & Cryptography Basics",
      sourceDocument: "Cybersecurity factsheets.pdf",
      cardCount: 16,
      lastStudied: "1 week ago",
      masteryPercentage: 40,
    },
    {
      id: "deck-3",
      title: "Structural Topology Core Terms",
      sourceDocument: "Structural Topology.pdf",
      cardCount: 8,
      lastStudied: "Never",
      masteryPercentage: 0,
    },
  ];

  const filteredDecks = mockDecks.filter(
    (deck) =>
      deck.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deck.sourceDocument.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main className="flex flex-1 flex-col gap-8">
      {/* ── HEADER CONTAINER ── */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-text font-serif text-3xl font-bold tracking-tight">
            Flashcards
          </h1>
          <p className="text-muted mt-1 text-xs">
            Review automatically extracted smart decks to solidify your active
            recall.
          </p>
        </div>
      </div>

      {/* ── FILTER TOOLBAR ── */}
      <div className="bg-surface border-border/80 flex flex-col items-center justify-between gap-3 rounded-2xl border p-4 shadow-xs sm:flex-row">
        <div className="relative w-full sm:max-w-md">
          <span className="text-muted absolute top-1/2 left-3.5 -translate-y-1/2 text-xs select-none">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search decks or document sources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-bg border-border text-text placeholder-muted/50 focus:border-accent w-full rounded-xl border py-2 pr-4 pl-9 text-xs transition outline-none"
          />
        </div>
        <div className="text-muted shrink-0 text-[0.65rem] font-medium">
          Showing <strong>{filteredDecks.length}</strong> study decks
        </div>
      </div>

      {/* ── DECKS DISPLAY GRID ── */}
      {filteredDecks.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredDecks.map((deck) => (
            <div
              key={deck.id}
              className="bg-surface border-border/80 hover:border-border group flex flex-col justify-between rounded-2xl border p-5 shadow-xs transition-all"
            >
              {/* Top Meta Info */}
              <div className="mb-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-accent bg-accent-lo border-accent/10 rounded-md border px-2 py-0.5 text-[0.62rem] font-bold tracking-wide uppercase">
                    {deck.cardCount} Cards
                  </span>
                  <span className="text-muted text-[0.65rem]">
                    Studied {deck.lastStudied}
                  </span>
                </div>

                <h3 className="text-text group-hover:text-accent mt-3 line-clamp-2 font-serif text-sm font-bold transition-colors">
                  {deck.title}
                </h3>

                <div className="text-muted mt-2 flex items-center gap-1.5 truncate text-[0.65rem]">
                  <span>📄 Source:</span>
                  <span className="truncate font-medium underline">
                    {deck.sourceDocument}
                  </span>
                </div>
              </div>

              {/* Progress and Actions */}
              <div className="border-border/40 border-t pt-4">
                <div className="mb-4">
                  <div className="text-muted mb-1 flex items-center justify-between text-[0.65rem] font-bold tracking-wider uppercase">
                    <span>Mastery</span>
                    <span className="text-text">{deck.masteryPercentage}%</span>
                  </div>
                  <div className="bg-bg border-border/40 h-1.5 w-full overflow-hidden rounded-full border">
                    <div
                      className="bg-accent h-full rounded-full transition-all duration-500"
                      style={{ width: `${deck.masteryPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Point to sub-route for practice session */}
                <Link
                  to={`/dashboard/flashcards/${deck.id}`}
                  className="bg-text text-bg block w-full rounded-xl py-2.5 text-center text-xs font-bold shadow-xs transition hover:opacity-95"
                >
                  Start Practice Session
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-surface border-border rounded-2xl border border-dashed p-16 text-center shadow-xs">
          <span className="text-muted/40 mb-3 block text-3xl">🎴</span>
          <h3 className="text-text text-sm font-bold">
            No flashcard decks found
          </h3>
          <p className="text-muted mx-auto mt-1 max-w-xs text-xs">
            {searchQuery
              ? "No decks match your criteria."
              : "Head over to your Dashboard to upload documents and generate smart flashcards."}
          </p>
        </div>
      )}
    </main>
  );
}
