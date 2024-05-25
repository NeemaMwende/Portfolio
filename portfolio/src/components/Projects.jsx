import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.css';
import angel from "../Images/pic.jpeg";
import { useRef } from 'react';
import PROJECTS from "../utils/data";

const Projects = () => {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section id='projects' className="projects-container">
      <div className="projects-info">
        <h5>My Projects</h5>

        <div className="experience-content">
          <div className="arrow-right" onClick={slideRight}>
            &gt;
          </div>
          <div className="arrow-left" onClick={slideLeft}>
            &lt;
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {PROJECTS.map((project, index) => (
            <div key={index}>
              <img src={angel} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
