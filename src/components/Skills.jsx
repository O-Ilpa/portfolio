import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../gsap.js";
import Reveal from "./ui/Reveal";import {
  HiDesktopComputer,
  HiCode,
  HiDatabase,
  HiTerminal,
} from "react-icons/hi";

const groups = [
  {
    title: "Front-End",
    Icon: HiDesktopComputer,
    color: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
    items: [
      { name: "React.js", icon: "devicon-react-original colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
    ],
  },
  {
    title: "Back-End / API",
    Icon: HiCode,
    color: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
    items: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      {
        name: "REST APIs",
        icon: (
          <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#a78bfa">
            <path d="M16 13c-1.3 0-2.4.8-2.8 2H9c0-.7-.2-1.3-.5-1.8l7.1-7.3c.3 0 .6.1.9.1C17.9 6 19 4.9 19 3.5S17.9 1 16.5 1 14 2.1 14 3.5c0 .3.1.7.2 1l-7 7.2c-.6-.5-1.4-.7-2.2-.7V6.8C6.2 6.4 7 5.3 7 4c0-1.7-1.3-3-3-3S1 2.3 1 4c0 1.3.8 2.4 2 2.8v4.7c-1.2.7-2 2-2 3.4 0 2.2 1.8 4 4 4 1.5 0 2.8-.8 3.4-2h4.7c.4 1.1 1.5 2 2.8 2 1.6 0 3-1.3 3-3C19 14.3 17.6 13 16 13z" />
          </svg>
        ),
      },
      { name: "WebSockets", icon: "devicon-socketio-original" },
    ],
  },
  {
    title: "Databases",
    Icon: HiDatabase,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-400",
    items: [
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
    ],
  },
  {
    title: "Tools & DevOps",
    Icon: HiTerminal,
    color: "from-orange-500/20 to-amber-500/20",
    border: "border-orange-500/20",
    iconColor: "text-orange-400",
    items: [
      {
        name: "JWT",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5 shrink-0">
            <polygon fill="#546e7a" points="21.906,31.772 24.507,29.048 27.107,31.772 27.107,43 21.906,43" />
            <polygon fill="#f50057" points="17.737,29.058 21.442,28.383 21.945,32.115 15.345,41.199 11.138,38.141" />
            <polygon fill="#d500f9" points="15.962,24.409 19.355,26.041 17.569,29.356 6.89,32.825 5.283,27.879" />
            <polygon fill="#29b6f6" points="17.256,19.607 19.042,22.922 15.649,24.554 4.97,21.084 6.577,16.137" />
            <polygon fill="#00e5ff" points="21.126,16.482 20.623,20.214 16.918,19.539 10.318,10.455 14.526,7.398" />
            <polygon fill="#546e7a" points="26.094,16.228 23.493,18.952 20.893,16.228 20.893,5 26.094,5" />
            <polygon fill="#f50057" points="30.262,18.943 26.558,19.618 26.055,15.886 32.654,6.802 36.862,9.859" />
            <polygon fill="#d500f9" points="32.039,23.59 28.645,21.958 30.431,18.643 41.11,15.174 42.717,20.12" />
            <polygon fill="#29b6f6" points="30.744,28.393 28.958,25.078 32.351,23.447 43.03,26.916 41.423,31.863" />
            <polygon fill="#00e5ff" points="26.874,31.518 27.378,27.786 31.082,28.461 37.682,37.545 33.474,40.602" />
          </svg>
        ),
      },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "AWS (EC2)", icon: "devicon-amazonwebservices-plain colored" },
      { name: "Linux", icon: "devicon-linux-plain" },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Reveal skill groups individually as they enter the viewport
    const items = gsap.utils.toArray(".skill-card-anim");
    items.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        scale: 0.9,
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.2)",
      });
    });
  }, { scope: sectionRef });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(99,102,241,0.13),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(168,85,247,0.08),transparent_70%)]" />

      {/* Heading */}
      <Reveal>
        <div className="flex items-center gap-4 mb-3">
          <span className="text-xs uppercase tracking-[0.2em] text-indigo-400 font-semibold">
            03. Stack
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
          Technologies <span className="text-gradient">I Use</span>
        </h2>
        <p className="mt-3 text-zinc-400 text-base max-w-lg">
          My tools of choice for building fast, scalable, and maintainable software.
        </p>
      </Reveal>

      {/* Grid */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group, gi) => (
          <div key={group.title} className={`skill-card-anim glass rounded-2xl p-6 card-hover h-full border ${group.border}`}>
            {/* Card header */}
            <div className={`mb-5 flex items-center gap-2.5 rounded-xl bg-gradient-to-br ${group.color} px-3 py-2`}>
              <group.Icon className={`h-4 w-4 shrink-0 ${group.iconColor}`} />
              <h3 className="text-sm font-semibold text-white leading-none">{group.title}</h3>
            </div>

            {/* Skills list */}
            <ul className="grid grid-cols-2 gap-2">
              {group.items.map((item) => (
                <li key={item.name}>
                  <div className="skill-item flex items-center gap-2 rounded-lg px-2.5 py-2">
                    {typeof item.icon === "string" ? (
                      <i className={`${item.icon} text-lg shrink-0`} />
                    ) : (
                      <span className="shrink-0 flex items-center">{item.icon}</span>
                    )}
                    <span className="text-xs font-medium text-zinc-300 truncate">
                      {item.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
