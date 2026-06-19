import { Link } from "react-router";

export default function Pricing() {
  return (
    <section className="px-6 md:px-12 py-25 max-w-300 mx-auto" id="pricing">
      <p className="text-[0.75rem] font-bold tracking-widest uppercase text-accent mb-4">
        Pricing
      </p>
      <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight mb-5 text-text">
        Start free.
        <br />
        Upgrade when you're hooked.
      </h2>
      <p className="text-md text-muted mb-14">
        No credit card to start. Cancel anytime. Student pricing available.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* FREE TIER */}
        <div className="bg-surface border border-border rounded-2xl p-9 relative shadow-sm">
          <div className="text-xs font-bold tracking-widest uppercase text-muted mb-3">
            Free
          </div>
          <div className="font-serif text-6xl text-text font-bold leading-none mb-1">
            <sup className="text-2xl font-medium vertical-super">$</sup>0
          </div>
          <div className="text-xs text-muted mb-6">Forever free</div>
          <div className="h-px bg-border mb-6"></div>
          <ul className="flex flex-col gap-3 mb-8 list-none">
            <li className="flex items-start gap-2.5 text-sm text-text">
              <span className="text-green-custom font-semibold shrink-0 mt-0.5">
                ✓
              </span>{" "}
              3 PDF uploads / month
            </li>
            <li className="flex items-start gap-2.5 text-sm text-text">
              <span className="text-green-custom font-semibold shrink-0 mt-0.5">
                ✓
              </span>{" "}
              Quiz generation (10 Q per PDF)
            </li>
            <li className="flex items-start gap-2.5 text-sm text-text">
              <span className="text-green-custom font-semibold shrink-0 mt-0.5">
                ✓
              </span>{" "}
              Flashcard generation
            </li>
            <li className="flex items-start gap-2.5 text-sm text-text">
              <span className="text-green-custom font-semibold shrink-0 mt-0.5">
                ✓
              </span>{" "}
              Chat with PDF (20 messages)
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted opacity-50">
              <span className="text-muted shrink-0 mt-0.5">-</span> Spaced
              repetition
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted opacity-50">
              <span className="text-muted shrink-0 mt-0.5">-</span> Export
              (Anki, Notion, PDF)
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted opacity-50">
              <span className="text-muted shrink-0 mt-0.5">-</span> Unlimited
              messages
            </li>
          </ul>
          <Link
            to="#"
            className="w-full text-center block border border-border text-text bg-bg px-5 py-2 rounded-lg text-sm font-medium hover:border-accent hover:text-accent hover:bg-surface transition duration-200"
          >
            Get started free
          </Link>
        </div>

        {/* PRO TIER */}
        <div className="bg-surface border-2 border-accent shadow-md shadow-accent/5 rounded-2xl p-9 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white text-[0.72rem] font-bold tracking-wider uppercase px-3.5 py-1 rounded-full whitespace-nowrap shadow-sm">
            Most popular
          </div>
          <div className="text-xs font-bold tracking-widest uppercase text-accent mb-3">
            Pro
          </div>
          <div className="font-serif text-6xl text-text font-bold leading-none mb-1">
            <sup className="text-2xl font-medium vertical-super">$</sup>12
          </div>
          <div className="text-xs text-muted mb-6">
            per month — or $96/yr (save 33%)
          </div>
          <div className="h-px bg-border mb-6"></div>
          <ul className="flex flex-col gap-3 mb-8 list-none">
            <li className="flex items-start gap-2.5 text-sm text-text">
              <span className="text-green-custom font-semibold shrink-0 mt-0.5">
                ✓
              </span>{" "}
              Unlimited PDF uploads
            </li>
            <li className="flex items-start gap-2.5 text-sm text-text">
              <span className="text-green-custom font-semibold shrink-0 mt-0.5">
                ✓
              </span>{" "}
              Unlimited quiz questions
            </li>
            <li className="flex items-start gap-2.5 text-sm text-text">
              <span className="text-green-custom font-semibold shrink-0 mt-0.5">
                ✓
              </span>{" "}
              Unlimited flashcards
            </li>
            <li className="flex items-start gap-2.5 text-sm text-text">
              <span className="text-green-custom font-semibold shrink-0 mt-0.5">
                ✓
              </span>{" "}
              Unlimited chat messages
            </li>
            <li className="flex items-start gap-2.5 text-sm text-text">
              <span className="text-green-custom font-semibold shrink-0 mt-0.5">
                ✓
              </span>{" "}
              Spaced repetition scheduler
            </li>
            <li className="flex items-start gap-2.5 text-sm text-text">
              <span className="text-green-custom font-semibold shrink-0 mt-0.5">
                ✓
              </span>{" "}
              Export to Anki, Notion, PDF
            </li>
            <li className="flex items-start gap-2.5 text-sm text-text">
              <span className="text-green-custom font-semibold shrink-0 mt-0.5">
                ✓
              </span>{" "}
              Priority processing
            </li>
          </ul>
          <Link
            to="#"
            className="w-full text-center block bg-accent text-white px-5.5 py-2.25 rounded-lg text-sm font-semibold shadow-sm hover:bg-accent/95 transform hover:-translate-y-px transition duration-150"
          >
            Start Pro — 7 days free
          </Link>
        </div>

        {/* TEAMS TIER */}
        <div className="bg-surface border border-border rounded-2xl p-9 relative shadow-sm">
          <div className="text-xs font-bold tracking-widest uppercase text-muted mb-3">
            Teams
          </div>
          <div className="font-serif text-6xl text-text font-bold leading-none mb-1">
            <sup className="text-2xl font-medium vertical-super">$</sup>8
          </div>
          <div className="text-xs text-muted mb-6">
            per seat / month (min. 5 seats)
          </div>
          <div className="h-px bg-border mb-6"></div>
          <ul className="flex flex-col gap-3 mb-8 list-none">
            <li className="flex items-start gap-2.5 text-sm text-text">
              <span className="text-green-custom font-semibold shrink-0 mt-0.5">
                ✓
              </span>{" "}
              Everything in Pro
            </li>
            <li className="flex items-start gap-2.5 text-sm text-text">
              <span className="text-green-custom font-semibold shrink-0 mt-0.5">
                ✓
              </span>{" "}
              Shared PDF library
            </li>
            <li className="flex items-start gap-2.5 text-sm text-text">
              <span className="text-green-custom font-semibold shrink-0 mt-0.5">
                ✓
              </span>{" "}
              Shared decks & quizzes
            </li>
            <li className="flex items-start gap-2.5 text-sm text-text">
              <span className="text-green-custom font-semibold shrink-0 mt-0.5">
                ✓
              </span>{" "}
              Study group analytics
            </li>
            <li className="flex items-start gap-2.5 text-sm text-text">
              <span className="text-green-custom font-semibold shrink-0 mt-0.5">
                ✓
              </span>{" "}
              Admin dashboard
            </li>
            <li className="flex items-start gap-2.5 text-sm text-text">
              <span className="text-green-custom font-semibold shrink-0 mt-0.5">
                ✓
              </span>{" "}
              Centralized billing
            </li>
            <li className="flex items-start gap-2.5 text-sm text-text">
              <span className="text-green-custom font-semibold shrink-0 mt-0.5">
                ✓
              </span>{" "}
              Dedicated support
            </li>
          </ul>
          <Link
            to="#"
            className="w-full text-center block border border-border text-text bg-bg px-5 py-2 rounded-lg text-sm font-medium hover:border-accent hover:text-accent hover:bg-surface transition duration-200"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
