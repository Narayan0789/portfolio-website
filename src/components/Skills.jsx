import { useEffect, useRef, useState } from "react";
import { Code2, Server, Database, Wrench } from "lucide-react";

const skillsData = [
  {
    title: "Frontend",
    icon: <Code2 />,
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML & CSS"],
    delay: "0ms",
  },
  {
    title: "Backend",
    icon: <Server />,
    skills: ["Java", "Spring Boot", "REST APIs", "JWT Auth"],
    delay: "120ms",
  },
  {
    title: "Database",
    icon: <Database />,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Hibernate"],
    delay: "240ms",
  },
  {
    title: "Tools",
    icon: <Wrench />,
    skills: ["Git & GitHub", "Postman", "VS Code", "Linux"],
    delay: "360ms",
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-28 px-6 bg-[#020617] overflow-hidden"
    >
      {/* Heading */}
      <div
        className={`text-center mb-20 transition-all duration-1000
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="
          text-3xl md:text-4xl font-extrabold
          text-transparent bg-clip-text
          bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
        ">
          Skills & Technologies
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Tools and technologies I use to build scalable,
          high-performance applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="
        max-w-6xl mx-auto
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        gap-8
      ">
        {skillsData.map((item, idx) => (
          <div
            key={idx}
            style={{ transitionDelay: item.delay }}
            className={`
              group relative p-6 rounded-2xl
              bg-white/5 backdrop-blur-xl
              border border-transparent
              transition-all duration-700 ease-out
              hover:-translate-y-3 hover:scale-[1.04]
              hover:shadow-[0_25px_80px_rgba(34,211,238,0.25)]
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }

              before:absolute before:inset-0 before:rounded-2xl
              before:p-[1px] before:bg-gradient-to-r
              before:from-cyan-400/40 before:via-blue-500/40 before:to-purple-500/40
              before:opacity-0 hover:before:opacity-100
              before:transition
            `}
          >
            {/* Shine Sweep */}
            <div
              className="
                pointer-events-none absolute inset-0
                rounded-2xl opacity-0
                group-hover:opacity-100
                transition duration-700
                bg-gradient-to-tr
                from-transparent via-white/10 to-transparent
                translate-x-[-100%]
                group-hover:translate-x-[100%]
              "
            />

            {/* Icon */}
            <div className="
              relative z-10
              w-14 h-14 mb-5
              flex items-center justify-center
              rounded-xl
              bg-cyan-500/10 text-cyan-400
              transition
              group-hover:rotate-6 group-hover:scale-110
              group-hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]
            ">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-lg font-semibold text-white mb-4">
              {item.title}
            </h3>

            {/* Skills List */}
            <ul className="relative z-10 space-y-2 text-sm text-gray-400">
              {item.skills.map((skill, i) => (
                <li
                  key={i}
                  className="
                    flex items-center gap-2
                    transition
                    group-hover:text-gray-200
                  "
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
