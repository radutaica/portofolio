import React from 'react';
import '../css/Header.css';

const Header = ({ openedTabs, closeTab, openTab, activeTab }) => {
  return (
    <div className="header-tabs">
      <div 
        className="tab"
        onClick={() => openTab(null, null)}
      >
        <span className="tab-label text-sm md:text-base font-bold">
          personal-info
        </span>
      </div>
      <div className="hidden md:flex h-full">
        {openedTabs.filter(tab => tab.name !== 'personal-info').map((tab, index) => (
          <div
            key={index}
            className={`tab ${tab['path'] === activeTab ? "active" : ""}`}
            onClick={() => openTab(tab.path, tab.name)}
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
    </div>
  );
};

export default Header;
