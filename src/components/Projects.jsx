import Reveal from "./ui/Reveal";

const projects = [
  {
    id: 1,
    title: "Property Management System",
    description:
      "Full-stack property management web application with admin dashboard, CRUD functionality, and secure JWT authentication.",
    image: "/projects/1.webp",
    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    features: [
      "Admin Dashboard",
      "CRUD Operations",
      "Search Functionality",
      "Responsive Design",
      "JWT Authentication",
    ],
    code: "https://github.com/O-Ilpa/client",
  },
  {
    id: 2,
    title: "Notes App",
    description:
      "Custom signup/login flow with email verification, JWT-protected sessions, and full CRUD functionality for personal notes.",
    image: "/projects/2.webp",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    features: [
      "Email Verification",
      "JWT Authentication",
      "CRUD Operations",
      "Search Capability",
      "Mobile-First UI",
    ],
    code: "https://github.com/O-Ilpa/notes-app-back-end",
  },
  {
    id: 3,
    title: "Library App",
    description:
      "Author and book management system with linking functionality, search, and filtering for better data navigation.",
    image: "/projects/3.webp",
    tags: ["Node.js", "Express.js", "EJS", "MongoDB"],
    features: [
      "Author Management",
      "Book Linking",
      "Search & Filter",
      "Dynamic Pages",
      "Data Navigation",
    ],
    code: "https://github.com/O-Ilpa/SSR-Library",
  },
  {
    id: 4,
    title: "CRUDS Application",
    description:
      "Vanilla JavaScript application for managing data in local storage with clean code and simplicity focus.",
    image: "/projects/4.webp",
    tags: ["JavaScript", "HTML", "CSS", "Local Storage"],
    features: [
      "CRUD Operations",
      "Local Storage",
      "Clean Code",
      "Simple Design",
      "Data Management",
    ],
    code: "https://github.com/O-Ilpa/cruds",
  },
  {
    id: 5,
    title: "Live Chat App",
    description:
      "Real-time messaging application using WebSockets with room-based chat and instant notifications.",
    image: "/projects/5.webp",
    tags: ["React", "Node.js", "Express.js", "WebSockets"],
    features: [
      "Real-time Messaging",
      "Room-based Chat",
      "System Notifications",
      "WebSocket Integration",
      "Responsive UI",
    ],
    code: "https://github.com/O-Ilpa/live-chat",
  },
  {
    id: 6,
    title: "Elzero Landing Page",
    description:
      "Responsive HTML and CSS template demonstrating semantic HTML, Flexbox, and media queries for cross-device compatibility.",
    image: "/projects/6.webp",
    tags: ["HTML", "CSS", "Flexbox", "Responsive Design"],
    features: [
      "Semantic HTML",
      "Flexbox Layout",
      "Media Queries",
      "Cross-device Compatibility",
      "Clean Design",
    ],
    code: "https://github.com/O-Ilpa/omar.com",
  },
  {
    id: 7,
    title: "Keep It Green Initiative",
    description:
      "Website for environmental initiative using Swiper.js for responsive sliders with focus on clean UI and accessibility.",
    image: "/projects/7.webp",
    tags: ["HTML", "CSS", "JavaScript", "Swiper.js"],
    features: [
      "Responsive Sliders",
      "Clean UI",
      "Accessibility",
      "Modern Design",
      "Environmental Theme",
    ],
    code: "https://github.com/O-Ilpa/kig",
  },
  {
    id: 8,
    title: "Interactive Bookstore",
    description:
      "Imaginary bookstore with responsive design, dynamic content, and user-friendly navigation using JavaScript.",
    image: "/projects/8.webp",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    features: [
      "Dynamic Content",
      "User-friendly Navigation",
      "Responsive Design",
      "Interactive Elements",
      "Bookstore Theme",
    ],
    code: "https://github.com/O-Ilpa/B-Commerce",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_90%_at_50%_0%,rgba(99,102,241,0.2),rgba(24,24,27,0)_70%)]" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_100%,rgba(99,102,241,0.20),rgba(24,24,27,0)_70%)]" />
      <div className="flex items-end justify-between">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-semibold">Projects </h2>
        </Reveal>
        <Reveal>
          <a
            href="#contact"
            className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Work with me →
          </a>
        </Reveal>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.id}>
            <article className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-transform duration-300 hover:-translate-y-1 hover-glow">
              <div className="h-40 bg-gradient-to-br from-indigo-500/40 to-fuchsia-500/40 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 to-fuchsia-500/40 flex items-center justify-center"
                  style={{ display: "none" }}
                >
                  <span className="text-white font-semibold text-lg">
                    {project.title}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-300 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-zinc-700 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  {/* <a className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors" href="#">Live</a> */}
                  <a
                    className="text-sm text-zinc-400 underline hover:text-white transition-colors"
                    href={project.code}
                  >
                    Code
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
