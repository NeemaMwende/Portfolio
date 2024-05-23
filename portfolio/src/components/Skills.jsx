import React, { useState } from 'react'
import './Skills.css'
import SkillCard from './SkillCard';
import { SKILLS } from '../../src/utils/data';

const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const hardSelectedSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className='skills-container'>
      <h5>Technical Profiency</h5>

      <div className='skills-content'>
        <div className='skills'>
            {SKILLS.map((item) => (
              <SkillCard 
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
              />
            ))}
        </div>

        <div className='skills-info'></div>
      </div>
    </section>
  );
};

export default Skills;