import React from 'react';
import "./ContactMe.css";
import ContactMeCard from "./ContactMeCard";
import email from "../Images/email1.png";
import github from "../Images/github1.png";
import linkedIn from "../Images/linkedin1.png";
import twitter from "../Images/twitter2.png";
import ContactForm from './ContactForm';

const ContactMe = () => {
  return (
   <section className='contact-container' id='contact'>
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactMeCard
            iconUrl={email}
            text="neemamwende009@gmail.com"
          />
          <ContactMeCard
            iconUrl={github}
            text="https://github.com/NeemaMwende"
          />
           <ContactMeCard
            iconUrl={linkedIn}
            text="https://www.linkedin.com/in/neema-mwende-2089a8273"
          />
           <ContactMeCard
            iconUrl={twitter}
            text="https://x.com/GracePeter1212"
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