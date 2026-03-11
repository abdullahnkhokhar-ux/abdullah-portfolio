import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "CodeAlpha",
      duration: "Feb 2026 - Mar 2026 (1 month)",
      description: "Worked on machine learning projects, implementing various ML algorithms, and developing data-driven solutions. Gaining hands-on experience with Python libraries and model development.",
      links: [
        {
          url: "https://drive.google.com/file/d/1on9GPtYGXyarkQg0e1RPtnzNpNFVZS4B/view?usp=drivesdk",
          text: "View Certificate"
        },
        {
          url: "https://drive.google.com/file/d/14CiEgg7Dx3khkK42ruzwCqZdnp_HFbiI/view?usp=drivesdk",
          text: "View Recommendation Letter"
        }
      ]
    },
    {
      title: "SEO Intern",
      company: "Web Maven",
      duration: "Jan 2026 - Apr 2026 (3 months)",
      description: "Learning and implementing SEO strategies, conducting keyword research, optimizing website content, and analyzing performance metrics using tools like Google Analytics and Search Console.",
      links: []
    },
    {
      title: "Fundraising & Event Management",
      company: "Bondh-e-Shams Solar Water Project",
      duration: "2024",
      description: "Led fundraising initiatives and coordinated event management for renewable energy solutions. Managed community outreach programs and organized events to promote sustainable solar water heating technology.",
      links: [
        {
          url: "https://drive.google.com/file/d/1pQXT2Z0Ku9aQqz6iBh8qSrb1DtHNGily/view?usp=drive_link",
          text: "View Certificate"
        }
      ]
    },
    {
      title: "E-commerce Entrepreneur",
      company: "Epicurean Blends",
      duration: "2025 - Present",
      description: "Founded and built a Next.js-based e-commerce platform specializing in premium herbal products. Handle everything from product sourcing, branding, digital marketing, to customer service and business operations.",
      links: [
        {
          url: "https://www.epicureanblends.com",
          text: "Visit Website"
        }
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <h3>{exp.title}</h3>
            <p className="company">{exp.company}</p>
            <p className="duration">{exp.duration}</p>
            <p>{exp.description}</p>
            {exp.links && exp.links.length > 0 && (
              <div className="cert-links">
                {exp.links.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.url}
                    className="cert-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text} →
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

