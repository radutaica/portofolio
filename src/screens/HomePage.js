import React from 'react';
import '../css/HomePage.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // React icons

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Hi, I'm John Doe</h1>
          <p>A Full Stack Developer</p>
          <div className="social-links">
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="mailto:your-email@example.com">
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I am a passionate full-stack developer with experience in building web applications using
          modern technologies like React, Node.js, Express, and MongoDB. I love crafting beautiful
          and efficient user interfaces and building scalable backends.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill">
            <h3>Frontend</h3>
            <p>React, HTML, CSS, JavaScript, Bootstrap</p>
          </div>
          <div className="skill">
            <h3>Backend</h3>
            <p>Node.js, Express, MongoDB, SQL</p>
          </div>
          <div className="skill">
            <h3>DevOps</h3>
            <p>Docker, Git, AWS</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 John Doe | All rights reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
