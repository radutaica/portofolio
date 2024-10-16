import React, { useState } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">radu-taica</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a
            href="#home"
            className={activeTab === 'home' ? 'active' : ''}
            onClick={() => setActiveTab('home')}
          >
            _hello
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeTab === 'about' ? 'active' : ''}
            onClick={() => setActiveTab('about')}
          >
            _about_me
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeTab === 'projects' ? 'active' : ''}
            onClick={() => setActiveTab('projects')}
          >
            _projects
          </a>
        </li>
      </ul>
      <div className="navbar-contact">
        <a
          href="#contact"
          className={activeTab === 'contact' ? 'active' : ''}
          onClick={() => setActiveTab('contact')}
        >
          _contact_me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
