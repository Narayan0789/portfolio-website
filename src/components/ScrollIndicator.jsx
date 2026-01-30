import { useEffect, useState } from "react";

const sections = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "certificates",
  "resume",
  "contact",
];

export default function ScrollIndicator() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((id, index) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActive(index);
        }
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-3 px-2 py-4 rounded-full bg-black/30 backdrop-blur-md shadow-lg">
        {sections.map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300
              ${
                active === i
                  ? "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)] scale-125"
                  : "bg-white/30"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
