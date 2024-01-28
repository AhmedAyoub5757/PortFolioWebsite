// AboutMe.js

import React, { useState } from "react";
import "./AboutMe.css"; // Your custom styles
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("intro"); // Default active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getContentForTab = () => {
    // Switch case to provide content based on the active tab
    switch (activeTab) {
      case "intro":
        return (
          <div className="tab-content-inner animate__animated animate__fadeIn">
            {/* <h2 className="g">Brief Introduction</h2> */}
            <div class="intro-paragraph">
              <h2 class="intro-heading">Hello, I'm Ahmed Ayoub,</h2>
              <p class="creative-exploration">
                A passionate and dedicated computer science enthusiast in the
                final year of my BSc program. With a strong foundation in both
                front-end and back-end technologies, I embark on a journey where
                creativity meets functionality in the world of web development.
              </p>
              <p class="creative-exploration">
                Beyond coding, I am on a creative exploration, delving into the
                realms of graphic design using tools like Adobe Illustrator and
                Photoshop. This fusion of technical prowess and artistic flair
                is evident in my work. Join me on this exciting venture as we
                explore the possibilities at the intersection of code and
                creativity.
              </p>
            </div>
          </div>
        );
      case "achievements":
        return (
          <div className="tab-content-inner animate__animated animate__fadeIn">
            {/* <h2 className="g">Achievements</h2> */}
            {/* <p>Insert information about your achievements here...</p> */}
            <p>
              <h4 className="amc">Project Recognition:</h4>
              <p>
                Developed and led the approval of 10+ projects as part of
                university coursework, showcasing proficiency in project
                management and execution.
              </p>
              <h4 className="amc">Competitions:</h4>
              <p>
                Engaged in a rigorous 100-day coding challenge, honing coding
                skills and fostering consistency in daily coding practices.
              </p>
              <h4 className="amc">Certifications:</h4>
              <p>
                Certified as a Meta Web Developer, validating expertise in web
                development technologies and practices.
              </p>
              <h4 className="amc">Leadership Roles:</h4>
              <p>
                Led the development of all university projects, demonstrating
                effective leadership and collaborative skills in team-based
                environments.
              </p>
            </p>
          </div>
        );
      case "education":
        return (
          <div className="tab-content-inner animate__animated animate__fadeIn">
            {/* <h2 className="g">Education</h2> */}
            <p>
              <h4 className="amc">Bachelor of Science in Computer Science (Current)</h4>
              <ul>
                <li>Mehran University of Engineering and Technology</li>
                <li>Jamshoro, Sindh, Pakistan</li>
                <li>2024</li>
              </ul>
              <h4 className="amc">Higher Secondary School (Intermediate) - Pre-Engineering</h4>
              <ul>
                <li>
                  Board of Intermediate and Secondary Education, Hyderabad
                </li>
                <li>Hyderabad, Sindh, Pakistan</li>
                <li>2018</li>
              </ul>
              <h4 className="amc">
                Secondary School Certificate (Matriculation) - Pre-Engineering
              </h4>
              <ul>
                <li>
                  Board of Intermediate and Secondary Education, Hyderabad
                </li>
                <li>Hyderabad, Sindh, Pakistan</li>
                <li>2020</li>
              </ul>
            </p>
          </div>
        );
      case "experience":
        return (
          <div className="tab-content-inner animate__animated animate__fadeIn">
            {/* <h2 className="g">Experience</h2> */}
            <p>
              <h4 className="amc">Internship</h4>
              <ul>
                <li>Gexton</li>
                <li>Full Stack Web Developer</li>
                <li>
                  Interned for 2 months in Full Stack Web Development, engaging
                  in diverse projects across the development stack. This
                  immersive experience accelerated my growth as a developer,
                  honing skills in front-end, back-end, and collaborative
                  project execution.
                </li>
              </ul>
              <h4 className="amc">Personal Projects</h4>
              <ul>
                <li>
                  Dedicated time to personal projects during my Computer Science
                  studies, fostering versatility and practical coding
                  application. Independent and coursework projects underscore my
                  commitment to continuous learning in software development.
                </li>
                <li>
                  Landing Web Page, Notes App, TextUtills App, Gym Web and many
                  others.
                </li>
                <li>HTML, CSS, JS, PHP, BOOTSTRAP, MYSQL, REACTJS</li>
              </ul>
            </p>
          </div>
        );
      case "certifications":
        return (
          <div className="tab-content-inner animate__animated animate__fadeIn">
            {/* <h2 className="g">Certifications</h2> */}
            <ul id="amc">
              <li>HTML and CSS in Depth</li>
              <li>Programming with JavaScript</li>
              <li>Principles of UX/UI Design</li>
              <li>React Basics</li>
              <li>Advanced React</li>
              <li>Version Control</li>
              <li>Front-End Developer Capstone</li>
              <li>Programming with Python</li>
              <li>Work Smarter with Microsoft Word</li>
              <li>Work Smarter with Microsoft Excel</li>
            </ul>
          </div>
        );
      // Add similar cases for other tabs (education, experience, certifications)

      default:
        return null; // Handle cases where the active tab doesn't match any predefined tab
    }
  };

  return (
    <div className="container mt-5" id="aboutme">
      <h1 className="text-center mb-4" id="abh">About Me</h1>

      {/* Two-column layout */}
      <div className="row">
        {/* Left column for tabs */}
        <div className="col-md-4">
          <div className="about-tabs">
            <div
              className={`about-tab ${activeTab === "intro" ? "active" : ""}`}
              onClick={() => handleTabClick("intro")}
            >
              Introduction
            </div>
            <div
              className={`about-tab ${
                activeTab === "education" ? "active" : ""
              }`}
              onClick={() => handleTabClick("education")}
            >
              Education
            </div>
            <div
              className={`about-tab ${
                activeTab === "experience" ? "active" : ""
              }`}
              onClick={() => handleTabClick("experience")}
            >
              Experience
            </div>
            <div
              className={`about-tab ${
                activeTab === "achievements" ? "active" : ""
              }`}
              onClick={() => handleTabClick("achievements")}
            >
              Achievements
            </div>
            <div
              className={`about-tab ${
                activeTab === "certifications" ? "active" : ""
              }`}
              onClick={() => handleTabClick("certifications")}
            >
              Certifications
            </div>
            {/* Add similar tabs for other subsections (education, experience, certifications) */}
          </div>
        </div>

        {/* Right column for tab content */}
        <div className="col-md-8">{getContentForTab()}</div>
      </div>
    </div>
  );
};

export default AboutMe;
