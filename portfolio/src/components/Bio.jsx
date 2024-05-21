import React from 'react'
import "./Bio.css";
import { FaReact } from 'react-icons/fa'; // React icon from Font Awesome
import { FaHtml5 } from 'react-icons/fa'; // HTML5 icon from Font Awesome
import { FaCss3Alt } from 'react-icons/fa'; // CSS3 icon from Font Awesome
// import { MdHeight } from 'react-icons/md';

const Bio = () => {
  return (
    <section className='hero-container'>
      <div className='hero-content'>
          <h2>Building Digital Experiences That Inspire</h2>
          <p>Passionate Full Stack Developer | Transforming Ideas into 
            Seamless and Visually Stunning Web Solutions
          </p>
      </div>

      <div className='hero-img'>
        <div>
              <div className='tech-icon'>
                  <img src="./Images/pic.svg" alt="" />
                </div>
              <img src={<FaReact style={{ color: '#61DBFB' }} /> } alt="" />
        </div>

        {/* <div className='iconStyle' style={{ textAlign: 'center', marginTop: '2rem' }}>
            <FaReact style={{ color: '#61DBFB' }} /> 
            <FaHtml5 style={{ color: '#E34F26' }} />
            <FaCss3Alt style={{ color: '#1572B6' }} />
        </div> */}

      <div>
          <div className='tech-icon'>
            <img src={<FaHtml5 style={{ color: '#E34F26' }} />} alt="" />
          </div>
          <div className='tech-icon'>
            <img src={<FaReact style={{ color: '#E34F26' }} />} alt="" />
          </div>
          <div className='tech-icon'>
            <img src={<FaCss3Alt style={{ color: '#E34F26' }} />} alt="" />
          </div>
      </div>
      </div>
    </section>
  );
};

export default Bio;