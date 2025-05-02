import React, { useState } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaVuejs, FaAngular, FaGithub, FaChevronDown, FaChevronRight, FaPython, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiGatsby, SiFlutter } from 'react-icons/si';
import ProjectCard from '../../components/ProjectCard';

const ProjectsPage = () => {
  const [selectedTechs, setSelectedTechs] = useState(['React']);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const technologies = [
    { name: 'TypeScript', icon: <FaReact className="w-6 h-6 text-[#3178C6]" /> },
    { name: 'React', icon: <FaReact className="w-6 h-6 text-[#61DAFB]" /> },
    { name: 'Python', icon: <FaPython className="w-6 h-6 text-[#3776AB]" /> },
    { name: 'HTML', icon: <FaHtml5 className="w-6 h-6 text-[#E34F26]" /> },
    { name: 'CSS', icon: <FaCss3Alt className="w-6 h-6 text-[#1572B6]" /> },
    { name: 'JavaScript', icon: <FaJs className="w-6 h-6 text-[#F7DF1E]" /> },
    { name: 'Node.js', icon: <FaNodeJs className="w-6 h-6 text-[#339933]" /> }
  ];

  const toggleTech = (techName) => {
    setSelectedTechs(prev => {
      if (prev.includes(techName)) {
        return prev.filter(tech => tech !== techName);
      } else {
        return [...prev, techName];
      }
    });
  };

  const removeTech = (techToRemove) => {
    setSelectedTechs(prev => prev.filter(tech => tech !== techToRemove));
  };

  const projects = [
    {
      title: 'Mind Pace',
      subtitle: '_focus-timer',
      description: 'A simple and visually engaging focus timer that helps you stay productive. Built with TypeScript to provide a clean and efficient user experience.',
      image: '/images/mind-pace.jpg',
      tech: ['TypeScript', 'React', 'HTML', 'CSS']
    },
    {
      title: 'Restaurant Pay',
      subtitle: '_qr-payment',
      description: 'Streamline restaurant payments with a quick QR code scan! This project allows customers to view their bill and pay directly from their mobile devices, making the dining experience faster and more convenient.',
      image: '/images/restaurant-pay.jpg',
      tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js']
    },
    {
      title: 'StonksBot',
      subtitle: '_trading-bot',
      description: 'A Python-based trading bot that helps automate and optimize trading strategies.',
      image: '/images/stonksbot.jpg',
      tech: ['Python']
    },
    {
      title: 'Portfolio',
      subtitle: '_personal-website',
      description: 'My personal portfolio website showcasing my projects and skills. Built with modern web technologies.',
      image: '/images/portfolio.jpg',
      tech: ['React', 'JavaScript', 'HTML', 'CSS']
    }
  ];

  return (
    <div className="flex flex-col h-full bg-[#011627] text-white">
      <div className="flex flex-col md:flex-row h-full">
        {/* Technologies sidebar - becomes top menu on mobile */}
        <div className="w-full md:w-[205px] border-b md:border-b-0 md:border-r border-[#1E2D3D]">
          {/* Mobile projects header */}
          <div 
            className="flex items-center h-[45px] border-b border-[#1E2D3D] cursor-pointer md:cursor-default"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-full p-4 flex items-center justify-between">
              <span className="tab-label text-sm md:text-base font-bold">
                projects
              </span>
              <span className="md:hidden">
                {isMobileMenuOpen ? <FaChevronDown /> : <FaChevronRight />}
              </span>
            </div>
          </div>
          
          {/* Technologies list - collapsible on mobile */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block p-4`}>
            <div className="space-y-2">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className={`flex items-center space-x-2 p-2 cursor-pointer ${
                    selectedTechs.includes(tech.name) ? 'bg-[#1E2D3D]' : ''
                  }`}
                  onClick={() => toggleTech(tech.name)}
                >
                  <input
                    type="checkbox"
                    checked={selectedTechs.includes(tech.name)}
                    onChange={() => toggleTech(tech.name)}
                    className="border-[#607B96]"
                  />
                  {tech.icon}
                  <span className="text-[#607B96]">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Selected technologies tabs */}
          <div className="header-tabs h-[45px] border-b border-[#1E2D3D] hidden md:flex">
            {selectedTechs.map((tech) => (
              <div key={tech} className="tab flex">
                <span>{tech}</span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTech(tech);
                  }}
                  className="ml-2"
                >
                  x
                </button>
              </div>
            ))}
          </div>

          {/* Project cards */}
          <div className="flex-1 p-4 md:p-8 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {projects
                .filter(project => 
                  selectedTechs.length === 0 || 
                  selectedTechs.some(selectedTech => project.tech.includes(selectedTech))
                )
                .map((project, index) => (
                  <ProjectCard
                    key={index}
                    {...project}
                    techIcons={project.tech.map(techName => 
                      technologies.find(tech => tech.name === techName)?.icon
                    )}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage; 