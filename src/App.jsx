
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Certificates from "./components/Certificates";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ScrollIndicator from "./components/Scrollindicator";


export default function App() {
  return (
    <div className="bg-[#020617] text-gray-200 relative">
      
      {/* FIXED NAVBAR */}
      <Navbar />

      {/* MAIN SECTIONS */}
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Project />
        </section>

        <section id="certificates">
          <Certificates />
        </section>

        <section id="resume">
          <Resume />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* SCROLL PROGRESS INDICATOR */}
      <ScrollIndicator />
    </div>
  );
}
