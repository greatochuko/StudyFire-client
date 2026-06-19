import React from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
  badges: string[];
}

const featuresData: Feature[] = [
  {
    icon: "🧠",
    title: "AI Quiz Generation",
    description:
      "Instant multiple-choice and short-answer questions pulled from your document's real content. Every wrong answer is explained, with a page reference.",
    badges: [
      "MCQ & short answer",
      "Score tracking",
      "Explain answers",
      "Retry mode",
    ],
  },
  {
    icon: "🃏",
    title: "Smart Flashcards",
    description:
      "Key terms, definitions, and concepts turned into flip cards automatically. A built-in spaced repetition scheduler shows you what you're about to forget.",
    badges: [
      "Spaced repetition",
      "Easy/Hard rating",
      "Anki export",
      "Save decks",
    ],
  },
  {
    icon: "💬",
    title: "Chat with Your PDF",
    description:
      "Ask anything about your document. Get specific, sourced answers — not hallucinations. Every reply cites the exact page so you can verify instantly.",
    badges: [
      "Page citations",
      "Suggested inputs",
      "Context-locked",
      "Highlight mode",
    ],
  },
];

export default function FeaturesGrid(): React.JSX.Element {
  return (
    <section className="px-6 md:px-12 py-25 max-w-300 mx-auto" id="features">
      <p className="text-[0.75rem] font-bold tracking-widest uppercase text-accent mb-4">
        What StudyFire does
      </p>
      <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight mb-5 text-text">
        Three tools.
        <br />
        One upload.
      </h2>
      <p className="text-md text-muted max-w-140 leading-relaxed">
        Every feature is generated from your actual document — not generic
        content. Your PDF is the curriculum.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-15">
        {featuresData.map((feature, idx) => (
          <div
            key={idx}
            className="bg-surface border border-border rounded-2xl p-8 shadow-sm hover:border-accent/40 hover:shadow-md transition duration-200"
          >
            <div className="w-11 h-11 rounded-xl bg-accent-lo flex items-center justify-center text-lg mb-5">
              {feature.icon}
            </div>
            <h3 className="font-serif text-md text-text font-semibold mb-2.5">
              {feature.title}
            </h3>
            <p className="text-xs text-muted leading-relaxed mb-5">
              {feature.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {feature.badges.map((badge, badgeIdx) => (
                <span
                  key={badgeIdx}
                  className="text-[0.72rem] font-semibold px-2.5 py-1 rounded-full bg-bg border border-border text-muted"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
