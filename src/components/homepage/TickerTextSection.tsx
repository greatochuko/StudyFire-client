import React from "react";

export default function TickerTextSection() {
  return (
    <div className="border-t border-b border-border bg-surface py-4.5 overflow-hidden shadow-xs">
      <div className="flex gap-14 whitespace-nowrap w-max animate-ticker">
        {[1, 2].map((loopIdx) => (
          <React.Fragment key={loopIdx}>
            <span className="flex items-center gap-2.5 text-xs text-muted shrink-0">
              <span className="text-accent text-lg leading-none">◆</span>
              <span className="font-semibold text-text">10 seconds</span> to
              generate your first quiz
            </span>
            <span className="flex items-center gap-2.5 text-xs text-muted shrink-0">
              <span className="text-accent text-lg leading-none">◆</span>
              Works with any PDF — textbooks, lecture slides, research papers
            </span>
            <span className="flex items-center gap-2.5 text-xs text-muted shrink-0">
              <span className="text-accent text-lg leading-none">◆</span>
              Spaced repetition built into flashcards
            </span>
            <span className="flex items-center gap-2.5 text-xs text-muted shrink-0">
              <span className="text-accent text-lg leading-none">◆</span>
              Chat answers always cite the exact page
            </span>
            <span className="flex items-center gap-2.5 text-xs text-muted shrink-0">
              <span className="text-accent text-lg leading-none">◆</span>
              Export to Anki, Notion, or PDF notes
            </span>
            <span className="flex items-center gap-2.5 text-xs text-muted shrink-0">
              <span className="text-accent text-lg leading-none">◆</span>
              Used by students at 50+ universities
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
