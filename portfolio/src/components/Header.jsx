import React from 'react';

const Header = () => {
    return (
        <header>
        
            {/* Your logo or site title */}
            {/* <h1>My Portfolio</h1> */}

            {/* Social media icons */}
            <div className="social-icons">
                <a href="https://x.com/GracePeter1212">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://web.facebook.com/angel.wesley.564/">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/a.n.g.e.l_w.e.s/">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/neema-mwende-2089a8273/">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/NeemaMwende/">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </header>
    );
};

export default Header;