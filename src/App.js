import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './screens/HomePage'
import './App.css';  // Global styles

const App = () => {
  return (
    <div className="homepage">
      <div className="main-body">
        <Navbar />
        
        <div className="page-content">
          <HomePage />
        </div>
      </div>
    </div>
  );
};

export default App;
