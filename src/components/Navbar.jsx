import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const menuItems = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "certificates",
    "resume",
    "contact",
  ];

  useEffect(() => {
    setShow(true); // page load pe trigger
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="text-lg font-bold text-white">
            Narayan <span className="text-gray-300">Kumar</span>
          
          </a>

          {/* 🔥 Desktop Menu with Stagger */}
          <div className="hidden md:flex items-center gap-7 text-sm text-gray-300">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href={`#${item}`}
                className={`capitalize hover:text-cyan-400 transform transition-all duration-500
                  ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setOpen(!open)}
          >
            {/* {open ? "✕" : "☰"} */}
          </button>
        </div>

        {/* Mobile Menu (already animated) */}
        <div
          className={`md:hidden px-6 overflow-hidden transition-all duration-300 ${
            open ? "max-h-[500px] pb-6 pt-2" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 text-gray-300">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className={`capitalize hover:text-cyan-400 transform transition-all duration-300
                  ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
