import { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";

import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";
import cert3 from "../assets/cert3.jpg";
import cert4 from "../assets/cert4.jpg";
import cert5 from "../assets/cert5.jpg";
import cert6 from "../assets/cert6.jpg";

const certificates = [
  {
    title: "JavaScript Training",
    org: "EduPyramids • IIT Bombay",
    year: "2025",
    desc: "Core JavaScript concepts, DOM manipulation, and hands-on coding projects.",
    img: cert1,
  },
  {
    title: "Full Stack Developer",
    org: "OneRoadmap",
    year: "2025",
    desc: "Built full-stack applications using React, Java, REST APIs, and databases..",
    img: cert2,
  },
  {
    title: "Programming with JavaScript",
    org: "Meta • Coursera",
    year: "2025",
    desc: "Strong foundation in JavaScript including arrays, functions, objects, and logic building.",
    img: cert3,
  },
  {
    title: "Front-End Development",
    org: "Meta • Coursera",
    year: "2025",
    desc: "Developed responsive and accessible UI using HTML, CSS, JavaScript, and React.",
    img: cert4,
  },
  {
    title: "Version Control",
    org: "Meta • Coursera",
    year: "2025",
    desc: "Worked with Git & GitHub for version control, branching, and collaboration.",
    img: cert5,
  },
  {
    title: "OOPs in Java",
    org: "Geekster",
    year: "2024",
    desc: "Learned object-oriented concepts like inheritance, polymorphism, and abstraction.",
    img: cert6,
  },
];

export default function Certificates() {
  const [activeImg, setActiveImg] = useState(null);
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  // 🔥 Scroll reveal logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="bg-[#020617] px-6 py-32"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-white">
        Certifications & <span className="text-cyan-400">Achievements</span>
      </h2>
      <div className="w-28 h-[3px] mx-auto mt-4 bg-cyan-400 rounded-full" />

      {/* Grid */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {certificates.map((c, i) => (
          <Tilt
            key={i}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.04}
            transitionSpeed={1000}
            className={`
              rounded-2xl
              transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="rounded-2xl overflow-hidden bg-[#0b1220] border border-white/10">
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  draggable="false"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">
                  {c.title}
                </h3>

                <p className="text-cyan-400 text-sm mt-1">{c.org}</p>
                <p className="text-gray-500 text-xs">{c.year}</p>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {c.desc}
                </p>

                <button
                  onClick={() => setActiveImg(c.img)}
                  className="mt-5 px-4 py-2 text-sm rounded-md
                  className=mt-5 px-4 py-2 text-sm rounded-md
                             bg-cyan-500 text-black font-semibold
                             hover:bg-cyan-400 transition"
                >
                  View Full Image
                </button>
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      {/* FULL IMAGE MODAL */}
      {activeImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button
            onClick={() => setActiveImg(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full
                       bg-white/10 text-white text-xl
                       hover:bg-cyan-500 hover:text-black transition"
          >
            ✕
          </button>

          <img
            src={activeImg}
            alt="Certificate"
            className="max-h-[90vh] max-w-[90vw] rounded-xl"
          />
        </div>
      )}
    </section>
  );
}
