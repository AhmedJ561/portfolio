import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const checkSlide = () => {
      sections.forEach((section) => {
        const slideInAt = window.scrollY + window.innerHeight - section.offsetHeight / 2;
        const sectionBottom = window.scrollY + section.offsetHeight;
        const isHalfShown = slideInAt > section.offsetTop;
        const isNotScrolledPast = window.scrollY < sectionBottom;

        if (isHalfShown && isNotScrolledPast) {
          section.classList.add("active", "slide-in-from-right");
        } else {
          section.classList.remove("active", "slide-in-from-right");
        }
      });
    };

    window.addEventListener("scroll", checkSlide);
    checkSlide(); // Initial check on page load

    return () => {
      window.removeEventListener("scroll", checkSlide);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="top-0 w-full min-h-screen pt-16 scroll-smooth">
        <section
          id="home"
          className="w-full min-h-screen p-8 section-scroll-animation"
        >
          <Home />
        </section>

        <section
          id="about"
          className="min-h-screen p-8 section-scroll-animation"
        >
          <About />
        </section>

        <section
          id="services"
          className="min-h-screen p-8 section-scroll-animation"
        >
          <Services />
        </section>

        <section
          id="project"
          className="min-h-screen p-8 section-scroll-animation"
        >
          <Projects />
        </section>

        <section
          id="contact"
          className="min-h-screen p-8 section-scroll-animation"
        >
          <Contact />
        </section>
      </main>
    </>
  );
};

export default App;
