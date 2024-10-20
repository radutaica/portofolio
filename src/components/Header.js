import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/Header.css'

const Header = ({ openedTabs, closeTab }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="header-tabs">
      {openedTabs.map((tab, index) => (
        <div
          key={index}
          className={`tab ${location.pathname === tab.path ? 'active' : ''}`}
          onClick={() => navigate(tab.path)}
        >
          <span>{tab.name}</span>
          <button onClick={() => closeTab(tab.path)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default Header;