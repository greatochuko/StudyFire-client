export default function MetricsBar() {
  return (
    <div className="bg-surface border-t border-b border-border shadow-2xs">
      <div className="px-6 md:px-12 py-15 max-w-300 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div>
          <div className="font-serif text-[2.8rem] text-text font-bold leading-none mb-1.5">
            10<span className="text-accent font-medium">s</span>
          </div>
          <div className="text-sm text-muted font-medium">
            Average time to first quiz
          </div>
        </div>
        <div className="hidden lg:block w-px h-10 bg-border mx-auto my-auto"></div>
        <div>
          <div className="font-serif text-[2.8rem] text-text font-bold leading-none mb-1.5">
            3<span className="text-accent font-medium">×</span>
          </div>
          <div className="text-sm text-muted font-medium">
            Better recall vs passive reading
          </div>
        </div>
        <div className="hidden lg:block w-px h-10 bg-border mx-auto my-auto"></div>
        <div>
          <div className="font-serif text-[2.8rem] text-text font-bold leading-none mb-1.5">
            98<span className="text-accent font-medium">%</span>
          </div>
          <div className="text-sm text-muted font-medium">
            Answer accuracy vs source PDF
          </div>
        </div>
        <div className="hidden lg:block w-px h-10 bg-border mx-auto my-auto"></div>
        <div>
          <div className="font-serif text-[2.8rem] text-text font-bold leading-none mb-1.5">
            4.8<span className="text-accent font-medium">★</span>
          </div>
          <div className="text-sm text-muted font-medium">
            Average rating from students
          </div>
        </div>
      </div>
    </div>
  );
}
