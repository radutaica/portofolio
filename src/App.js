import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './screens/HomePage'
import Footer from './components/Footer';
import './App.css';  // Global styles

const App = () => {
  return (
    <div className="homepage">
      <div className="main-body">
        <Navbar />
        <div className="page-content">
          <HomePage />
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
