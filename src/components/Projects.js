import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Machine Learning Projects",
      description: "Collection of machine learning projects including Credit Scoring Model for financial risk assessment and Handwritten Digit Recognition using neural networks. Implements classification algorithms, deep learning models, and computer vision techniques for real-world applications.",
      tags: ["Python", "Machine Learning", "Deep Learning", "Neural Networks"],
      link: "https://github.com/abdullahnkhokhar-ux/CodeAlpha",
      linkText: "View on GitHub"
    },
    {
      title: "Depression Detection System",
      description: "Python-based machine learning system that analyzes user input to detect signs of depression. Implements NLP techniques and sentiment analysis for mental health assessment.",
      tags: ["Python", "Machine Learning", "NLP", "Mental Health"],
      link: "https://github.com/abdullahnkhokhar-ux/Depression-Detection-Python",
      linkText: "View on GitHub"
    },
    {
      title: "ATM Simulator (OOP C++)",
      description: "Object-oriented ATM simulation system built in C++. Features account management, transactions, balance inquiry, and secure PIN verification using OOP principles.",
      tags: ["C++", "OOP", "Software Development"],
      link: "https://github.com/abdullahnkhokhar-ux/ATM-Simulator-C-",
      linkText: "View on GitHub"
    },
    {
      title: "Arduino Smart Parking System",
      description: "IoT-based smart parking solution using Arduino. Features real-time parking slot detection, automated barriers, and sensor-based monitoring for efficient parking management.",
      tags: ["Arduino", "IoT", "Sensors", "Hardware"],
      link: "https://github.com/abdullahnkhokhar-ux/Smart-Parking-System",
      linkText: "View on GitHub"
    },
    {
      title: "Arduino RFID Door Lock System",
      description: "Security system using RFID technology and Arduino. Provides keyless entry with card authentication, access logging, and customizable security features.",
      tags: ["Arduino", "RFID", "Security", "IoT"],
      link: "https://github.com/abdullahnkhokhar-ux/RFID-Door-Lock",
      linkText: "View on GitHub"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Technical Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
            <a 
              href={project.link} 
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.linkText} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
