import React, { useState, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import "./slide.css";

const sections = {
  home: <Home />,
  about: <About />,
  projects: <Projects />,
  skills: <Skills />,
  contact: <Contact />,
};

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const nodeRef = useRef(null);

  return (
    <div className="app-container">
      <Navbar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <main style={{ position: "relative", minHeight: "60vh" }}>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={activeSection}
            timeout={400}
            classNames="slide"
            unmountOnExit
            nodeRef={nodeRef}
          >
            <div className="slide-section" ref={nodeRef}>
              {sections[activeSection]}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </main>
    </div>
  );
}

export default App;
