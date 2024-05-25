import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav';
import angel from "../Images/angel3.png";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
            <>
                <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

                <nav className='nav-wrapper'>
                    <div className='nav-content'>
                        <img className='logo' src={angel} alt='' />

                        <ul>
                            <li id='home'><a className="menu-item">Home</a></li>
                            <li id='skills'><a className="menu-item">Skills</a></li>
                            <li id='work'><a className="menu-item">Work Experience</a></li>
                            <li id='projects'><a className="menu-item">Projects</a></li>
                            <li id='contact'><a className="menu-item">Contact Me</a></li>

                         <div className='btns'>
                            <button className='contact-btn' onClick={() => {}}>Hire Me</button>
                            <button className='contact-btn' onClick={() => {}}>Resume</button>
                        </div>  
                        
                        </ul>

                        <button className='menu-btn' onClick={toggleMenu}>
                            <span 
                                className={"material-symbols-outlined"} 
                                style={{ fontSize:"1.8rem" }}>
                                    {openMenu ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </nav>
            </>
    );
};

export default Navbar;