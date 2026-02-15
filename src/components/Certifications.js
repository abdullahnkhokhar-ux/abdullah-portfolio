import React from 'react';

function Certifications() {
  const certifications = [
    {
      title: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy",
      link: "https://drive.google.com/file/d/1lxfV4HYscs7cPBWuJpQBiKE-0mM_zN7e/view?usp=drive_link"
    },
    {
      title: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      link: "https://drive.google.com/file/d/1vlHe3EXpqmcMwKy4rDkF3ubQ6mB-Ljy8/view?usp=drive_link"
    },
    {
      title: "Introduction to IoT",
      issuer: "Cisco Networking Academy",
      link: "https://drive.google.com/file/d/1AFnXzbpVX2ZvPG79gFfeI7LgZ45hkAhl/view?usp=drive_link"
    },
    {
      title: "AI Fundamentals with IBM SkillsBuild",
      issuer: "Cisco Networking Academy",
      link: "https://drive.google.com/file/d/1fWDUecEK4uSPN2RtG5268V9FC97nHgBi/view?usp=drive_link"
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <a 
              href={cert.link} 
              className="cert-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate →
            </a>
          </div>
        ))}
      </div>
      <p style={{ 
        textAlign: 'center', 
        marginTop: '2rem', 
        color: '#b8c5d6',
        fontSize: '0.9rem' 
      }}>
        * Click on certificates to view them in Google Drive
      </p>
    </section>
  );
}

export default Certifications;
