import React, { useState } from 'react';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import ContentArea from '../../components/ContentArea';
import '../../css/AboutPage.css'; // CSS for layout
import AboutTerminal from '../../components/Terminal';

const AboutPage = () => {
  const [openedTabs, setOpenedTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null); // Keep track of the currently active tab

  // Add a new tab when clicked from SideMenu or Header
  const openTab = (tabPath, tabName) => {
    // Check if the tab is already opened
    if (!openedTabs.some(tab => tab.path === tabPath)) {
      const newOpenedTabs = [...openedTabs, { path: tabPath, name: tabName }];
      setOpenedTabs(newOpenedTabs);
    }
    // Set this tab as the active tab
    setActiveTab(tabPath);
  };

  // Close a tab
  const closeTab = (tabPath) => {
    const updatedTabs = openedTabs.filter(tab => tab.path !== tabPath);
    setOpenedTabs(updatedTabs);
    if (updatedTabs.length > 0) {
      setActiveTab(updatedTabs[0]['path'])
    } else {
      setActiveTab(null);
    }
  };

  return (
    <div className="about-page-layout">
      <div className="header">
        <Header openedTabs={openedTabs} closeTab={closeTab} openTab={openTab} activeTab = {activeTab} />
      </div>
      <div className="row">
        <div className="side-menu">
          <SideMenu openTab={openTab} activeTab={activeTab} />
        </div>
        <div className="main-content">
          <ContentArea activeTab={activeTab} />
        </div>
        <div className="h-[75vh] overflow-hidden">
          <AboutTerminal/>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
