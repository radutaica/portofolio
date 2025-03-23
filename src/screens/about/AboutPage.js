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
    if (!openedTabs.some(tab => tab.path === tabPath)) {
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-[#011627] text-[#607B96]">
      <div className="flex items-center border-b border-[#1E2D3D] h-[45px] px-4 md:px-0">
        <button 
          className="md:hidden text-[#607B96] hover:text-white mr-4"
          onClick={toggleMobileMenu}
        >
          <FaBars className="w-6 h-6" />
        </button>
        <Header 
          openedTabs={openedTabs} 
          closeTab={closeTab} 
          openTab={openTab} 
          activeTab={activeTab}
        />
      </div>
      <div className="flex flex-1">
        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={toggleMobileMenu}
          />
        )}
        
        {/* Sidebar */}
        <div 
          className={`
            fixed md:relative w-[250px] h-[calc(100vh-45px)] bg-[#011627] border-r border-[#1E2D3D] 
            transform transition-transform duration-300 z-50
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
            md:translate-x-0 overflow-y-auto
          `}
        >
          <SideMenu openTab={openTab} activeTab={activeTab} />
        </div>

        {/* Main content area */}
        <div className="flex flex-1">
          <div className="w-full md:w-[55%]">
            <ContentArea activeTab={activeTab} />
          </div>
          <div className="hidden md:block w-[45%] border-l border-[#1E2D3D] h-[74.5vh]">
            <AboutTerminal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
