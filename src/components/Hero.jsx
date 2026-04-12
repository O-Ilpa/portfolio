import LogoLoop from "../LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact color="" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-animated-gradient" />
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <p className="text-sm uppercase tracking-widest text-zinc-400 animate-fade-in animation-delay-100">
          Full Stack Software Engineer
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-slide-up animation-delay-200">
          Building fast, reliable web apps with React, Node.js, and cloud-native
          tooling.
        </h1>
        <p className="mt-6 max-w-2xl text-zinc-300 animate-slide-up animation-delay-300">
          From slick UIs to solid backends, I enjoy bringing ideas to life with
          React, Node.js, and the cloud. Always learning, always building, and
          open to new opportunities.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-3 animate-slide-up animation-delay-400">
          <a
            href="#projects"
            className="rounded-md bg-indigo-500 px-4 py-2.5 font-medium text-white hover:bg-indigo-400 transition-colors"
          >
            View Work
          </a>
          <a
            href="/Omar_Ilpa_Resume_V3.pdf"
            download
            className="rounded-md bg-zinc-800 px-4 py-2.5 font-medium text-white hover:bg-zinc-700 transition-colors"
          >
            Download CV
          </a>
        </div>

        {/* Social Media Icons */}
        {/* Skills Icons */}
        <div
          className="mt-4"
          style={{ height: "200px", position: "relative", overflow: "hidden" }}
        >
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
}
