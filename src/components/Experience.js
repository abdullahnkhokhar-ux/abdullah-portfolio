import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "CodeAlpha",
      duration: "Feb 2026 - Mar 2026 (1 month)",
      description: "Working on machine learning projects, implementing various ML algorithms, and developing data-driven solutions. Gaining hands-on experience with Python libraries and model development.",
      link: "https://drive.google.com/file/d/1nVPtri6wgVFp-JNoNhTsrprdjjBQQSSk/view?usp=drive_link",
      linkText: "View Offer Letter"
    },
    {
      title: "SEO Intern",
      company: "Web Maven",
      duration: "Jan 2026 - Apr 2026 (3 months)",
      description: "Learning and implementing SEO strategies, conducting keyword research, optimizing website content, and analyzing performance metrics using tools like Google Analytics and Search Console.",
      link: null,
      linkText: null
    },
    {
      title: "Fundraising & Event Management",
      company: "Bondh-e-Shams Solar Water Project",
      duration: "2024",
      description: "Led fundraising initiatives and coordinated event management for renewable energy solutions. Managed community outreach programs and organized events to promote sustainable solar water heating technology.",
      link: "https://drive.google.com/file/d/1pQXT2Z0Ku9aQqz6iBh8qSrb1DtHNGily/view?usp=drive_link",
      linkText: "View Certificate"
    },
    {
      title: "E-commerce Entrepreneur",
      company: "Epicurean Blends",
      duration: "2025 - Present",
      description: "Founded and manage a Shopify-based e-commerce platform specializing in premium herbal products. Handle everything from product sourcing, branding, digital marketing, to customer service and business operations.",
      link: "https://www.epicureanblends.com",
      linkText: "Visit Website"
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
            {exp.link && (
              <a 
                href={exp.link}
                className="cert-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {exp.linkText} →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
