import React from "react";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaTools,
  FaEnvelope,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <a href="#home">
      <FaHome /> Accueil
    </a>
    <a href="#about">
      <FaUser /> À propos
    </a>
    <a href="#projects">
      <FaProjectDiagram /> Projets
    </a>
    <a href="#skills">
      <FaTools /> Compétences
    </a>
    <a href="#contact">
      <FaEnvelope /> Contact
    </a>
  </nav>
);

export default Navbar;
