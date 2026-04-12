import Reveal from "./ui/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_90%_at_50%_100%,rgba(99,102,241,0.20),rgba(24,24,27,0)_70%)]" />
      <div className="grid md:grid-cols-1 gap-10 items-start">
        <div className="md:col-span-1">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold">About</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-zinc-300">
              I'm Omar Ilpa, a full-stack developer who loves turning ideas into
              clean, working apps. I enjoy React, Tailwind, Node.js, and
              databases, but more than tools, I care about building things that
              feel fast, modern, and useful.
            </p>
          </Reveal>

          {/* Timeline */}
          <div className="mt-10 relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-zinc-800" />
            <ol className="space-y-6">
              <Reveal>
                <li className="relative pl-10">
                  <span className="absolute left-2 top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20"></span>
                  <div className="text-sm uppercase tracking-wider text-zinc-400">
                    Dec 2025 — Present
                  </div>
                  <h3 className="mt-1 font-medium">
                    Software Developer · GoMAXPAIN{" "}
                    <i className="font-light">Remote, United States</i>
                  </h3>
                  <ul className="mt-2 text-zinc-300 space-y-2 list-disc ml-4">
                    <li>
                      Engineered scalable web scraping systems collecting
                      ~500,000 verified professional records across 7 U.S.
                      states to support outbound B2B outreach.
                    </li>
                    <li>
                      Developed resilient Playwright-based automation capable of
                      multi-day execution, handling dynamic pages, retries, and
                      failure recovery.
                    </li>
                    <li>
                      Standardized, cleaned, and deduplicated large datasets to
                      ensure accuracy, consistency, and production usability.
                    </li>
                    <li>
                      Reduced reliance on unreliable legacy datasets by
                      delivering internally-owned, high-quality lead data.
                    </li>
                    <li>
                      Collaborated with internal teams to validate scraped data
                      and provided front-end QA feedback during testing cycles.
                    </li>
                    <li>
                      Translated Figma designs into production-ready web pages,
                      ensuring visual accuracy and performance.
                    </li>
                    <li>
                      Refactored and updated existing pages to improve
                      responsiveness and maintain design consistency across
                      breakpoints.
                    </li>
                  </ul>
                  <p className="pt-3 text-sm text-zinc-400">
                    <span className="font-semibold">Tech Stack:</span> Playwright,
                    Python, Pandas, Web scraping, Automation, React, TailwindCSS,
                    tsx
                  </p>
                </li>
              </Reveal>

              <Reveal>
                <li className="relative pl-10">
                  <span className="absolute left-2 top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-600 ring-4 ring-zinc-600/20"></span>
                  <div className="text-sm uppercase tracking-wider text-zinc-400">
                    Sep 2025 — March 2026
                  </div>
                  <h3 className="mt-1 font-medium">
                    Part-Time Software Engineer · Spiritual Data{" "}
                    <i className="font-light">Remote (USA)</i>
                  </h3>
                  <ul className="mt-2 text-zinc-300 space-y-2 list-disc ml-4">
                    <li>
                      Developing real-world web services and intuitive dashboards
                      for centralized data management.
                    </li>
                    <li>
                      Improving developer workflows and delivering features that
                      enhance team velocity and code maintainability.
                    </li>
                  </ul>
                </li>
              </Reveal>

              <Reveal>
                <li className="relative pl-10">
                  <span className="absolute left-2 top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-600 ring-4 ring-zinc-600/20"></span>
                  <div className="text-sm uppercase tracking-wider text-zinc-400">
                    Apr 2025 – May 2025
                  </div>
                  <h3 className="mt-1 font-medium">
                    Full Stack Engineer · Tamayoz Real Estate{" "}
                    <i className="font-light">Remote, Egypt</i>
                  </h3>
                  <ul className="mt-2 text-zinc-300 space-y-2 list-disc ml-4">
                    <li>
                      Developed a full‑stack property management system including
                      dynamic property show pages and admin CRUD.
                    </li>
                    <li>
                      Added 4+ system modules enhancing property management
                      workflows.
                    </li>
                    <li>
                      Improved dashboard usability, reducing task completion time
                      by ~35%.
                    </li>
                    <li>
                      Built secure REST APIs with Express.js & MongoDB and
                      optimized queries for ~20% faster responses.
                    </li>
                    <li>
                      Developed a fully responsive interface using React and
                      Tailwind CSS.
                    </li>
                  </ul>
                  <p className="pt-3 text-sm text-zinc-400">
                    <span className="font-semibold">Tech Stack:</span> MongoDB,
                    Express.js, React.js, Tailwind CSS, JWT
                  </p>
                </li>
              </Reveal>

              <Reveal>
                <li className="relative pl-10">
                  <span className="absolute left-2 top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-600 ring-4 ring-zinc-600/20"></span>
                  <div className="text-sm uppercase tracking-wider text-zinc-400">
                    2021—2025
                  </div>
                  <h3 className="mt-1 font-medium">
                    Freelance & Personal Projects
                  </h3>
                  <ul className="mt-2 text-zinc-300 space-y-2 list-disc ml-4">
                    <li>
                      Built and deployed a full-stack{" "}
                      <span className="text-white font-medium">
                        Notes Application
                      </span>{" "}
                      featuring custom JWT authentication, email verification, and
                      secure CRUD operations.
                    </li>
                    <li>
                      Developed a real-time{" "}
                      <span className="text-white font-medium">
                        Live Chat App
                      </span>{" "}
                      utilizing WebSockets for instant room-based messaging and
                      notifications.
                    </li>
                    <li>
                      Engineered a{" "}
                      <span className="text-white font-medium">
                        Library Management System
                      </span>{" "}
                      with dynamic server-side rendering, complex data
                      relationships, and advanced search filtering.
                    </li>
                    <li>
                      Designed and launched several high-performance responsive
                      landing pages, including the{" "}
                      <span className="text-white font-medium">
                        Keep It Green Initiative
                      </span>{" "}
                      and an{" "}
                      <span className="text-white font-medium">
                        Interactive Bookstore
                      </span>
                      , using Swiper.js for modern UI interactions.
                    </li>
                  </ul>
                </li>
              </Reveal>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
