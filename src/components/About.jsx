import { useEffect, useRef, useState } from "react";
import profileImg from "../assets/profile.jpg";

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-[#020617] px-6 py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}
        <div
          className={`flex justify-center transition-all duration-1000
          ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"}`}
        >
          <img
            src={profileImg}
            alt="Narayan Kumar"
            className="
              w-[340px] h-[460px]
              md:w-[380px] md:h-[520px]
              lg:w-[420px] lg:h-[600px]
              object-cover object-top
              rounded-2xl
              shadow-[0_25px_60px_rgba(0,0,0,0.65)]
            "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div
          className={`transition-all duration-1000 delay-150
          ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-16 h-[2px] bg-cyan-400 mb-6"></div>

          <p className="text-gray-400 text-lg leading-relaxed">
            I’m{" "}
            <span className="text-gray-200 font-medium">Narayan Kumar</span>, a{" "}
            <span className="text-gray-200 font-medium">
              Full Stack Java Developer
            </span>{" "}
            focused on building scalable, high-performance web applications
            using modern frontend and robust backend technologies.
          </p>

          <p className="mt-4 text-gray-400 text-lg leading-relaxed">
            My primary stack includes{" "}
            <span className="text-gray-200 font-medium">
              Java, Spring Boot, React, Tailwind CSS, REST APIs, and MySQL
            </span>.
          </p>

          {/* INFO CARDS */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "B.Tech CSE",
                desc: "Computer Science and Engineering at Haridwar University",
                icon: "🎓",
                color: "text-cyan-400",
              },
              {
                title: "Core Stack",
                desc: "Java, Spring Boot, React, Tailwind CSS, REST APIs",
                icon: "🛠️",
                color: "text-blue-400",
              },
              {
                title: "Backend Expertise",
                desc: "Spring Boot, REST APIs, MySQL, Authentication & Security",
                icon: "⚙️",
                color: "text-purple-400",
              },
              {
                title: "Frontend Skills",
                desc: "React, Tailwind CSS, Responsive UI & UX Design",
                icon: "🎨",
                color: "text-green-400",
              },
              {
                title: "Career Goal",
                desc: "To grow as a skilled Full Stack Java Developer",
                icon: "🚀",
                color: "text-pink-400",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  p-6 rounded-xl
                  bg-gradient-to-br from-white/5 to-white/0
                  border border-white/10
                  backdrop-blur
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/40
                "
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xl ${item.color}`}>
                    {item.icon}
                  </span>
                  <h4 className="text-white font-semibold text-lg">
                    {item.title}
                  </h4>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed pl-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
