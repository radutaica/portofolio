import React, { useState } from 'react';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import ContentArea from '../../components/ContentArea';
import '../../css/AboutPage.css'; // CSS for layout
import AboutTerminal from '../../components/Terminal';
import { FaBars } from 'react-icons/fa';

const AboutPage = () => {
  const [openedTabs, setOpenedTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null); // Keep track of the currently active tab
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add a new tab when clicked from SideMenu or Header
  const openTab = (tabPath, tabName) => {
    // Check if the tab is already opened
    if (!openedTabs.some(tab => tab.path === tabPath) && tabPath !== null) {
      const newOpenedTabs = [...openedTabs, { path: tabPath, name: tabName }];
      setOpenedTabs(newOpenedTabs);
    }
    // Set this tab as the active tab
    setActiveTab(tabPath);
    setIsMobileMenuOpen(false);
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

  // Close all tabs at once
  const closeAllTabs = () => {
    setOpenedTabs([]);
    setActiveTab(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col h-full bg-[#011627] text-[#607B96]">
      {/* Header */}
      <div className="flex items-center border-b border-[#1E2D3D] h-[45px] px-4 md:px-0">
        <Header 
          openedTabs={openedTabs} 
          closeTab={closeTab} 
          openTab={openTab} 
          activeTab={activeTab}
        />
      </div>

      {/* Main container */}
      <div className="flex flex-1 relative min-h-0">
        {/* Sidebar - only visible on desktop */}
        <div className="hidden md:block w-[205px] h-full bg-[#011627] border-r border-[#1E2D3D]">
          <SideMenu openTab={openTab} activeTab={activeTab} closeTab={closeTab} closeAllTabs={closeAllTabs} openedTabs={openedTabs} />
        </div>

        {/* Content container */}
        <div className="flex-1 h-full w-full min-w-[300px] min-h-0">
          {/* Mobile layout */}
          <div className="md:hidden w-full h-full flex flex-col">
            <div className="border-b border-[#1E2D3D]">
              <SideMenu openTab={openTab} activeTab={activeTab} closeTab={closeTab} closeAllTabs={closeAllTabs} openedTabs={openedTabs} />
            </div>
            <div className="flex-1 overflow-y-auto">
              <ContentArea activeTab={activeTab} />
            </div>
          </div>

          {/* Desktop content */}
          <div className="hidden md:flex h-full">
            <div className="w-full lg:w-[65%] h-full overflow-y-auto">
              <ContentArea activeTab={activeTab} />
            </div>
            <div className="hidden lg:block w-[35%] border-l border-[#1E2D3D] h-full min-w-[250px]">
              <AboutTerminal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
