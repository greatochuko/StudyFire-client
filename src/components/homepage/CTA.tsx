import { Link } from "react-router";

export default function CTA() {
  return (
    <section className="px-6 md:px-12 py-25 text-center relative overflow-hidden bg-accent-lo/30 border-t border-b border-border/50">
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 65%)",
        }}
      />
      <div className="relative z-10 max-w-165 mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight mb-5 text-text">
          Your next exam is closer than you think.
        </h2>
        <p className="text-md text-muted mb-9">
          Upload a PDF and have a quiz ready in under 10 seconds. No credit
          card, no setup, no friction.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="#"
            className="bg-accent text-white px-8 py-3.5 rounded-xl text-base font-semibold shadow-md shadow-accent/10 hover:bg-accent/95 transform hover:-translate-y-px transition duration-150"
          >
            Upload your first PDF — free
          </Link>
          <Link
            to="#"
            className="border border-border bg-surface text-muted px-8 py-3.5 rounded-xl text-base font-medium hover:border-accent hover:text-accent transition duration-200 shadow-sm"
          >
            See a live demo
          </Link>
        </div>
        <p className="text-xs text-muted mt-5">
          Free forever · No card required · Cancel Pro anytime
        </p>
      </div>
    </section>
  );
}
