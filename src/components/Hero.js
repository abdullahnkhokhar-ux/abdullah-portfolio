import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <section id="home" className="hero">
      <h1>Hi, I'm Abdullah Naeem</h1>
      <div className="typing-text">
        <TypeAnimation
          sequence={[
            'AI Student',
            2000,
            'E-commerce Entrepreneur',
            2000,
            'Machine Learning Enthusiast',
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>
      <p>
        Passionate about Artificial Intelligence, Machine Learning, and building innovative solutions. 
        Currently pursuing BS in AI at SZABIST Islamabad while running my own e-commerce business.
      </p>
      <div className="hero-buttons">
        <a href="#projects" className="btn-primary">View My Work</a>
        <a href="#contact" className="btn-secondary">Get In Touch</a>
      </div>
    </section>
  );
}

export default Hero;
