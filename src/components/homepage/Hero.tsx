import { useState } from "react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"quiz" | "flash" | "chat">("quiz");
  const [selectedQuizOpt, setSelectedQuizOpt] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // --- Core Handlers ---
  const handleQuizSelect = (optionKey: string): void => {
    if (selectedQuizOpt !== null) return;
    setSelectedQuizOpt(optionKey);
  };

  return (
    <section
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(99,102,241,0.05) 0%, transparent 70%)",
      }}
    >
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-16 px-6 md:px-12 pt-30 pb-20 max-w-300 mx-auto text-center lg:text-left">
        {/* Left Hero Block */}
        <div>
          <div className="inline-flex items-center gap-2 bg-accent/8 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-7">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-custom-pulse"></span>
            AI-powered studying
          </div>
          <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl leading-tight tracking-tight mb-6 text-text">
            Upload a PDF.
            <br />
            <em className="not-italic text-accent">Master it in minutes.</em>
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-120 mb-10 mx-auto lg:mx-0">
            StudyFlow reads your documents and instantly builds quizzes,
            flashcards, and a personal tutor — so you spend less time
            highlighting and more time actually learning.
          </p>
          <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start mb-12">
            <a
              href="#"
              className="bg-accent text-white px-8 py-3.5 rounded-xl text-base font-semibold shadow-md shadow-accent/10 hover:bg-accent/95 transform hover:-translate-y-px transition duration-150"
            >
              Upload your first PDF — free
            </a>
            <a
              href="#how"
              className="border border-border bg-surface text-muted px-8 py-3.5 rounded-xl text-base font-medium hover:border-accent hover:text-accent transition duration-200 shadow-sm"
            >
              See how it works
            </a>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="flex">
              <div className="w-8 h-8 rounded-full border-2 border-surface -ml-2 first:ml-0 bg-accent/10 flex items-center justify-center text-xs font-bold text-accent">
                JS
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-surface -ml-2 bg-accent/10 flex items-center justify-center text-xs font-bold text-accent">
                MK
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-surface -ml-2 bg-accent/10 flex items-center justify-center text-xs font-bold text-accent">
                AL
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-surface -ml-2 bg-accent/10 flex items-center justify-center text-xs font-bold text-accent">
                PR
              </div>
            </div>
            <p className="text-sm text-muted">
              <strong className="text-text font-bold">4,200+ students</strong>{" "}
              studying smarter this week
            </p>
          </div>
        </div>

        {/* Right Hero Block (Interactive Mock Dashboard Card) */}
        <div className="bg-surface border border-border rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50 relative text-left">
          <div className="px-5 py-4 border-b border-border bg-bg/50 flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-custom"></div>
            </div>
            <span className="text-xs text-muted font-medium ml-1">
              Biology 101 — Chapter 7.pdf
            </span>
          </div>

          <div className="flex border-b border-border bg-bg/20">
            <button
              onClick={() => setActiveTab("quiz")}
              className={`px-4.5 py-2.5 text-xs font-semibold cursor-pointer border-b-2 transition-colors duration-200 whitespace-nowrap ${activeTab === "quiz" ? "text-accent border-accent bg-surface" : "text-muted border-transparent hover:text-text"}`}
            >
              🧠 Quiz
            </button>
            <button
              onClick={() => setActiveTab("flash")}
              className={`px-4.5 py-2.5 text-xs font-semibold cursor-pointer border-b-2 transition-colors duration-200 whitespace-nowrap ${activeTab === "flash" ? "text-accent border-accent bg-surface" : "text-muted border-transparent hover:text-text"}`}
            >
              🃏 Flashcards
            </button>
            <button
              onClick={() => setActiveTab("chat")}
              className={`px-4.5 py-2.5 text-xs font-semibold cursor-pointer border-b-2 transition-colors duration-200 whitespace-nowrap ${activeTab === "chat" ? "text-accent border-accent bg-surface" : "text-muted border-transparent hover:text-text"}`}
            >
              💬 Chat
            </button>
          </div>

          <div className="p-6 min-h-72.5">
            {/* QUIZ PANEL MOCK */}
            {activeTab === "quiz" && (
              <div className="animate-[fadeIn_0.35s_ease]">
                <p className="font-serif text-md text-text mb-4.5 font-medium">
                  Which organelle is primarily responsible for ATP synthesis
                  during cellular respiration?
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { key: "a", label: "A", text: "Endoplasmic Reticulum" },
                    { key: "b", label: "B", text: "Mitochondria" },
                    { key: "c", label: "C", text: "Golgi Apparatus" },
                    { key: "d", label: "D", text: "Nucleus" },
                  ].map((opt) => {
                    const isCorrect = opt.key === "b";
                    let classes =
                      "border-border text-muted bg-surface hover:border-accent hover:text-text hover:bg-accent-lo/40";

                    if (selectedQuizOpt !== null) {
                      if (isCorrect) {
                        classes =
                          "border-green-custom text-green-custom bg-green-custom/5 font-medium";
                      } else if (selectedQuizOpt === opt.key) {
                        classes = "border-red-500 text-red-500 bg-red-50/70";
                      }
                    }

                    return (
                      <div
                        key={opt.key}
                        onClick={() => handleQuizSelect(opt.key)}
                        className={`p-3 border rounded-lg text-sm cursor-pointer flex items-center gap-2.5 transition-all duration-150 ${classes} ${selectedQuizOpt !== null ? "pointer-events-none" : ""}`}
                      >
                        <span className="w-5.5 h-5.5 rounded-md border border-current flex items-center justify-center text-[0.7rem] font-bold uppercase shrink-0">
                          {opt.label}
                        </span>
                        {opt.text}
                      </div>
                    );
                  })}
                </div>
                {selectedQuizOpt !== null && (
                  <div className="mt-4 p-3.5 bg-green-50 border border-green-200 rounded-lg text-xs text-green-700 animate-[fadeIn_0.3s_ease]">
                    ✨ <strong>Correct!</strong> Mitochondria produce ATP via
                    the electron transport chain. This was covered on page 4 of
                    your PDF.
                  </div>
                )}
              </div>
            )}

            {/* FLASHCARD PANEL MOCK */}
            {activeTab === "flash" && (
              <div className="animate-[fadeIn_0.35s_ease]">
                <div
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="cursor-pointer mb-5"
                  style={{ perspective: "800px" }}
                >
                  <div
                    className="w-full min-h-35 relative"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(180deg)" : "none",
                      transition:
                        "transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1)",
                    }}
                  >
                    {/* Front Facing */}
                    <div
                      className="absolute inset-0 p-6 rounded-xl border border-border bg-bg/50 flex flex-col justify-center items-center text-center min-h-35"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <span className="text-[0.65rem] font-bold tracking-widest uppercase text-muted mb-2">
                        Definition
                      </span>
                      <p className="font-serif text-base text-text font-medium">
                        What is the powerhouse of the cell?
                      </p>
                      <span className="text-xs text-accent mt-3 font-medium">
                        Tap to reveal →
                      </span>
                    </div>

                    {/* Back Facing */}
                    <div
                      className="absolute inset-0 p-6 rounded-xl border border-accent/20 bg-accent-lo/40 flex flex-col justify-center items-center text-center min-h-35"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <span className="text-[0.65rem] font-bold tracking-widest uppercase text-accent mb-2">
                        Answer
                      </span>
                      <p className="font-serif text-base text-text leading-relaxed">
                        The{" "}
                        <strong className="font-bold text-accent">
                          mitochondrion
                        </strong>{" "}
                        — produces ATP via oxidative phosphorylation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 justify-center mt-2">
                  <button className="px-4.5 py-1.75 rounded-md text-xs font-semibold bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 transition duration-200">
                    Hard
                  </button>
                  <button className="px-4.5 py-1.75 rounded-md text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-100 hover:bg-amber-100 transition duration-200">
                    OK
                  </button>
                  <button className="px-4.5 py-1.75 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100 hover:bg-emerald-100 transition duration-200">
                    Easy
                  </button>
                </div>
              </div>
            )}

            {/* CHAT PANEL MOCK */}
            {activeTab === "chat" && (
              <div className="animate-[fadeIn_0.35s_ease] flex flex-col justify-between">
                <div className="flex flex-col gap-3 mb-3">
                  <div className="max-w-[85%] p-3.5 rounded-xl text-xs leading-relaxed bg-accent text-white self-end rounded-br-none shadow-sm">
                    What's the difference between aerobic and anaerobic
                    respiration?
                  </div>
                  <div className="max-w-[85%] p-3.5 rounded-xl text-xs leading-relaxed bg-bg border border-border text-text self-start rounded-bl-none">
                    Aerobic respiration uses oxygen to fully break down glucose,
                    producing up to 36–38 ATP per molecule. Anaerobic
                    respiration works without oxygen, yielding only 2 ATP, but
                    operates much faster — useful when oxygen is scarce.
                    <span className="block mt-2 px-2.5 py-1 text-[0.72rem] text-accent bg-accent-lo rounded border border-accent/10 w-max font-medium">
                      📄 Source: page 6, paragraph 2
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 p-2 bg-surface border border-border rounded-xl items-center shadow-inner">
                  <input
                    type="text"
                    className="flex-1 bg-transparent border-none text-text text-xs outline-none placeholder-muted/70 pl-2"
                    placeholder="Ask anything about this PDF…"
                    disabled
                  />
                  <button className="bg-accent text-white rounded-md w-7.5 h-7.5 flex items-center justify-center text-sm opacity-40 cursor-not-allowed">
                    ↑
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
