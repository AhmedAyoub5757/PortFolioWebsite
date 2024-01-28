// SkillsSlider.js
import React from 'react';
import Carousel from 'react-multi-carousel';
import CircularProgressBar from './CircularProgressBar';
import 'react-multi-carousel/lib/styles.css';
import './SkillsSlider.css'; // Your custom styles

const SkillSlide = ({ skill, level }) => {
  return (
    <div className="skill-slide">
      <h3>{skill}</h3>
      <CircularProgressBar style={{color:"white"}} level={level} />
    </div>
  );
};

const SkillsSlider = () => {

  const skillsData = [
    { skill: 'HTML', level: 95 },
    { skill: 'CSS', level: 75 },
    { skill: 'JavaScript', level: 70 },
    { skill: 'PHP', level: 85},
    { skill: 'MySQL', level:80},
    { skill: 'Bootstrap', level:95},
    { skill: 'React', level:60},
    { skill: 'C++', level:80},
    { skill: 'Java', level:75},
    { skill: 'Illustrator', level:70}
    // Add more skills and levels as needed
  ];

  const carouselSettings = {
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
    },
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 3000,
    keyBoardControl: true,
    customTransition: 'all .5',
    transitionDuration: 500,
  };

  return (
    <div className="skills-slider-container" id='SkillsSlider'>
      <div className="skills-box">
        <center>
        <h1 className="skills-heading">Skills</h1>
        </center>
        <p className="skills-description">
        Versatile developer skilled in C++, Java, HTML, CSS, JavaScript, PHP, Bootstrap, ReactJS, jQuery, MySQL. Strong foundation in front-end and back-end technologies, complemented by graphic design expertise in Adobe Illustrator and Photoshop.
        </p>
        <Carousel {...carouselSettings} id='c' >
          {skillsData.map((skillData, index) => (
            <SkillSlide key={index} {...skillData} style={{color:"white"}} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SkillsSlider;
