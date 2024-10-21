import React from 'react';
import '../css/SideMenu.css'

const SideMenu = ({ openTab }) => {
  return (
    <div className="sidebar">
        <div>
            <span>personal-info</span>
        </div>
      <div className="folder">
        <p>Education</p>
        <ul>
          <li onClick={() => openTab('/about/education/bachelor', 'Bachelor')}>Bachelor</li>
          <li onClick={() => openTab('/about/education/masters', 'Masters')}>Masters</li>
        </ul>
      </div>
      <div className="folder">
        <p>Work</p>
        <ul>
          <li onClick={() => openTab('/about/work/job1', 'Job 1')}>Job 1</li>
          <li onClick={() => openTab('/about/work/job2', 'Job 2')}>Job 2</li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
