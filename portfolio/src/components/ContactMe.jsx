import React from 'react';
import "./ContactMe.css";
import ContactMeCard from "./ContactMeCard";
import email from "../Images/pic.svg";
import github from "../Images/pic.svg";
import ContactForm from './ContactForm';

const ContactMe = () => {
  return (
   <section className='contact-container'>
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactMeCard
            iconUrl={email}
            text="neemamwende009@gmail.com"
          />
          <ContactMeCard
            iconUrl={github}
            text="https://github.com/NeemaMwende/"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
   </section>
  );
};

export default ContactMe;