import React, { useState } from 'react';
import projects from '../data/projects.json';

const filterCategories = ['All', 'Coded', 'Seo'];

export default function PortfolioBlock() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [filter, setFilter] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedProjectIndex(prev => (prev === index ? null : index));
  };

  const handleDoubleClick = (link) => {
    window.open(link, '_blank');
  };

  const filteredProjects = projects.filter(
    project => filter === 'All' || project.category === filter
  );

  return (
    <div className="portfolioBlock">
      <img src="./image12.png" alt="landscape image" className="portfolioBanner" />

      <h3 className="blockTitle skillBlockTitle" id="portfolioTitle">Portfolio</h3>

      <nav className="proNavigation">
        {filterCategories.map(category => (
          <button
            key={category}
            onClick={() => {
              setFilter(category);
              setSelectedProjectIndex(null);
            }}
            className={`proLink ${filter === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </nav>

      <div className="projectsBlock">
        {filteredProjects.map((project, index) => (
          <div
            className="projectCard"
            key={project.id || index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ position: 'relative' }}
          >
            <img
              src={project.image}
              alt={project.alt || project.title}
              onClick={() => handleClick(index)}
              onDoubleClick={() => handleDoubleClick(project.link)}
              style={{ cursor: 'pointer' }}
            />
            {hoveredIndex === index && (
              <div className="tooltip">
                Click — description, double-click — follow the link.
              </div>
            )}
            {selectedProjectIndex === index && (
              <div className="projectDescription">
                <h4>{project.title}</h4>
                <p>{project.shortDescription}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


