import React, { useState } from 'react';
import '../css/SideMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFile, faChevronRight, faChevronDown, faTimes, faTimes as faClose } from '@fortawesome/free-solid-svg-icons';

const SideMenu = ({ openTab, activeTab, closeTab, closeAllTabs, openedTabs }) => {
  const [isEducationOpen, setEducationOpen] = useState(false);
  const [isWorkOpen, setWorkOpen] = useState(false);
  const [isOpenedTabsOpen, setOpenedTabsOpen] = useState(true);

  const toggleEducation = () => setEducationOpen(!isEducationOpen);
  const toggleWork = () => setWorkOpen(!isWorkOpen);
  const toggleOpenedTabs = () => setOpenedTabsOpen(!isOpenedTabsOpen);

  // Prevent event propagation when clicking close button
  const handleCloseClick = (e, path) => {
    e.stopPropagation();
    closeTab(path);
  };

  // Close all opened tabs
  const handleCloseAllTabs = (e) => {
    e.stopPropagation();
    closeAllTabs();
  };

  return (
    <div className="sidebar">
      {/* Mobile Opened Tabs Section - only visible on mobile */}
      {openedTabs && openedTabs.length > 0 && (
        <div className="folder mobile-tabs-folder md:hidden">
          <p onClick={toggleOpenedTabs} style={{color: 'white'}}>
            <FontAwesomeIcon
              icon={isOpenedTabsOpen ? faChevronDown : faChevronRight}
              className="arrow-icon"
              style={{ color: isOpenedTabsOpen ? 'white' : '#607B96' }}
            />
            <FontAwesomeIcon icon={faFolder} className="folder-icon" style={{color: '#E99287'}} />
            Opened Tabs
            <button 
              className="close-all-btn"
              onClick={handleCloseAllTabs}
              style={{ marginLeft: 'auto', fontSize: '0.8rem', color: '#FF6464' }}
            >
              <FontAwesomeIcon icon={faClose} /> Close All
            </button>
          </p>
          {isOpenedTabsOpen && openedTabs.length > 0 && (
            <ul>
              {openedTabs.map((tab, index) => (
                <li 
                  key={index}
                  className="file-item" 
                  onClick={() => openTab(tab.path, tab.name)}
                  style={{ color: activeTab === tab.path ? 'white' : '#607B96' }}
                >
                  <FontAwesomeIcon icon={faFile} className="file-icon" style={{color: '#607B96'}} />
                  <span>{tab.name}</span>
                  <FontAwesomeIcon 
                    icon={faTimes} 
                    className="close-icon" 
                    onClick={(e) => handleCloseClick(e, tab.path)}
                    style={{ marginLeft: '8px', cursor: 'pointer' }}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      
      <div className="folder">
        <p onClick={toggleEducation} style = {{color: 'white'}}>
        <FontAwesomeIcon
          icon={isEducationOpen ? faChevronDown : faChevronRight}
          className="arrow-icon"
          style={{ color: isEducationOpen ? 'white' : '#607B96' }}
        />
          <FontAwesomeIcon icon={faFolder} className="folder-icon" style = {{color: '#FEA55F'}} />
          Education
        </p>
        {isEducationOpen && (
          <ul>
            <li className="file-item" onClick={() => openTab('/about/education/bachelor', 'Bachelor')}
              style={{ color: activeTab === '/about/education/bachelor' ? 'white' : '#607B96' }}>
              
              <FontAwesomeIcon icon={faFile} className="file-icon" style = {{color: '#607B96'}} />
              <span>Bachelor</span>
            </li>
          </ul>
        )}
      </div>
      <div className="folder">
        <p onClick={toggleWork} style = {{color: 'white'}}>
        <FontAwesomeIcon
          icon={isWorkOpen ? faChevronDown : faChevronRight}
          className="arrow-icon"
          style={{ color: isWorkOpen ? 'white' : '#607B96' }}
        />
          <FontAwesomeIcon icon={faFolder} className="folder-icon" style = {{color: '#43D9AD'}}  />
          Work
        </p>
        {isWorkOpen && (
          <ul>
            <li className="file-item" onClick={() => openTab('/about/work/job1', 'Job 1')} 
            style={{ color: activeTab === '/about/work/job1' ? 'white' : '#607B96' }}>
              <FontAwesomeIcon icon={faFile} className="file-icon" style = {{color: '#607B96'}} />
              <span>Job 1</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SideMenu;
