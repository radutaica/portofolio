import React from 'react';
import '../css/Header.css';

const Header = ({ openedTabs, closeTab, openTab, activeTab }) => {
  return (
    <div className="header-tabs">
      <div className="tab" style={{ paddingRight: '39px', paddingTop: '7px' }}>
        <span className="tab-label" style={{ fontWeight: 'bold' }}>
          personal-info
        </span>
      </div>
      {openedTabs.map((tab, index) => (
        <div
          key={index}
          className={`tab ${tab['path'] === activeTab ? "active" : ""}`}
          style = {{color: '#607B96'}}
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
