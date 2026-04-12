import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../gsap.js";
import Reveal from "./ui/Reveal";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

const projects = [
  {
    id: 1,
    title: "Property Management System",
    description:
      "Full-stack property management app with admin dashboard, CRUD functionality, dynamic show pages, and secure JWT authentication.",
    image: "/projects/1.webp",
    tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    featured: true,
    code: "https://github.com/O-Ilpa/client",
    gradient: "from-indigo-500/30 to-blue-500/30",
  },
  {
    id: 2,
    title: "Notes App",
    description:
      "Custom signup/login flow with email verification, JWT-protected sessions, and full CRUD for personal notes.",
    image: "/projects/2.webp",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    featured: true,
    code: "https://github.com/O-Ilpa/notes-app-back-end",
    gradient: "from-violet-500/30 to-purple-500/30",
  },
  {
    id: 3,
    title: "Live Chat App",
    description:
      "Real-time messaging application using WebSockets with room-based chat and instant system notifications.",
    image: "/projects/5.webp",
    tags: ["React", "Node.js", "Express.js", "WebSockets"],
    featured: true,
    code: "https://github.com/O-Ilpa/live-chat",
    gradient: "from-emerald-500/30 to-teal-500/30",
  },
  {
    id: 4,
    title: "Library App",
    description:
      "Author and book management system with SSR, linking functionality, search, and filtering for data navigation.",
    image: "/projects/3.webp",
    tags: ["Node.js", "Express.js", "EJS", "MongoDB"],
    featured: false,
    code: "https://github.com/O-Ilpa/SSR-Library",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 5,
    title: "CRUDS Application",
    description:
      "Vanilla JavaScript application for managing data in local storage with a clean code-first approach.",
    image: "/projects/4.webp",
    tags: ["JavaScript", "HTML", "CSS", "Local Storage"],
    featured: false,
    code: "https://github.com/O-Ilpa/cruds",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 6,
    title: "Keep It Green Initiative",
    description:
      "Environmental initiative website with Swiper.js responsive sliders, clean UI, and accessibility focus.",
    image: "/projects/7.webp",
    tags: ["HTML", "CSS", "JavaScript", "Swiper.js"],
    featured: false,
    code: "https://github.com/O-Ilpa/kig",
    gradient: "from-green-500/20 to-lime-500/20",
  },
  {
    id: 7,
    title: "Interactive Bookstore",
    description:
      "Imaginary bookstore with responsive design, dynamic content, and user-friendly navigation using JavaScript.",
    image: "/projects/8.webp",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    featured: false,
    code: "https://github.com/O-Ilpa/B-Commerce",
    gradient: "from-rose-500/20 to-pink-500/20",
  },
  {
    id: 8,
    title: "Elzero Landing Page",
    description:
      "Responsive HTML & CSS template demonstrating semantic markup, Flexbox, and media queries.",
    image: "/projects/6.webp",
    tags: ["HTML", "CSS", "Flexbox", "Responsive Design"],
    featured: false,
    code: "https://github.com/O-Ilpa/omar.com",
    gradient: "from-sky-500/20 to-blue-500/20",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.filter((p) => p.featured);
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Reveal cards individually as they enter the viewport
    const cards = gsap.utils.toArray(".project-card-anim");
    cards.forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    });
  }, { scope: sectionRef, dependencies: [visible.length] });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(99,102,241,0.1),transparent_70%)]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Column - Pinned Heading */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <Reveal>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-xs uppercase tracking-[0.2em] text-indigo-400 font-semibold">
                04. Work
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-4 text-zinc-400 text-lg leading-relaxed max-w-sm">
              Selection of my recent work including full-stack applications, 
              interactive UI experiments, and back-end systems.
            </p>
          </Reveal>

          <div className="mt-8">
            <a
              href="#contact"
              className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium flex items-center gap-1.5 group"
            >
              Interested in working together?
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column - Project List */}
        <div className="lg:col-span-7 space-y-8">
          {visible.map((project, i) => (
            <article 
              key={project.id} 
              className="project-card-anim glass rounded-2xl overflow-hidden card-hover border border-white/5 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 h-full">
                {/* Image section (2/5) */}
                <div className={`md:col-span-2 relative min-h-[200px] bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* GitHub Link overlay on image for mobile */}
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:hidden absolute top-3 right-3 glass-sm rounded-lg p-2 text-white hover:bg-white/20"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                </div>

                {/* Content section (3/5) */}
                <div className="md:col-span-3 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm text-zinc-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex underline items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors group/link"
                    >
                      <FaGithub className="h-4 w-4" />
                      View Codebase
                      <HiExternalLink className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all font-bold" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* Show all / Show less toggle */}
          <div className="pt-4  mt-4 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="btn-secondary inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-zinc-300 transition-all hover:bg-white/5 border border-white/5"
            >
              {showAll ? (
                <>
                  Show Less
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>
                </>
              ) : (
                <>
                  View All Projects ({projects.length})
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
