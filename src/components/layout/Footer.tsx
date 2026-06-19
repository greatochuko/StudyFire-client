export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between max-w-300 mx-auto gap-5 text-center">
      <a href="#" className="font-serif text-md text-muted font-semibold">
        Study<span className="text-accent">Fire</span>
      </a>
      <ul className="flex flex-wrap gap-7 justify-center list-none">
        <li>
          <a
            href="#"
            className="text-xs text-muted hover:text-text transition duration-200"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-xs text-muted hover:text-text transition duration-200"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-xs text-muted hover:text-text transition duration-200"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-xs text-muted hover:text-text transition duration-200"
          >
            Privacy
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-xs text-muted hover:text-text transition duration-200"
          >
            Terms
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-xs text-muted hover:text-text transition duration-200"
          >
            Contact
          </a>
        </li>
      </ul>
      <p className="text-xs text-muted">
        © 2026 StudyFire. All rights reserved.
      </p>
    </footer>
  );
}
