import { useEffect, useRef, useState } from "react";

interface StepItem {
  icon: string;
  label: string;
  sub: string;
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(0);

  // --- Refs ---
  const visualInnerRef = useRef<HTMLDivElement>(null);

  // --- Constants ---
  const stepsData: StepItem[] = [
    {
      icon: "📄",
      label: "Upload your PDF",
      sub: "Drag, drop, or browse — any PDF accepted",
    },
    {
      icon: "⚙️",
      label: "AI reads it",
      sub: "Concepts, terms, and relationships extracted in ~10 seconds",
    },
    {
      icon: "🎓",
      label: "Pick your study mode",
      sub: "Quiz, flashcards, and chat all ready from one upload",
    },
    {
      icon: "📈",
      label: "Track your progress",
      sub: "Weak areas flagged, spaced rep keeps you sharp",
    },
  ];

  // --- Effects ---
  // Auto-advance How It Works steps every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stepsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stepsData.length]);

  // Handle step transitions inside the visual showcase panel
  useEffect(() => {
    if (visualInnerRef.current) {
      visualInnerRef.current.style.opacity = "0";
      visualInnerRef.current.style.transform = "translateY(10px)";

      const timeout = setTimeout(() => {
        if (visualInnerRef.current) {
          visualInnerRef.current.style.opacity = "1";
          visualInnerRef.current.style.transform = "translateY(0)";
        }
      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [activeStep]);

  return (
    <section className="px-6 md:px-12 py-25 max-w-300 mx-auto" id="how">
      <p className="text-[0.75rem] font-bold tracking-widest uppercase text-accent mb-4">
        How it works
      </p>
      <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight mb-5 text-text">
        From PDF to ready
        <br />
        to study in seconds.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mt-15">
        <div className="flex flex-col">
          {[
            {
              num: 1,
              title: "Upload any PDF",
              desc: "Drop in a textbook chapter, lecture notes, research paper, or your own study material. Any PDF works — up to 200 pages.",
            },
            {
              num: 2,
              title: "AI reads and understands it",
              desc: "StudyFire maps the document's concepts, key terms, and relationships — not just keywords. This takes about 10 seconds.",
            },
            {
              num: 3,
              title: "Choose your study mode",
              desc: "Launch a quiz, flip through flashcards, or open the chat. All three are ready immediately from the same upload.",
            },
            {
              num: 4,
              title: "Come back and improve",
              desc: "Your progress is saved. Weak areas are flagged. Spaced repetition brings difficult concepts back at exactly the right time.",
            },
          ].map((step, idx) => (
            <div
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`flex gap-5 py-6 border-b border-border cursor-pointer transition-opacity duration-200 first:pt-0 last:border-none ${activeStep === idx ? "opacity-100" : "opacity-50"}`}
            >
              <div
                className={`w-8 h-8 rounded-md border text-xs font-bold flex items-center justify-center shrink-0 transition-all duration-200 ${activeStep === idx ? "bg-accent border-accent text-white shadow-sm" : "bg-surface border-border text-muted"}`}
              >
                {step.num}
              </div>
              <div>
                <h3 className="font-serif text-base text-text font-semibold mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Dynamic Visual Block */}
        <div className="bg-surface border border-border rounded-2xl p-9 min-h-90 flex items-center justify-center relative overflow-hidden shadow-xs">
          <div className="absolute -top-15 -right-15 w-50 h-50 rounded-full bg-linear-to-br from-accent/10 to-transparent pointer-events-none" />
          <div
            ref={visualInnerRef}
            className="text-center relative z-10 transition-all duration-200"
          >
            <span className="text-[3.5rem] mb-4 block">
              {stepsData[activeStep].icon}
            </span>
            <p className="font-serif text-md text-text font-bold mb-2">
              {stepsData[activeStep].label}
            </p>
            <p className="text-sm text-muted max-w-70 mx-auto">
              {stepsData[activeStep].sub}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
