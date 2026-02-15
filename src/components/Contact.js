import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';

function Contact() {
  const contactLinks = [
    {
      url: "https://www.linkedin.com/in/abdullah-naeem-00a0993a1/",
      icon: <FaLinkedin />,
      label: "LinkedIn"
    },
    {
      url: "https://github.com/abdullahnkhokhar-ux",
      icon: <FaGithub />,
      label: "GitHub"
    },
    {
      url: "https://www.instagram.com/abdullahnaeemm._/",
      icon: <FaInstagram />,
      label: "Instagram"
    },
    {
      url: "https://wa.me/923329353019",
      icon: <FaWhatsapp />,
      label: "WhatsApp"
    },
    {
      url: "mailto:abdullahn.khokhar@gmail.com",
      icon: <FaEnvelope />,
      label: "Email"
    }
  ];

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <p className="contact-description">
        Feel free to reach out for collaborations, internships, or just a friendly chat!
      </p>

      <div className="contact-links-icons">
        {contactLinks.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            className="contact-icon-item"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>

      <div className="contact-info-footer">
        <p>📍 Based in Islamabad, Pakistan</p>
        <p>🎓 BS AI Student at SZABIST Islamabad</p>
        <p>💼 Open to Internships & Collaborations</p>
      </div>
    </section>
  );
}

export default Contact;
