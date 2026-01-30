import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  /* ===================== SCROLL ANIMATION ===================== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ===================== EMAIL SEND ===================== */
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    emailjs
      .sendForm(
        "service_nyitrge",     // service ID
        "template_1qa5f9a",    // template ID
        formRef.current,
        "yF9BFAi5wIXtCQWqf"    // public key
      )
      .then(() => {
        setLoading(false);
        setSuccess("✅ Message sent successfully. I’ll get back to you soon!");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setError("❌ Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#020617] px-6 py-28 overflow-hidden"
    >
      {/* ===================== HEADING ===================== */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Let’s talk about opportunities, projects, or anything tech.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* ===================== LEFT INFO ===================== */}
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
          }`}
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Let’s Connect
          </h3>

          <p className="text-gray-400 mb-6">
            Open to internships, full-time roles, and collaborations.
          </p>

          <div className="space-y-4">
            <Info icon={<Mail size={18} />} text="kumarnarayan99055@gmail.com" />
            <Info icon={<Phone size={18} />} text="+91 9905516249" />
            <Info icon={<MapPin size={18} />} text="Haridwar, Uttarakhand, India" />
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-8">
            <Social link="https://www.linkedin.com/in/narayan0789/" icon={<Linkedin size={18} />} />
            <Social link="https://github.com/Narayan0789" icon={<Github size={18} />} />
            <Social link="https://x.com/Kumar_narayan99" icon={<Twitter size={18} />} />
          </div>
        </div>

        {/* ===================== RIGHT FORM ===================== */}
        <div
          className={`transition-all duration-1000 delay-150 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7">
            <h3 className="text-lg font-semibold text-white mb-4">
              Send Message
            </h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input
                className="contact-input"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                className="contact-input"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <textarea
                className="contact-input resize-none"
                name="message"
                rows="4"
                placeholder="Your Message"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg
                bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold
                hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]
                transition disabled:opacity-60"
              >
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && <p className="text-green-400 text-sm text-center">{success}</p>}
              {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== SMALL COMPONENTS ===================== */
const Info = ({ icon, text }) => (
  <div className="flex items-center gap-3">
    <span className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
      {icon}
    </span>
    <span className="text-gray-300">{text}</span>
  </div>
);

const Social = ({ link, icon }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="social-btn text-gray-400 hover:text-cyan-400"
  >
    {icon}
  </a>
);
