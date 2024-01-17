// ProjectTab.js
import React from 'react';
import './ProjectTab.css';
import Project1 from '../assets/img/shopping-website.jpg'
import Project2 from '../assets/img/crud.webp'
import Project3 from '../assets/img/multiuserlogin.jpg'
import Project4 from '../assets/img/googlelogin.jpeg'
import Project5 from '../assets/img/pdf-convertor.svg'
import Project6 from '../assets/img/quizz-app.png'
import Project7 from '../assets/img/multiimage.webp'
// import { BsGithub } from 'react-icons/bs';
// import { AiFillGithub } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';


const ProjectTab = ({ tabNumber }) => {
  const projects = getProjectsForTab(tabNumber);
  // <h1 style={{color:"white"}}>Projects</h1>
  return (
    <div className="project-tab" id='pt'>
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-image-container">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-overlay">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="github-icon" />
              </a>
            </div>
          </div>
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const getProjectsForTab = (tabNumber) => {
  // Example projects with images and GitHub links
  switch (tabNumber) {
    case 1:
      return [
        {
          id: 1,
          title: 'Shopping Site',
          // description: 'Description for Project 1',
          image: Project1, // Replace with actual image paths
          github: 'https://github.com/AhmedAyoub5757/Gexton-Internship/tree/main/Task01',
        },
        {
          id: 2,
          title: 'CRUD App',
          // description: 'Description for Project 2',
          image: Project2, // Replace with actual image paths
          github: 'https://github.com/AhmedAyoub5757/Gexton-Internship/tree/main/Task02',
        },
        {
          id: 3,
          title: 'Multi User Login',
          // description: 'Description for Project 3',
          image: Project3, // Replace with actual image paths
          github: 'https://github.com/AhmedAyoub5757/Gexton-Internship/tree/main/Task03',
        },
        {
          id: 4,
          title: 'Model Slider Gallery',
          // description: 'Description for Project 3',
          image: Project7, // Replace with actual image paths
          github: 'https://github.com/AhmedAyoub5757/Gexton-Internship/tree/main/Task04',
        },
        
        // Add more projects as needed
      ];
    case 2:
      return [
        {
          id: 5,
          title: 'Google Login',
          // description: 'Description for Project 3',
          image: Project6, // Replace with actual image paths
          github: 'https://github.com/AhmedAyoub5757/Gexton-Internship/tree/main/Task05',
        },
        {
          id: 6,
          title: 'Crop and Drag Image',
          // description: 'Description for Project 4',
          image: Project3,
          github: 'https://github.com/AhmedAyoub5757/Gexton-Internship/tree/main/Task06',
        },
        {
          id: 7,
          title: 'Multiple Image Preview',
          // description: 'Description for Project 5',
          image: Project4,
          github: 'https://github.com/AhmedAyoub5757/Gexton-Internship/tree/main/Task07',
        },
        {
          id: 8,
          title: 'Drag/Drop Dynamically',
          // description: 'Description for Project 6',
          image: Project7,
          github: 'https://github.com/AhmedAyoub5757/Gexton-Internship/tree/main/Task08',
        },
        
        // Add more projects as needed
      ];
    case 3:
      return [
        {
          id: 9,
          title: 'Export Table To Excel',
          // description: 'Description for Project 6',
          image: Project5,
          github: 'https://github.com/AhmedAyoub5757/Gexton-Internship/tree/main/Task09',
        },
        
        {
          id: 10,
          title: 'Button Disabler',
          // description: 'Description for Project 6',
          image: Project6,
          github: 'https://github.com/AhmedAyoub5757/Gexton-Internship/tree/main/Task10',
        },
        {
          id: 11,
          title: 'Chat App',
          // description: 'Description for Project 7',
          image: Project3,
          github: 'https://github.com/AhmedAyoub5757/Gexton-Internship/tree/main/Task11',
        },
        {
          id: 12,
          title: 'Online Quiz System',
          // description: 'Description for Project 7',
          image: Project7,
          github: 'https://github.com/AhmedAyoub5757/Gexton-Internship/tree/main/Task12',
        },
        {
          id: 13,
          title: 'PDF Converter',
          // description: 'Description for Project 7',
          image: Project5,
          github: 'https://github.com/AhmedAyoub5757/Gexton-Internship/tree/main/Task13',
        },
        // Add more projects as needed
      ];
    default:
      return [];
  }
};

export default ProjectTab;
