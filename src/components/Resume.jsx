import { useEffect, useRef, useState } from "react";
import { Download, Eye, FileText } from "lucide-react";

export default function Resume() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="resume"
      ref={ref}
      className="bg-[#020617] px-6 py-32"
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Resume
        </h2>
        <div className="w-24 h-[2px] mx-auto mt-3 bg-gradient-to-r from-cyan-400 to-blue-500" />
        <p className="mt-5 text-gray-400">
          Download or view my resume for a complete overview of my skills,
          projects, internships, and technical expertise.
        </p>
      </div>

      {/* Resume Card */}
      <div
        className={`
          max-w-4xl mx-auto mt-16
          rounded-2xl border border-white/10
          bg-gradient-to-br from-white/10 to-white/5
          backdrop-blur-xl
          p-10 md:p-14
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="
            w-20 h-20 rounded-full
            flex items-center justify-center
            bg-cyan-500/10 text-cyan-400
          ">
            <FileText size={36} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-center text-2xl font-semibold text-white">
          Narayan Kumar – Resume
        </h3>

        {/* Description */}
        <p className="mt-4 text-center text-gray-400 max-w-xl mx-auto">
          Full Stack Java Developer skilled in Java, Spring Boot, React,
          REST APIs, and MySQL with hands-on project and internship experience.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-5">

  {/* Download Resume */}
  <a
    href="/resume"
    download
    className="
      inline-flex items-center gap-2
      px-8 py-3 rounded-lg
      bg-cyan-500 text-black font-semibold
      hover:bg-cyan-400 transition
    "
  >
    ⬇ Download Resume
  </a>

  {/* View Online */}
  <a
    href="/Narayan_Kumar_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center gap-2
      px-8 py-3 rounded-lg
      border border-cyan-500
      text-cyan-400 font-semibold
      hover:bg-cyan-500 hover:text-black transition
    "
  >
    👁 View Online
  </a>

</div>


        {/* Footer */}
        <p className="mt-10 text-center text-sm text-gray-500">
          PDF Format • Last Updated: 2025
        </p>
      </div>
    </section>
  );
}
