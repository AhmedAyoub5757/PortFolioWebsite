// CVDownloadButton.js
import React from 'react';
import './CVDownloadButton.css'; // Import your CVDownloadButton styles
import CV from '../assets/ahmed-web-dev-cv.pdf';

const CVDownloadButton = () => {
  const downloadCV = () => {
    // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
    const cvPath = CV
    window.open(cvPath);
  };

  return (
    <button className="cv-download-button" onClick={downloadCV}>
      Download CV
    </button>
  );
};

export default CVDownloadButton;
