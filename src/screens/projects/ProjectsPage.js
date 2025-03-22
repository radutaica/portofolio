import React, { useState } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaVuejs, FaAngular, FaGithub } from 'react-icons/fa';
import { SiGatsby, SiFlutter } from 'react-icons/si';
import ProjectCard from '../../components/ProjectCard';

const ProjectsPage = () => {
  const [selectedTech, setSelectedTech] = useState('React');

  const technologies = [
    { name: 'React', icon: <FaReact className="w-6 h-6 text-[#61DAFB]" /> },
    { name: 'HTML', icon: <FaHtml5 className="w-6 h-6 text-[#E34F26]" /> },
    { name: 'CSS', icon: <FaCss3Alt className="w-6 h-6 text-[#1572B6]" /> },
    { name: 'Vue', icon: <FaVuejs className="w-6 h-6 text-[#4FC08D]" /> },
    { name: 'Angular', icon: <FaAngular className="w-6 h-6 text-[#DD0031]" /> },
    { name: 'Gatsby', icon: <SiGatsby className="w-6 h-6 text-[#663399]" /> },
    { name: 'Flutter', icon: <SiFlutter className="w-6 h-6 text-[#02569B]" /> },
  ];

  const projects = [
    {
      title: 'Project 1',
      subtitle: '_ui-animations',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      image: '/path-to-your-image1.jpg',
      tech: 'React'
    },
    {
      title: 'Project 2',
      subtitle: '_tetris-game',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      image: '/path-to-your-image2.jpg',
      tech: 'React'
    },
    {
        title: 'Project 3',
        subtitle: '_portofolio',
        description: 'Duis aute irure dolor in velit esse cillum dolore.',
        image: '/path-to-your-image2.jpg',
        tech: 'React'
      },
  ];

  return (
    <div className="h-[75vh] bg-[#011627] text-white">
      <div className="flex h-full">
        {/* Left sidebar - Project list */}
        <div className="w-[300px] border-r border-[#1E2D3D] overflow-y-auto">
          <div className="p-4">
            <h2 className="text-[#607B96] mb-4">projects</h2>
            <div className="space-y-2">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className={`flex items-center space-x-2 p-2 cursor-pointer ${
                    selectedTech === tech.name ? 'bg-[#1E2D3D]' : ''
                  }`}
                  onClick={() => setSelectedTech(tech.name)}
                >
                  <input
                    type="checkbox"
                    checked={selectedTech === tech.name}
                    onChange={() => setSelectedTech(tech.name)}
                    className="border-[#607B96]"
                  />
                  {tech.icon}
                  <span className="text-[#607B96]">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content - Project cards */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {projects
              .filter(project => selectedTech === project.tech)
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
  );
};

export default ProjectsPage; 