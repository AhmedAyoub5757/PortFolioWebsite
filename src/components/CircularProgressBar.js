// CircularProgressBar.js
import React from 'react';
import './CircularProgressBar.css'; // Your custom styles

const CircularProgressBar = ({ level }) => {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const progress = (level / 100) * circumference;

  return (
    <svg className="progress-ring" width="40" height="40">
      <circle
        className="progress-ring-circle"
        strokeWidth="4"
        fill="transparent"
        r={radius}
        cx="20"
        cy="20"
        style={{ strokeDasharray: `${progress}, ${circumference}` }}
      />
      <text x="50%" y="50%" textAnchor="middle" dy="0.3em" className="progress-text">
        {level}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;
