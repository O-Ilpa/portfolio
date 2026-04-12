import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { gsap, ScrollTrigger } from "../gsap.js";

export default function Hero() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  // Particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3, dy: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129,140,248,${p.a})`; ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.12 * (1 - dist / 100)})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  // Parallax exit — content floats up as you scroll away
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(".hero-badge",    { y: -40, opacity: 0, ease: "none" }, 0)
      .to(".hero-heading",  { y: -80, scale: 0.95, opacity: 0, ease: "none" }, 0)
      .to(".hero-sub",      { y: -50, opacity: 0, ease: "none" }, 0)
      .to(".hero-ctas",     { y: -30, opacity: 0, ease: "none" }, 0.05)
      .to(".hero-socials",  { y: -20, opacity: 0, ease: "none" }, 0.1)
      .to(".hero-stats",    { y: -10, opacity: 0, ease: "none" }, 0.15);
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="aurora-blob w-[600px] h-[600px] top-1/4 left-1/4 bg-indigo-600/20" />
      <div className="aurora-blob w-[500px] h-[500px] top-1/2 right-1/4 bg-purple-600/15" style={{ animationDelay: "5s" }} />
      <div className="aurora-blob w-[400px] h-[400px] bottom-1/4 left-1/2 bg-violet-500/10" style={{ animationDelay: "10s" }} />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.6 }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20 sm:pt-36">
        {/* Badge */}
        <div className="hero-badge animate-fade-in animation-delay-100 inline-flex items-center gap-2 rounded-full glass-sm border border-indigo-500/20 px-4 py-1.5 mb-8">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-zinc-300 tracking-widest uppercase">
            Available for new opportunities
          </span>
        </div>

        {/* Heading */}
        <h1 className="hero-heading font-display animate-slide-up animation-delay-200 text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
          <span className="text-white">Building </span>
          <span className="text-shimmer">remarkable</span>
          <br />
          <span className="text-white">digital </span>
          <span className="text-white">experiences.</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-sub animate-slide-up animation-delay-300 mt-6 max-w-xl text-lg text-zinc-400 leading-relaxed">
          Full Stack Engineer crafting fast, scalable web apps with{" "}
          <span className="text-indigo-400 font-medium">React</span>,{" "}
          <span className="text-indigo-400 font-medium">Node.js</span>, and modern cloud tooling.
          Always learning, always building.
        </p>

        {/* CTA buttons */}
        <div className="hero-ctas animate-slide-up animation-delay-400 mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="btn-primary relative z-0 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-white">
            <span className="relative z-10">View My Work</span>
            <svg className="relative z-10 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a href="/Omar_Ilpa_Resume_V3.pdf" download className="btn-secondary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-zinc-200">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div className="hero-socials animate-fade-in animation-delay-500 mt-10 flex items-center gap-5">
          <a href="https://github.com/O-Ilpa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-medium group">
            <FaGithub className="h-5 w-5 group-hover:text-indigo-400 transition-colors" />
            GitHub
          </a>
          <span className="h-4 w-px bg-zinc-700" />
          <a href="https://linkedin.com/in/o-ilpa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-medium group">
            <FaLinkedin className="h-5 w-5 group-hover:text-indigo-400 transition-colors" />
            LinkedIn
          </a>
          <span className="h-4 w-px bg-zinc-700" />
          <a href="mailto:omarilpa.eg@gmail.com" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-medium">
            omarilpa.eg@gmail.com
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats animate-slide-up animation-delay-600 mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md">
          {[
            { value: "4+", label: "Years Exp." },
            { value: "15+", label: "Projects" },
            { value: "3+", label: "Companies", className: "col-span-2 sm:col-span-1" },
          ].map((stat) => (
            <div key={stat.label} className={`glass rounded-xl p-4 text-center ${stat.className || ""}`}>
              <div className="font-display text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="mt-1 text-xs text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
