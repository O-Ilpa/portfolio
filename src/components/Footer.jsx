import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { href: "#about",    label: "About"    },
  { href: "#skills",   label: "Skills"   },
  { href: "#projects", label: "Projects" },
  { href: "#contact",  label: "Contact"  },
];

const socials = [
  { href: "https://github.com/O-Ilpa",       Icon: FaGithub,   label: "GitHub"   },
  { href: "https://linkedin.com/in/o-ilpa",  Icon: FaLinkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(99,102,241,0.07),transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a
              href="#home"
              className="group flex items-center gap-2 font-display text-lg font-bold"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-sm font-bold shadow-lg shadow-indigo-500/30 transition-transform group-hover:scale-105">
                O
              </span>
              <span className="text-white/90">Omar Ilpa</span>
            </a>
            <p className="text-xs text-zinc-500 max-w-xs text-center md:text-left">
              Full Stack Engineer building fast, reliable web experiences.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-zinc-500 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="glass-sm flex h-9 w-9 items-center justify-center rounded-xl text-zinc-400 hover:text-white hover:border-indigo-500/40 transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
          <span>© {new Date().getFullYear()} Omar Ilpa. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Built with
            <span className="text-indigo-400 font-medium">React</span>
            &
            <span className="text-indigo-400 font-medium">Tailwind CSS</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
