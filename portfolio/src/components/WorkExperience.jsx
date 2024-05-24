import React from 'react';
import "./WorkExperience.css";
import ExperienceCard from './ExperienceCard';
import { WORK_EXPERIENCE } from "../../src/utils/data"

const WorkExperience = () => {
  return (
    <section className='experience-container'>
        <h5>Work Experience</h5>

        <div className="experience-content">
            {WORK_EXPERIENCE.map((item) => (
              <ExperienceCard key={item.title} details={item}/>
            ))}
        </div>
    </section>
  )
}

export default WorkExperience;