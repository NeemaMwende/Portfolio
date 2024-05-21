import React from 'react'
import "./Bio.css";

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
          <div className='tech-icon'><img src="./" alt="" /></div>
          <div className='tech-icon'><img src="./" alt="" /></div>
        </div>
      </div>
    </section>
  )
}

export default Bio;