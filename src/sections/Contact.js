import React from "react";

const Contact = () => (
  <section id="contact">
    <h2>Contact</h2>
    <form className="contact-form">
      <input type="text" placeholder="Votre nom" required />
      <input type="email" placeholder="Votre email" required />
      <textarea placeholder="Votre message" required />
      <button type="submit">Envoyer</button>
    </form>
  </section>
);

export default Contact;
