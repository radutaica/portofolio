import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import Navbar from './components/Navbar';
import HomePage from './screens/HomePage';
import AboutPage from './screens/about/AboutPage'; // Example of another page
import ContactPage from './screens/ContactPage'; // Another example
import Footer from './components/Footer';
import './App.css';  // Global styles

const App = () => {
  return (
    <Router>
      <div className="homepage">
        <div className="main-body">
          <Navbar />  {/* Always present */}
          <div className="page-content">
            <Routes>
              {/* Define routes for different pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
          <Footer />  {/* Always present */}
        </div>
      </div>
    </Router>
  );
};

export default App;
