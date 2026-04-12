import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 animate-fade-in">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight hover:opacity-90 transition-opacity"
        >
          Omar Ilpa
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm text-zinc-300 items-center">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
          <a
            href="mailto:omarilpa.eg@gmail.com"
            className="inline-flex items-center rounded-md bg-white/10 px-3 py-1.5 text-white hover:bg-white/20 transition-colors"
          >
            Email
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/70 p-2 text-zinc-200 hover:bg-zinc-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 z-40 bg-black transition-opacity duration-300 backdrop-blur-md ${
          open
            ? "opacity-60 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile drawer */}
      <aside
        className={`md:hidden fixed inset-y-0 right-0 z-50 w-[100%] max-w-full border-l border-zinc-800 bg-zinc-950 transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between px-5 py-4 border-b border-zinc-800 bg-zinc-950/90">
          <span className="text-base font-semibold">Menu</span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 p-2 text-zinc-200 hover:bg-zinc-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="px-5 py-6 space-y-3 bg-[#060606]">
          <a
            onClick={() => setOpen(false)}
            href="#about"
            className="block rounded-lg px-4 py-3 text-lg font-medium text-zinc-100 bg-white/5 hover:bg-white/10"
          >
            About
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#skills"
            className="block rounded-lg px-4 py-3 text-lg font-medium text-zinc-100 bg-white/5 hover:bg-white/10"
          >
            Skills
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#projects"
            className="block rounded-lg px-4 py-3 text-lg font-medium text-zinc-100 bg-white/5 hover:bg-white/10"
          >
            Projects
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#contact"
            className="block rounded-lg px-4 py-3 text-lg font-medium text-zinc-100 bg-white/5 hover:bg-white/10"
          >
            Contact
          </a>
          <a
            onClick={() => setOpen(false)}
            href="mailto:omarilpa.eg@gmail.com"
            className="mt-2 block rounded-lg px-4 py-3 text-center text-base font-medium text-white bg-indigo-500 hover:bg-indigo-400"
          >
            Email
          </a>
        </nav>
      </aside>
    </header>
  );
}
