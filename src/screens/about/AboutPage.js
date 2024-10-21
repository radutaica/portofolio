import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import ContentArea from '../../components/ContentArea';
import '../../css/AboutPage.css';  // CSS for layout

const AboutPage = () => {
  const [openedTabs, setOpenedTabs] = useState([]);

  // Add a new tab when clicked from SideMenu
  const openTab = (tabPath, tabName) => {
    if (!openedTabs.some(tab => tab.path === tabPath)) {
      setOpenedTabs([...openedTabs, { path: tabPath, name: tabName }]);
    }
  };

  // Close a tab
  const closeTab = (tabPath) => {
    const updatedTabs = openedTabs.filter(tab => tab.path !== tabPath);
    setOpenedTabs(updatedTabs);
  };

  return (
    <div className="about-page-layout">
      <div className = "row">
        <div className="side-menu">
          <SideMenu openTab={openTab} />
        </div>
        <div className="header">
          <Header openedTabs={openedTabs} closeTab={closeTab} />
        </div>
      </div>
      <div className="main-content">
        <ContentArea />
      </div>
    </div>
  );
};

export default AboutPage;
