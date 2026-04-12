import { useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "./ui/Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId = "service_4vgwssi";
      const templateId = "template_74pr8ad";
      const publicKey = "QSIwJFPh1Z7C5_CSJ";

      const templateParams = {
        to_email: "omarilpa.eg@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(99,102,241,0.20),rgba(24,24,27,0)_70%)]" />
      <Reveal>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Let's build something
          </h2>
          <p className="mt-2 text-zinc-300">
            Get in touch and let's discuss your project
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Reveal>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-300 mb-2"
                  >
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
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-zinc-300 mb-2"
                  >
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
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
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
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
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
                    ? "bg-indigo-600 cursor-not-allowed"
                    : "bg-indigo-500 hover:bg-indigo-400 hover:scale-[1.02] active:scale-[0.98]"
                } text-white shadow-lg hover:shadow-indigo-500/25`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </Reveal>

            {submitStatus === "success" && (
              <Reveal>
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-center">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              </Reveal>
            )}

            {submitStatus === "error" && (
              <Reveal>
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-center">
                  ❌ Failed to send message. Please try again or email me
                  directly at omarilpa.eg@gmail.com
                </div>
              </Reveal>
            )}
          </form>
        </div>
      </Reveal>
    </section>
  );
}
