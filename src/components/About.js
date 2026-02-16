import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-image">
        <img 
          src="/profile.jpg" 
          alt="Abdullah Naeem - AI Student at SZABIST Islamabad specializing in Machine Learning and Artificial Intelligence" 
          className="profile-pic"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x300/0a0e27/00f5ff?text=AN';
          }}
        />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm Abdullah Naeem, a dedicated AI student at SZABIST Islamabad with a passion for 
          leveraging technology to solve real-world problems. My journey in tech started with 
          learning programming fundamentals and has evolved into exploring the fascinating world 
          of Artificial Intelligence and Machine Learning.
        </p>
        <p>
          Beyond academics, I'm an entrepreneur running Epicurean Blends, an e-commerce platform 
          specializing in herbal products. This venture has taught me valuable lessons in business 
          management, digital marketing, and customer engagement.
        </p>
        <p>
          I've completed multiple internships in diverse fields including renewable energy (Solar Water Project), 
          SEO optimization, and Machine Learning, giving me a well-rounded understanding of the tech industry.
        </p>
        <p>
          <strong>Education:</strong><br />
          • BS in Artificial Intelligence - SZABIST Islamabad (Current)<br />
          • FSc - Punjab Group of Colleges (2024)<br />
          • Matriculation - SLS Montessori and Colleges (2023)
        </p>
      </div>
    </section>
  );
}

export default About;
