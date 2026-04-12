import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../gsap.js";
import Reveal from "./ui/Reveal";
const experiences = [
  {
    period: "Dec 2025 — Present",
    role: "Software Developer",
    company: "GoMAXPAIN",
    location: "Remote, United States",
    active: true,
    bullets: [
      "Engineered scalable web scraping systems collecting ~500,000 verified professional records across 7 U.S. states to support outbound B2B outreach.",
      "Developed resilient Playwright-based automation capable of multi-day execution, handling dynamic pages, retries, and failure recovery.",
      "Standardized, cleaned, and deduplicated large datasets to ensure accuracy, consistency, and production usability.",
      "Translated Figma designs into production-ready web pages, ensuring visual accuracy and performance.",
      "Refactored and updated existing pages to improve responsiveness and maintain design consistency across breakpoints.",
    ],
    stack: ["Playwright", "Python", "Pandas", "React", "TailwindCSS", "TypeScript"],
  },
  {
    period: "Sep 2025 — Mar 2026",
    role: "Part-Time Software Engineer",
    company: "Spiritual Data",
    location: "Remote, USA",
    active: false,
    bullets: [
      "Developed real-world web services and intuitive dashboards for centralized data management.",
      "Improved developer workflows and delivered features that enhanced team velocity and code maintainability.",
    ],
    stack: [],
  },
  {
    period: "Apr 2025 — May 2025",
    role: "Full Stack Engineer",
    company: "Tamayoz Real Estate",
    location: "Remote, Egypt",
    active: false,
    bullets: [
      "Developed a full‑stack property management system including dynamic property show pages and admin CRUD.",
      "Added 4+ system modules enhancing property management workflows.",
      "Improved dashboard usability, reducing task completion time by ~35%.",
      "Built secure REST APIs with Express.js & MongoDB and optimized queries for ~20% faster responses.",
      "Developed a fully responsive interface using React and Tailwind CSS.",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Tailwind CSS", "JWT"],
  },
  {
    period: "2021 — 2025",
    role: "Freelance & Personal Projects",
    company: "Independent",
    location: "",
    active: false,
    bullets: [
      "Built and deployed a full-stack Notes Application featuring custom JWT authentication, email verification, and secure CRUD operations.",
      "Developed a real-time Live Chat App utilizing WebSockets for instant room-based messaging and notifications.",
      "Engineered a Library Management System with dynamic server-side rendering, complex data relationships, and advanced search filtering.",
      "Designed and launched responsive landing pages including the Keep It Green Initiative and an Interactive Bookstore using Swiper.js.",
    ],
    stack: [],
  },
];

export default function About() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Reveal experience cards individually as they enter the viewport
    const items = gsap.utils.toArray(".exp-card-anim");
    items.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    });
  }, { scope: containerRef });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(99,102,241,0.12),transparent_70%)]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Column - Pinned */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <Reveal>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-xs uppercase tracking-[0.2em] text-indigo-400 font-semibold">
                02. Experience
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
              I'm{" "}
              <span className="text-white font-semibold">Omar Ilpa</span>, a passionate
              full-stack developer who transforms ideas into polished, scalable digital products.
              I care about clean architecture, smooth UX, and writing code that lasts.
            </p>
          </Reveal>
        </div>

        {/* Right Column - Timeline */}
        <div className="lg:col-span-7 relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-indigo-500/20 to-transparent lg:hidden" />
          <div className="hidden lg:block absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-indigo-500/20 to-transparent" />

          <ol className="space-y-10">
            {experiences.map((exp, i) => (
              <li key={i} className="exp-card-anim relative pl-12 sm:pl-16 group">
                {/* Dot */}
                <div
                  className={`absolute left-[13.5px] top-[24px] h-3 w-3 rounded-full border-2 transition-all duration-300 z-10 ${
                    exp.active
                      ? "bg-indigo-500 border-indigo-400 shadow-lg shadow-indigo-500/50 timeline-dot-active"
                      : "bg-zinc-900 border-zinc-700 group-hover:border-indigo-500/60"
                  }`}
                />

                {/* Card */}
                <div className="glass rounded-2xl p-6 card-hover border border-white/5">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-1">
                        {exp.period}
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-zinc-400">
                        <span className="font-medium text-zinc-300">{exp.company}</span>
                        {exp.location && (
                          <>
                            <span className="text-zinc-600">·</span>
                            <span>{exp.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                    {exp.active && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500/60" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {exp.stack.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                      {exp.stack.map((s) => (
                        <span key={s} className="tag-pill">{s}</span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
