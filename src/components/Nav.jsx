import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about",    label: "About"    },
  { href: "#skills",   label: "Skills"   },
  { href: "#projects", label: "Projects" },
  { href: "#contact",  label: "Contact"  },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-fade-in ${
          scrolled
            ? "glass-strong shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2 font-display text-xl font-bold tracking-tight"
          >
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-sm font-bold shadow-lg shadow-indigo-500/30 transition-transform group-hover:scale-105">
              O
            </span>
            <span className="text-white/95">Omar Ilpa</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary ml-3 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white relative z-0"
            >
              <span className="relative z-10">Hire Me</span>
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="md:hidden glass-sm rounded-lg p-2.5 text-zinc-200 transition-colors hover:bg-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile drawer */}
      <aside
        className={`md:hidden fixed inset-y-0 right-0 z-50 w-80 glass-strong transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="font-display font-bold text-base text-white">Menu</span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="glass-sm rounded-lg p-2 text-zinc-300 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>

        <nav className="px-4 py-6 space-y-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              onClick={() => setOpen(false)}
              href={link.href}
              className="group flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium text-zinc-300 hover:text-white hover:bg-white/8 transition-all"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="btn-primary block text-center rounded-xl px-4 py-3.5 text-base font-semibold text-white relative z-0"
            >
              <span className="relative z-10">Hire Me</span>
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
}
