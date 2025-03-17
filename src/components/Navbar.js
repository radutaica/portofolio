import React, { useState } from 'react';
import '../css/Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();  // Get the current path
  const [activeTab, setActiveTab] = useState(location.pathname);  // Initialize with the current path

  // Update active tab whenever the path changes
  React.useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div>
          <Link to="/" className="text-[#607B96] no-underline text-base mr-[29.5px] blinking-caret">`$ ./radu-taica</Link>
        </div>
      </div>
      <ul className="navbar-links">
        <li>
          <Link
            to="/"
            className={activeTab === '/' ? 'active' : ''}
          >
            _hello
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={activeTab === '/about' ? 'active' : ''}
          >
            _about_me
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={activeTab === '/projects' ? 'active' : ''}
          >
            _projects
          </Link>
        </li>
      </ul>
      <div className="navbar-contact">
        <Link
          to="/contact"
          className={activeTab === '/contact' ? 'active' : ''}
        >
          _contact_me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
