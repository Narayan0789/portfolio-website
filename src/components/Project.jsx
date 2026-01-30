import { Github, ExternalLink } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";
import smartflowImg from "../assets/smartflow.jpg";
import portfolioImg from "../assets/portfolio.jpg";

export default function Projects() {
  const [ref, visible] = useScrollReveal({ threshold: 0.15 });

  const projects = [
    {
      title: "Better-City-Resolution",
      points: [
        "Web-based platform for reporting and tracking civic issues",
        "Supports real-time updates and efficient issue resolution",
      ],
      tech: ["React", "HTML", "Tailwind CSS", "JavaScript", "MySQL"],
      image: smartflowImg,
      code: "https://github.com/akashsingg2005/Better-City-Resolution",
      view: "https://better-city-resolution.vercel.app/",
    },
    {
      title: "Personal Portfolio",
      points: [
        "Interactive developer portfolio with modern UI",
        "Smooth animations and responsive design",
      ],
      tech: ["React", "JavaScript", "Tailwind CSS"],
      image: portfolioImg,
      code: "https://github.com/Narayan0789/portfolio-website",
      view: "#",
    },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="relative bg-[#020617] px-6 py-32 overflow-hidden"
    >
      <div
        className={`
          max-w-6xl mx-auto
          transition-all duration-1000 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
        `}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Featured Projects
        </h2>
        <div className="w-28 h-[3px] mx-auto mt-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`
                group relative rounded-2xl overflow-hidden
                bg-white/5 backdrop-blur-xl
                border border-white/10
                transition-all duration-700
                hover:-translate-y-2
                hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="
                    w-full h-full object-cover
                    transition duration-700
                    group-hover:scale-110
                  "
                />
            
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold">
                  {p.title}
                </h3>

                {/* Bullet points */}
                <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                  {p.points.map((pt, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-cyan-400">▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="
                        px-3 py-1 text-xs rounded-full
                        bg-white/10 text-gray-300
                        border border-white/10
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center gap-6">
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      text-gray-300 text-sm
                      px-4 py-2 rounded-lg
                      bg-white/5 border border-white/10
                      transition-all
                      hover:text-white
                      hover:border-cyan-400/50
                      hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
                    "
                  >
                    <Github size={18} />
                    Code
                  </a>

                  <a
                    href={p.view}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      text-gray-300 text-sm
                      px-4 py-2 rounded-lg
                      bg-white/5 border border-white/10
                      transition-all
                      hover:text-white
                      hover:border-purple-400/50
                      hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]
                    "
                  >
                    <ExternalLink size={18} />
                    View
                  </a>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl border border-cyan-400/30 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
