import React from 'react';
import '../css/Header.css';

const Header = ({ openedTabs, closeTab, openTab }) => {
  return (
    <div className="header-tabs">
      <div className='tab' style={{ paddingRight: '59px', paddingTop: '7px' }}>
        <span>personal-info</span>
      </div>
      {openedTabs.map((tab, index) => (
        <div
          key={index}
          className={`tab`}
          onClick={() => openTab(tab.path, tab.name)} // Set the tab as active
        >
          <span>{tab.name}</span>
          <button onClick={(e) => {
            e.stopPropagation();
            closeTab(tab.path);
          }}>
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default Header;
