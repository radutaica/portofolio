import React from 'react';
import { FaReact } from 'react-icons/fa';

const ProjectCard = ({ title, subtitle, description, image, techIcon }) => {
  return (
    <div className="bg-[#011221] rounded-lg overflow-hidden mb-4 border border-[#1E2D3D] max-w-[450px]">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="absolute top-2 right-2 bg-[#011221] p-1.5 rounded-full">
          {techIcon}
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2">
          <span className="text-[#4D5BCE] text-sm">{title}</span>
          <span className="text-[#607B96] text-sm"> // {subtitle}</span>
        </div>
        <p className="text-[#607B96] text-sm mb-3 line-clamp-2">{description}</p>
        <button className="bg-[#1C2B3A] text-[#FFFFFF] px-3 py-1.5 text-sm rounded hover:bg-[#263B4D] transition-colors">
          view-project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard; 