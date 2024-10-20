import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import ContentArea from '../../components/ContentArea';
import '../../css/AboutPage.css';  // CSS for layout

const AboutPage = () => {
  const [openedTabs, setOpenedTabs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Add a new tab when clicked from SideMenu
  const openTab = (tabPath, tabName) => {
    if (!openedTabs.some(tab => tab.path === tabPath)) {
      setOpenedTabs([...openedTabs, { path: tabPath, name: tabName }]);
    }
    navigate(tabPath);
  };

  // Close a tab
  const closeTab = (tabPath) => {
    const updatedTabs = openedTabs.filter(tab => tab.path !== tabPath);
    setOpenedTabs(updatedTabs);

    // Navigate to the next tab or fallback
    if (updatedTabs.length > 0) {
      navigate(updatedTabs[updatedTabs.length - 1].path);
    } else {
      navigate('/about');
    }
  };

  return (
    <div className="about-page-layout">
      <SideMenu openTab={openTab} />
      <div className="main-content">
        <Header openedTabs={openedTabs} closeTab={closeTab} />
        <ContentArea />
      </div>
    </div>
  );
};

export default AboutPage;
