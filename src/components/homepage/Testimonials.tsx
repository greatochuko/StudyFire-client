export default function Testimonials() {
  return (
    <section
      className="px-6 md:px-12 py-25 max-w-300 mx-auto"
      id="testimonials"
    >
      <p className="text-[0.75rem] font-bold tracking-widest uppercase text-accent mb-4">
        Student reviews
      </p>
      <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight mb-5 text-text">
        What students say.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        <div className="bg-surface border border-border rounded-2xl p-7 shadow-xs">
          <div className="flex gap-0.5 text-amber-500 text-xs mb-3.5">
            ★★★★★
          </div>
          <p className="font-serif text-sm text-text italic leading-relaxed mb-5">
            "I uploaded my anatomy textbook chapter and had 40 quiz questions in
            under a minute. Passed my practical two days later. This is the only
            study tool I'm using now."
          </p>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-accent-lo text-accent font-bold text-xs flex items-center justify-center shrink-0">
              JL
            </div>
            <div>
              <div className="text-sm font-semibold text-text">Jordan L.</div>
              <div className="text-[0.78rem] text-muted">
                Pre-med, University of Michigan
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-7 shadow-xs">
          <div className="flex gap-0.5 text-amber-500 text-xs mb-3.5">
            ★★★★★
          </div>
          <p className="font-serif text-sm text-text italic leading-relaxed mb-5">
            "The chat feature is like having a tutor who actually read the same
            paper I did. Every answer comes back with the exact page number. I
            trust it."
          </p>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-accent-lo text-accent font-bold text-xs flex items-center justify-center shrink-0">
              SK
            </div>
            <div>
              <div className="text-sm font-semibold text-text">Simone K.</div>
              <div className="text-[0.78rem] text-muted">Law student, NYU</div>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-7 shadow-xs">
          <div className="flex gap-0.5 text-amber-500 text-xs mb-3.5">
            ★★★★★
          </div>
          <p className="font-serif text-sm text-text italic leading-relaxed mb-5">
            "I have 12 final exams coming up. StudyFire basically turned my
            lecture slides into a whole study program. The spaced rep flashcards
            are surprisingly good."
          </p>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-accent-lo text-accent font-bold text-xs flex items-center justify-center shrink-0">
              MP
            </div>
            <div>
              <div className="text-sm font-semibold text-text">Marcus P.</div>
              <div className="text-[0.78rem] text-muted">
                Computer Science, Georgia Tech
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
