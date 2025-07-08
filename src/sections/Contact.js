import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const Contact = () => (
  <section id="contact">
    <h2>Contact</h2>
    <form className="contact-form">
      <input type="text" placeholder="Votre nom" required />
      <input type="email" placeholder="Votre email" required />
      <textarea placeholder="Votre message" required />
      <button type="submit">Envoyer</button>
    </form>
    <div className="footer-icons" style={{ marginTop: "2rem" }}>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a href="mailto:email@example.com" title="Email">
        <FaEnvelope />
      </a>
      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" title="CV">
        <FaFileAlt />
      </a>
    </div>
    <div
      style={{
        marginTop: "1.5rem",
        textAlign: "center",
        fontSize: "1rem",
        color: "var(--color-dark)",
      }}
    >
      © {new Date().getFullYear()} Tiavina Andriatsitohery. Tous droits
      réservés.
    </div>
  </section>
);

export default Contact;
