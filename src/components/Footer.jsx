import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-5 text-center text-sm text-zinc-500 animate-fade-in">
      © {new Date().getFullYear()} Omar Ilpa. All rights reserved.
      <div className="flex gap-4 justify-center mt-2 text-2xl text-zinc-400">
        <a
          href="https://github.com/O-Ilpa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/o-ilpa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
