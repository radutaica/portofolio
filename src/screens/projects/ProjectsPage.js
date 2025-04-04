import React, { useState } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaVuejs, FaAngular, FaGithub, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { SiGatsby, SiFlutter } from 'react-icons/si';
import ProjectCard from '../../components/ProjectCard';

const ProjectsPage = () => {
  const [selectedTechs, setSelectedTechs] = useState(['React']);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const technologies = [
    { name: 'React', icon: <FaReact className="w-6 h-6 text-[#61DAFB]" /> },
    { name: 'HTML', icon: <FaHtml5 className="w-6 h-6 text-[#E34F26]" /> },
    { name: 'CSS', icon: <FaCss3Alt className="w-6 h-6 text-[#1572B6]" /> },
    { name: 'Vue', icon: <FaVuejs className="w-6 h-6 text-[#4FC08D]" /> },
    { name: 'Angular', icon: <FaAngular className="w-6 h-6 text-[#DD0031]" /> },
    { name: 'Gatsby', icon: <SiGatsby className="w-6 h-6 text-[#663399]" /> },
    { name: 'Flutter', icon: <SiFlutter className="w-6 h-6 text-[#02569B]" /> },
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
      title: 'Project 1',
      subtitle: '_ui-animations',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      image: '/images/project_image.jpg',
      tech: 'React'
    },
    {
      title: 'Project 2',
      subtitle: '_tetris-game',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      image: '/images/project_image.jpg',
      tech: 'React'
    },
    {
      title: 'Project 3',
      subtitle: '_portofolio',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      image: '/images/project_image.jpg',
      tech: 'React'
    },
    {
      title: 'Project 4',
      subtitle: '_portofolio',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      image: '/images/project_image.jpg',
      tech: 'React'
    },
    {
      title: 'Project 5',
      subtitle: '_portofolio',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      image: '/images/project_image.jpg',
      tech: 'React'
    },
    {
      title: 'Project 6',
      subtitle: '_portofolio',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      image: '/images/project_image.jpg',
      tech: 'React'
    },
    {
      title: 'Project 7',
      subtitle: '_portofolio',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      image: '/images/project_image.jpg',
      tech: 'React'
    }
  ];

  return (
    <div className="flex flex-col h-[74vh] bg-[#011627] text-white">
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
                .filter(project => selectedTechs.length === 0 || selectedTechs.includes(project.tech))
                .map((project, index) => (
                  <ProjectCard
                    key={index}
                    {...project}
                    techIcon={technologies.find(tech => tech.name === project.tech)?.icon}
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