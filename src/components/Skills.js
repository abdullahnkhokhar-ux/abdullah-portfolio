import React from 'react';

function Skills() {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: "85%" },
        { name: "C++", level: "80%" },
        { name: "HTML/CSS", level: "75%" },
      ]
    },
    {
      category: "Technical Skills",
      skills: [
        { name: "Machine Learning", level: "70%" },
        { name: "Data Science", level: "75%" },
        { name: "IoT & Arduino", level: "80%" },
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "MS Office Suite", level: "90%" },
        { name: "Canva Design", level: "85%" },
        { name: "Shopify", level: "80%" },
        { name: "SEO", level: "75%" },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills & Expertise</h2>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            {category.skills.map((skill, idx) => (
              <div key={idx} className="skill-item">
                <div className="skill-name">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
