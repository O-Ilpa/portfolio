import Reveal from "./ui/Reveal";

const groups = [
  {
    title: "Front-End",
    items: [
      { name: "React.js", icon: "devicon-react-original colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    ],
  },
  {
    title: "Back-End",
    items: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express", icon: "devicon-express-original " },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      {
        name: "REST APIs",
        icon: (
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            className="mb-[10px]"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#000000"
              strokeWidth="0.32"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <rect x="0" fill="none" width="20" height="20"></rect>
              <g>
                <path d="M16 13c-1.3 0-2.4.8-2.8 2H9c0-.7-.2-1.3-.5-1.8l7.1-7.3c.3 0 .6.1.9.1C17.9 6 19 4.9 19 3.5S17.9 1 16.5 1 14 2.1 14 3.5c0 .3.1.7.2 1l-7 7.2c-.6-.5-1.4-.7-2.2-.7V6.8C6.2 6.4 7 5.3 7 4c0-1.7-1.3-3-3-3S1 2.3 1 4c0 1.3.8 2.4 2 2.8v4.7c-1.2.7-2 2-2 3.4 0 2.2 1.8 4 4 4 1.5 0 2.8-.8 3.4-2h4.7c.4 1.1 1.5 2 2.8 2 1.6 0 3-1.3 3-3C19 14.3 17.6 13 16 13z"></path>{" "}
              </g>
            </g>
          </svg>
        ),
      },
      { name: "WebSockets", icon: "devicon-socketio-original " },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
    ],
  },
  {
    title: "Other",
    items: [
      {
        name: "JWT ",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="h-10 w-10 shrink-0"
          >
            <polygon
              fill="#546e7a"
              points="21.906,31.772 24.507,29.048 27.107,31.772 27.107,43 21.906,43"
            ></polygon>
            <polygon
              fill="#f50057"
              points="17.737,29.058 21.442,28.383 21.945,32.115 15.345,41.199 11.138,38.141"
            ></polygon>
            <polygon
              fill="#d500f9"
              points="15.962,24.409 19.355,26.041 17.569,29.356 6.89,32.825 5.283,27.879"
            ></polygon>
            <polygon
              fill="#29b6f6"
              points="17.256,19.607 19.042,22.922 15.649,24.554 4.97,21.084 6.577,16.137"
            ></polygon>
            <polygon
              fill="#00e5ff"
              points="21.126,16.482 20.623,20.214 16.918,19.539 10.318,10.455 14.526,7.398"
            ></polygon>
            <polygon
              fill="#546e7a"
              points="26.094,16.228 23.493,18.952 20.893,16.228 20.893,5 26.094,5"
            ></polygon>
            <polygon
              fill="#f50057"
              points="30.262,18.943 26.558,19.618 26.055,15.886 32.654,6.802 36.862,9.859"
            ></polygon>
            <polygon
              fill="#d500f9"
              points="32.039,23.59 28.645,21.958 30.431,18.643 41.11,15.174 42.717,20.12"
            ></polygon>
            <polygon
              fill="#29b6f6"
              points="30.744,28.393 28.958,25.078 32.351,23.447 43.03,26.916 41.423,31.863"
            ></polygon>
            <polygon
              fill="#00e5ff"
              points="26.874,31.518 27.378,27.786 31.082,28.461 37.682,37.545 33.474,40.602"
            ></polygon>
          </svg>
        ),
      },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "AWS (EC2)", icon: "devicon-amazonwebservices-plain colored" },
      { name: "Linux", icon: "devicon-linux-plain " },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_30%_at_50%_100%,rgba(99,102,241,0.20),rgba(24,24,27,0)_70%)]" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_90%_at_50%_0%,rgba(99,102,241,0.2),rgba(24,24,27,0)_70%)]" />
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">Technologies</h2>
      </Reveal>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group) => (
          <Reveal key={group.title}>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 shadow-2xl">
              <h3 className="font-medium">{group.title}</h3>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {group.items.map((item) => (
                  <Reveal key={item.name}>
                    <li className="flex items-center gap-2 rounded-md border border-zinc-800/60 bg-zinc-950/40 px-3 py-2 transition-transform hover:-translate-y-0.5 min-w-0">
                      {typeof item.icon === "string" ? (
                        <i className={`${item.icon} text-xl shrink-0`} />
                      ) : (
                        item.icon
                      )}
                      <span className="text-sm text-zinc-300 truncate">
                        {item.name}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
