import { useEffect, useRef, useState } from "react";

export default function Experience() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const experiences = [
    {
      role: "Web Applications Intern (MERN)",
      company: "EY Global Delivery Services & AICTE",
      duration: "Mar 2025 – Apr 2025",
      location: "Remote",
      desc: "Completed a 6-week internship focused on building modern web applications using the MERN stack. Worked on real-world features, API integration, and responsive UI development.",
      color: "cyan",
    },
    {
      role: "Full Stack Development Intern",
      company: "CertED Technologies",
      duration: "Jun 2025 – Jul 2025",
      location: "Roorkee, Uttarakhand, India",
      desc: "Gained hands-on experience in full stack development using Java, Spring Boot, React, and MySQL. Collaborated on real-world projects under industry mentorship.",
      color: "purple",
    },
  ];

  return (
    <section
      ref={ref}
      id="experience"
      className="relative bg-[#020617] px-6 py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-white text-center
          transition-all duration-1000
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Experience
        </h2>
        <div className="w-24 h-[3px] mx-auto mt-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />

        {/* Timeline */}
        <div className="relative mt-20">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px]
            bg-gradient-to-b from-cyan-400/50 to-purple-500/50" />

          <div className="space-y-24">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }
                transition-all duration-1000
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              >
                {/* Timeline Dot */}
                <span
                  className={`
                    absolute left-1/2 -translate-x-1/2
                    w-4 h-4 rounded-full
                    bg-${exp.color}-400
                    shadow-[0_0_30px_rgba(34,211,238,0.9)]
                    animate-pulse
                  `}
                />

                {/* Card */}
                <div
                  className="
                    relative w-full md:w-[45%]
                    p-7 rounded-xl
                    bg-white/5 backdrop-blur-xl
                    border border-transparent
                    transition-all duration-700
                    hover:-translate-y-2
                    hover:shadow-[0_25px_70px_rgba(34,211,238,0.25)]

                    before:absolute before:inset-0 before:rounded-xl
                    before:p-[1px]
                    before:bg-gradient-to-r
                    before:from-cyan-400/40 before:via-blue-500/40 before:to-purple-500/40
                    before:opacity-0 hover:before:opacity-100
                    before:transition
                  "
                >
                  {/* ROLE */}
                  <h3
                    className={`text-white font-semibold text-lg
                    transition-all duration-700 delay-100
                    ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                  >
                    {exp.role}
                  </h3>

                  {/* COMPANY */}
                  <p
                    className={`text-cyan-400 font-medium mt-1
                    transition-all duration-700 delay-200
                    ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                  >
                    {exp.company}
                  </p>

                  {/* META */}
                  <p
                    className={`text-sm text-gray-400 mt-1
                    transition-all duration-700 delay-300
                    ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                  >
                    {exp.duration} · {exp.location}
                  </p>

                  {/* DESCRIPTION */}
                  <p
                    className={`mt-4 text-gray-400 text-sm leading-relaxed
                    transition-all duration-700 delay-[450ms]
                    ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  >
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
