// Projects.js
import React, { useState } from 'react';
import ProjectTab from './ProjectTab'; // Assuming you have this component
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="projects-container">
      <h2 style={{color:"#4285F4"}}>Projects</h2>
      <p style={{textAlign:"center"}}>Explore my tech and creative expertise: interactive apps, seamless shopping, Google login, conversion tools, robust CRUD, image editing, and dynamic quizzes — showcasing a fusion of technical skill and innovation.</p>
      <div className="tab-container">
        <div
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </div>
        <div
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </div>
        <div
          className={`tab ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </div>
      </div>

      <ProjectTab tabNumber={activeTab} />
    </div>
  );
};

export default Projects;
