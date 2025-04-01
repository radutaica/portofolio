import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import Navbar from './components/Navbar';
import HomePage from './screens/HomePage';
import AboutPage from './screens/about/AboutPage'; // Example of another page
import ProjectsPage from './screens/projects/ProjectsPage';
import ContactPage from './screens/ContactPage'; // Another example
import Footer from './components/Footer';
import './App.css';  // Global styles

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="homepage">
        <div className="flex flex-col h-full">
          {/* Show desktop navbar on larger screens */}
          <div className="hidden md:block">
            <Navbar />  {/* Always present */}
          </div>
          
          {/* Show mobile header on small screens */}
          <div className="md:hidden">
            <div className="mobile-header">
              <span className="text-[#607B96]">radu-taica</span>
              <button onClick={() => setIsMobileMenuOpen(true)} className="menu-btn">☰</button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`mobile-menu md:hidden ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="mobile-menu-header">
              <span className="text-[#607B96]">radu-taica</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="close-btn">×</button>
            </div>
            <div className="mobile-menu-content">
              <h2 className="text-[#607B96] mb-4"># navigate:</h2>
              <nav className="mobile-nav">
                <a href="/" className="nav-item">_hello</a>
                <a href="/about" className="nav-item">_about-me</a>
                <a href="/projects" className="nav-item">_projects</a>
                <a href="/contact" className="nav-item">_contact-me</a>
              </nav>
            </div>
          </div>

          {/* Main content area - flex-1 to take remaining space */}
          <div className="flex-1 min-h-0">
            <Routes>
              {/* Define routes for different pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
          
          {/* Footer - will always be at the bottom */}
          <Footer className="hidden md:block" />
        </div>
      </div>
    </Router>
  );
};

export default App;
