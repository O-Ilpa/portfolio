import './index.css'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function useInView(options) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setIsInView(entry.isIntersecting)
    }, { threshold: 0.15, rootMargin: '0px', ...(options || {}) })

    observer.observe(element)
    return () => observer.disconnect()
  }, [options])

  return [ref, isInView]
}

function Reveal({ className = '', delay = 0, children }) {
  const [ref, isInView] = useInView()
  const delayClass = delay ? ` animation-delay-${delay}` : ''
  return (
    <div
      ref={ref}
      className={`${className} ${isInView ? `animate-slide-up${delayClass}` : 'opacity-0 translate-y-4'}`}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </div>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 animate-fade-in">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-tight hover:opacity-90 transition-opacity">Omar Ilpa</a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm text-zinc-300 items-center">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="mailto:omarilpa.eg@gmail.com" className="inline-flex items-center rounded-md bg-white/10 px-3 py-1.5 text-white hover:bg-white/20 transition-colors">Email</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/70 p-2 text-zinc-200 hover:bg-zinc-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 z-40 bg-black transition-opacity duration-300 backdrop-blur-md ${open ? 'opacity-60 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Mobile drawer */}
      <aside
        className={`md:hidden fixed inset-y-0 right-0 z-50 w-[100%] max-w-full border-l border-zinc-800 bg-zinc-950 transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between px-5 py-4 border-b border-zinc-800 bg-zinc-950/90">
          <span className="text-base font-semibold">Menu</span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 p-2 text-zinc-200 hover:bg-zinc-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
            </svg>
        </button>
        </div>

        {/* Links */}
        <nav className="px-5 py-6 space-y-3 bg-[#060606]">
          <a onClick={() => setOpen(false)} href="#about" className="block rounded-lg px-4 py-3 text-lg font-medium text-zinc-100 bg-white/5 hover:bg-white/10">About</a>
          <a onClick={() => setOpen(false)} href="#skills" className="block rounded-lg px-4 py-3 text-lg font-medium text-zinc-100 bg-white/5 hover:bg-white/10">Skills</a>
          <a onClick={() => setOpen(false)} href="#projects" className="block rounded-lg px-4 py-3 text-lg font-medium text-zinc-100 bg-white/5 hover:bg-white/10">Projects</a>
          <a onClick={() => setOpen(false)} href="#contact" className="block rounded-lg px-4 py-3 text-lg font-medium text-zinc-100 bg-white/5 hover:bg-white/10">Contact</a>
          <a onClick={() => setOpen(false)} href="mailto:omarilpa.eg@gmail.com" className="mt-2 block rounded-lg px-4 py-3 text-center text-base font-medium text-white bg-indigo-500 hover:bg-indigo-400">Email</a>
        </nav>
      </aside>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(90%_50%_at_50%_0%,rgba(99,102,241,0.2),rgba(24,24,27,0)_70%)]" />
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <p className="text-sm uppercase tracking-widest text-zinc-400 animate-fade-in animation-delay-100">
          Full Stack Software Engineer
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-slide-up animation-delay-200">
        Building fast, reliable web apps with React, Node.js, and cloud-native tooling.
        </h1>
        <p className="mt-6 max-w-2xl text-zinc-300 animate-slide-up animation-delay-300">
          From slick UIs to solid backends, I enjoy bringing ideas to life with React, Node.js, and
          the cloud. Always learning, always building — and open to new opportunities.
        </p>
        <div className="mt-8 flex gap-3 animate-slide-up animation-delay-400">
          <a
            href="#projects"
            className="rounded-md bg-indigo-500 px-4 py-2.5 font-medium text-white hover:bg-indigo-400 transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-zinc-700 px-4 py-2.5 font-medium text-white hover:bg-white/10 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}


function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_90%_at_50%_100%,rgba(99,102,241,0.20),rgba(24,24,27,0)_70%)]" />
      <div className="grid md:grid-cols-1 gap-10 items-start">
        <div className="md:col-span-1">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold">About</h2>
          </Reveal>
          <Reveal delay={100}>
          <p className="mt-4 text-zinc-300">
  I'm Omar Ilpa, a full-stack developer who loves turning ideas into clean, working apps.  
  I enjoy React, Tailwind, Node.js, and databases — but more than tools, I care about building
  things that feel fast, modern, and useful.
</p>

          </Reveal>

          {/* Timeline */}
          <div className="mt-10 relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-zinc-800" />
            <ol className="space-y-6">
  <Reveal>
    <li className="relative pl-10">
      <span className="absolute left-2 top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20"></span>
      <div className="text-sm uppercase tracking-wider text-zinc-400">2025 — Present</div>
      <h3 className="mt-1 font-medium">Part-Time Software Engineer · Spiritual Data</h3>
      <p className="mt-1 text-zinc-300">
        Working on real-world web services and dashboards. Improving developer workflows and
        delivering features that help the team move faster while keeping code clean.
      </p>
    </li>
  </Reveal>

  <Reveal>
    <li className="relative pl-10">
      <span className="absolute left-2 top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-600 ring-4 ring-zinc-600/20"></span>
      <div className="text-sm uppercase tracking-wider text-zinc-400">2024</div>
      <h3 className="mt-1 font-medium">Freelance & Personal Projects</h3>
      <p className="mt-1 text-zinc-300">
        Built and deployed full-stack apps like a Real Estate Management System and a Notes App with
        authentication. Learned to design APIs, manage databases, and create responsive UIs while
        working independently and delivering results.
      </p>
    </li>
  </Reveal>
</ol>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const groups = [
    {
      title: 'Front-End',
      items: [
        { name: 'React.js', icon: 'devicon-react-original colored' },
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      ],
    },
    {
      title: 'Back-End',
      items: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        { name: 'Express', icon: 'devicon-express-original ' },
        { name: 'Java', icon: 'devicon-java-plain colored' },
        { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'REST APIs', icon: (<svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#000000" stroke-width="0.32"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M16 13c-1.3 0-2.4.8-2.8 2H9c0-.7-.2-1.3-.5-1.8l7.1-7.3c.3 0 .6.1.9.1C17.9 6 19 4.9 19 3.5S17.9 1 16.5 1 14 2.1 14 3.5c0 .3.1.7.2 1l-7 7.2c-.6-.5-1.4-.7-2.2-.7V6.8C6.2 6.4 7 5.3 7 4c0-1.7-1.3-3-3-3S1 2.3 1 4c0 1.3.8 2.4 2 2.8v4.7c-1.2.7-2 2-2 3.4 0 2.2 1.8 4 4 4 1.5 0 2.8-.8 3.4-2h4.7c.4 1.1 1.5 2 2.8 2 1.6 0 3-1.3 3-3C19 14.3 17.6 13 16 13z"></path> </g> </g></svg>) },
        { name: 'WebSockets', icon: 'devicon-socketio-original ' },
      ],
    },
    {
      title: 'Databases',
      items: [
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      ],
    },
    {
      title: 'Other',
      items: [
        { name: 'JWT ', icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5 shrink-0">
            <polygon fill="#546e7a" points="21.906,31.772 24.507,29.048 27.107,31.772 27.107,43 21.906,43"></polygon>
            <polygon fill="#f50057" points="17.737,29.058 21.442,28.383 21.945,32.115 15.345,41.199 11.138,38.141"></polygon>
            <polygon fill="#d500f9" points="15.962,24.409 19.355,26.041 17.569,29.356 6.89,32.825 5.283,27.879"></polygon>
            <polygon fill="#29b6f6" points="17.256,19.607 19.042,22.922 15.649,24.554 4.97,21.084 6.577,16.137"></polygon>
            <polygon fill="#00e5ff" points="21.126,16.482 20.623,20.214 16.918,19.539 10.318,10.455 14.526,7.398"></polygon>
            <polygon fill="#546e7a" points="26.094,16.228 23.493,18.952 20.893,16.228 20.893,5 26.094,5"></polygon>
            <polygon fill="#f50057" points="30.262,18.943 26.558,19.618 26.055,15.886 32.654,6.802 36.862,9.859"></polygon>
            <polygon fill="#d500f9" points="32.039,23.59 28.645,21.958 30.431,18.643 41.11,15.174 42.717,20.12"></polygon>
            <polygon fill="#29b6f6" points="30.744,28.393 28.958,25.078 32.351,23.447 43.03,26.916 41.423,31.863"></polygon>
            <polygon fill="#00e5ff" points="26.874,31.518 27.378,27.786 31.082,28.461 37.682,37.545 33.474,40.602"></polygon>
          </svg>
        ) },
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'AWS (EC2)', icon: 'devicon-amazonwebservices-plain colored' },
        { name: 'Linux', icon: 'devicon-linux-plain ' },
      ],
    },
  ]

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_90%_at_50%_0%,rgba(99,102,241,0.2),rgba(24,24,27,0)_70%)]" />
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
      </Reveal>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group) => (
          <Reveal key={group.title}>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
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
  <span className="text-sm text-zinc-300 truncate">{item.name}</span>
</li>

                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Property Management System",
      description: "Full-stack property management web application with admin dashboard, CRUD functionality, and secure JWT authentication.",
      image: "/projects/1.webp",
      tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
      features: ["Admin Dashboard", "CRUD Operations", "Search Functionality", "Responsive Design", "JWT Authentication"],
      code: "https://github.com/O-Ilpa/client"
    },
    {
      id: 2,
      title: "Notes App",
      description: "Custom signup/login flow with email verification, JWT-protected sessions, and full CRUD functionality for personal notes.",
      image: "/projects/2.webp",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
      features: ["Email Verification", "JWT Authentication", "CRUD Operations", "Search Capability", "Mobile-First UI"],
      code: "https://github.com/O-Ilpa/notes-app-back-end"
    },
    {
      id: 3,
      title: "Library App",
      description: "Author and book management system with linking functionality, search, and filtering for better data navigation.",
      image: "/projects/3.webp",
      tags: ["Node.js", "Express.js", "EJS", "MongoDB"],
      features: ["Author Management", "Book Linking", "Search & Filter", "Dynamic Pages", "Data Navigation"],
      code: "https://github.com/O-Ilpa/SSR-Library"
    },
    {
      id: 4,
      title: "CRUDS Application",
      description: "Vanilla JavaScript application for managing data in local storage with clean code and simplicity focus.",
      image: "/projects/4.webp",
      tags: ["JavaScript", "HTML", "CSS", "Local Storage"],
      features: ["CRUD Operations", "Local Storage", "Clean Code", "Simple Design", "Data Management"],
      code: "https://github.com/O-Ilpa/cruds"
    },
    {
      id: 5,
      title: "Live Chat App",
      description: "Real-time messaging application using WebSockets with room-based chat and instant notifications.",
      image: "/projects/5.webp",
      tags: ["React", "Node.js", "Express.js", "WebSockets"],
      features: ["Real-time Messaging", "Room-based Chat", "System Notifications", "WebSocket Integration", "Responsive UI"],
      code: "https://github.com/O-Ilpa/live-chat"
    },
    {
      id: 6,
      title: "Elzero Landing Page",
      description: "Responsive HTML and CSS template demonstrating semantic HTML, Flexbox, and media queries for cross-device compatibility.",
      image: "/projects/6.webp",
      tags: ["HTML", "CSS", "Flexbox", "Responsive Design"],
      features: ["Semantic HTML", "Flexbox Layout", "Media Queries", "Cross-device Compatibility", "Clean Design"],
      code: "https://github.com/O-Ilpa/omar.com"
    },
    {
      id: 7,
      title: "Keep It Green Initiative",
      description: "Website for environmental initiative using Swiper.js for responsive sliders with focus on clean UI and accessibility.",
      image: "/projects/7.webp",
      tags: ["HTML", "CSS", "JavaScript", "Swiper.js"],
      features: ["Responsive Sliders", "Clean UI", "Accessibility", "Modern Design", "Environmental Theme"],
      code: "https://github.com/O-Ilpa/kig"
    },
    {
      id: 8,
      title: "Interactive Bookstore",
      description: "Imaginary bookstore with responsive design, dynamic content, and user-friendly navigation using JavaScript.",
      image: "/projects/8.webp",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: ["Dynamic Content", "User-friendly Navigation", "Responsive Design", "Interactive Elements", "Bookstore Theme"],
      code: "https://github.com/O-Ilpa/B-Commerce"
    }
  ]

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_100%,rgba(99,102,241,0.20),rgba(24,24,27,0)_70%)]" />
      <div className="flex items-end justify-between">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-semibold">Projects </h2>
        </Reveal>
        <Reveal>
          <a href="#contact" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">Work with me →</a>
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
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 to-fuchsia-500/40 flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-white font-semibold text-lg">{project.title}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold group-hover:text-white transition-colors">{project.title}</h3>
                <p className="mt-2 text-sm text-zinc-300 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded border border-zinc-700 px-2 py-1">{tag}</span>
                  ))}
                  
                  
                </div>
                <div className="mt-5 flex gap-3">
                  {/* <a className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors" href="#">Live</a> */}
                  <a className="text-sm text-zinc-400 hover:text-white transition-colors" href={project.code}>Code</a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const serviceId = 'service_x0ilvxf' 
      const templateId = 'template_x52hzko' 
      const publicKey = 'NLCqzCaTrd-8ZLZ5z' 

      const templateParams = {
        to_email: 'omarilpa.eg@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        reply_to: formData.email
      }


      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus('success')
      setFormData({ name: '', phone: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(99,102,241,0.20),rgba(24,24,27,0)_70%)]" />
      <Reveal>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Let's build something</h2>
          <p className="mt-2 text-zinc-300">Get in touch and let's discuss your project</p>
          
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Reveal>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-zinc-700 bg-zinc-800 text-white placeholder-zinc-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
              </Reveal>
              
              <Reveal>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-zinc-700 bg-zinc-800 text-white placeholder-zinc-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
              </Reveal>
            </div>

            <Reveal>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-zinc-700 bg-zinc-800 text-white placeholder-zinc-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </Reveal>

            <Reveal>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-700 bg-zinc-800 text-white placeholder-zinc-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
            </Reveal>

            <Reveal>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-indigo-600 cursor-not-allowed'
                    : 'bg-indigo-500 hover:bg-indigo-400 hover:scale-[1.02] active:scale-[0.98]'
                } text-white shadow-lg hover:shadow-indigo-500/25`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </Reveal>

            {submitStatus === 'success' && (
              <Reveal>
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-center">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              </Reveal>
            )}

            {submitStatus === 'error' && (
              <Reveal>
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-center">
                  ❌ Failed to send message. Please try again or email me directly at omarilpa.eg@gmail.com
                </div>
              </Reveal>
            )}
          </form>
        </div>
      </Reveal>
    </section>
  )
}

export default function App() {
  return (
    <div>

      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="border-t border-zinc-800 py-5 text-center text-sm text-zinc-500 animate-fade-in">
        © {new Date().getFullYear()} Omar Ilpa. All rights reserved.
      </footer>
    </div>
  )
}
