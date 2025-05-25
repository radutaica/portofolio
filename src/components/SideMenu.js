import React, { useState } from 'react';
import '../css/SideMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFile, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const SideMenu = ({ openTab, activeTab }) => {
  const [isEducationOpen, setEducationOpen] = useState(false);
  const [isWorkOpen, setWorkOpen] = useState(false);

  const toggleEducation = () => setEducationOpen(!isEducationOpen);
  const toggleWork = () => setWorkOpen(!isWorkOpen);

  return (
    <div className="sidebar">
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
            <li onClick={() => openTab('/about/education/bachelor', 'Bachelor')}
              style={{ color: activeTab === '/about/education/bachelor' ? 'white' : '#607B96' }}>
              
              <FontAwesomeIcon icon={faFile} className="file-icon" style = {{color: '#607B96'}} />
              Bachelor
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
            <li onClick={() => openTab('/about/work/job1', 'Job 1')} 
            style={{ color: activeTab === '/about/work/job1' ? 'white' : '#607B96' }}>
              <FontAwesomeIcon icon={faFile} className="file-icon" style = {{color: '#607B96'}} />
              Job 1
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SideMenu;
