import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
            <>
                <nav className='row-wrapper'>
                    <div className='nav-content'>
                        <img className='logo' src='./public/favicon.ico' alt='' />

                        <ul>
                            <li><a className="menu-item">Home</a></li>
                            <li><a className="menu-item">Skills</a></li>
                            <li><a className="menu-item">Work Experience</a></li>
                            <li><a className="menu-item">Projects</a></li>
                            <li><a className="menu-item">Contact Me</a></li>

                            <button className='contact-btn' onClick={() => {}}>Hire Me</button>
                        </ul>
                    </div>
                </nav>
            </>
    );
};

export default Navbar;