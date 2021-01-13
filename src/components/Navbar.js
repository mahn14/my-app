//Navbar.js
import React from 'react'
import Scroll from 'react-scroll'
import '../css/Navbar.css';


const Navbar=() => {

    const Link = Scroll.Link

    return (
        /* rest remains same*/
        <nav className="navbar">
            <div className="links">
                <span>
                <Link className="grid-item" to="app" spy={true} smooth={true} duration={500}>LANDING</Link>
                <Link className="grid-item" to="about" spy={true} smooth={true} duration={500}>ABOUT</Link>
                <Link className="grid-item" to="projects" spy={true} smooth={true} duration={500}>PROJECTS</Link>
                <Link className="grid-item" to="#" spy={true} smooth={true} duration={500}>BLANK</Link>
                </span>
            </div>
        </nav>
    )
};
export default Navbar;





