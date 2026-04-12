import { useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "./ui/Reveal";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";

const contactInfo = [
  {
    icon: HiMail,
    label: "Email",
    value: "omarilpa.eg@gmail.com",
    href: "mailto:omarilpa.eg@gmail.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/O-Ilpa",
    href: "https://github.com/O-Ilpa",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/o-ilpa",
    href: "https://linkedin.com/in/o-ilpa",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await emailjs.send(
        "service_4vgwssi",
        "template_74pr8ad",
        {
          to_email: "omarilpa.eg@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          reply_to: formData.email,
        },
        "QSIwJFPh1Z7C5_CSJ"
      );
      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full input-field rounded-xl px-4 py-3.5 text-sm placeholder-zinc-500 focus:outline-none";

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(99,102,241,0.12),transparent_70%)]" />

      {/* Heading */}
      <Reveal>
        <div className="flex items-center gap-4 mb-3">
          <span className="text-xs uppercase tracking-[0.2em] text-indigo-400 font-semibold">
            05. Contact
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
          Let's <span className="text-gradient">Build Together</span>
        </h2>
        <p className="mt-3 text-zinc-400 max-w-lg">
          Have a project in mind or just want to connect? I'm open to new opportunities and collaborations.
        </p>
      </Reveal>

      <div className="mt-14 grid lg:grid-cols-[1fr_1.6fr] gap-10">
        {/* Left: contact info */}
        <Reveal direction="left">
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 flex items-center gap-4 card-hover group border border-white/5 block"
              >
                <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                  <item.icon className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{item.label}</div>
                  <div className="text-sm text-zinc-200 font-medium mt-0.5 group-hover:text-white transition-colors">{item.value}</div>
                </div>
              </a>
            ))}

            {/* Availability card */}
            <div className="glass rounded-2xl p-5 border border-emerald-500/15">
              <div className="flex items-center gap-3 mb-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/30" />
                <span className="text-sm font-semibold text-emerald-400">Available for Work</span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                I'm currently open to full-time remote positions and freelance projects. Let's talk!
              </p>
            </div>
          </div>
        </Reveal>

        {/* Right: form */}
        <Reveal direction="right">
          <div className="glass rounded-2xl p-8 border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="contact-phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 234 567 890"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="contact-message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                id="contact-submit"
                disabled={isSubmitting}
                className={`btn-primary relative z-0 w-full rounded-xl py-3.5 text-sm font-semibold text-white transition-all ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </>
                  )}
                </span>
              </button>

              {submitStatus === "success" && (
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-center text-sm text-emerald-400 font-medium">
                  ✓ Message sent! I'll be in touch shortly.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-center text-sm text-red-400 font-medium">
                  ✕ Something went wrong. Please email me directly.
                </div>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
