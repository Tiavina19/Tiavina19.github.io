import React from "react";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaTools,
  FaEnvelope,
} from "react-icons/fa";
import "./Navbar.css";

const navItems = [
  { key: "home", icon: <FaHome />, label: "Accueil" },
  { key: "about", icon: <FaUser />, label: "À propos" },
  { key: "projects", icon: <FaProjectDiagram />, label: "Projets" },
  { key: "skills", icon: <FaTools />, label: "Compétences" },
  { key: "contact", icon: <FaEnvelope />, label: "Contact" },
];

const Navbar = ({ setActiveSection, activeSection }) => (
  <nav className="navbar-vertical">
    <div className="nav-links">
      {navItems.map((item) => (
        <button
          key={item.key}
          className={`nav-item${activeSection === item.key ? " active" : ""}`}
          title={item.label}
          onClick={() => setActiveSection(item.key)}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </div>
  </nav>
);

export default Navbar;
