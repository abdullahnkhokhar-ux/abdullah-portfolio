import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Depression Detection System",
      description: "Python-based machine learning system that analyzes user input to detect signs of depression. Implements NLP techniques and sentiment analysis for mental health assessment.",
      tags: ["Python", "Machine Learning", "NLP", "Mental Health"],
      link: "https://drive.google.com/drive/folders/1ubSFcQphtqEvKqUkCL0S0U5hoskBww3f?usp=drive_link",
      linkText: "View Project"
    },
    {
      title: "BNPL Review & Analytics System",
      description: "Comprehensive analytics platform for Buy Now Pay Later services. Features review aggregation, sentiment analysis, and data visualization for consumer insights.",
      tags: ["Analytics", "Data Science", "Review System", "Python"],
      link: "https://drive.google.com/drive/folders/1wxqBo-HRkO5D_YDh7WF3UQmlF6JPaOeJ?usp=drive_link",
      linkText: "View Project"
    },
    {
      title: "ATM Simulator (OOP C++)",
      description: "Object-oriented ATM simulation system built in C++. Features account management, transactions, balance inquiry, and secure PIN verification using OOP principles.",
      tags: ["C++", "OOP", "Software Development"],
      link: "https://drive.google.com/drive/folders/1YC1OSMyDi9hsv6VsLpFAEwy5Yr5qxruu?usp=drive_link",
      linkText: "View Code"
    },
    {
      title: "Arduino Smart Parking System",
      description: "IoT-based smart parking solution using Arduino. Features real-time parking slot detection, automated barriers, and sensor-based monitoring for efficient parking management.",
      tags: ["Arduino", "IoT", "Sensors", "Hardware"],
      link: "https://drive.google.com/drive/folders/1-ljpucPr1Qp9KLXNAc4kYyRH8SLgmqiD?usp=drive_link",
      linkText: "View Project"
    },
    {
      title: "Arduino RFID Door Lock System",
      description: "Security system using RFID technology and Arduino. Provides keyless entry with card authentication, access logging, and customizable security features.",
      tags: ["Arduino", "RFID", "Security", "IoT"],
      link: "https://drive.google.com/drive/folders/1YcaOMOumxjxBG4Tc0mRQ4DNdkTR2VfRT?usp=drive_link",
      linkText: "View Project"
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
