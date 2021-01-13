import React, { Component } from 'react'
import Scroll from 'react-scroll'

import '../css/Navbar.css'

const Link = Scroll.Link

class Navbar extends Component {

    constructor(props) {
        super(props)

        
    }

    render() {
        return (
            <nav className="navbar">
                <div className="links">
                    <Link className="grid-item" to="app" spy={true} smooth={true} duration={500}>LANDING</Link>
                    <Link className="grid-item" to="about" spy={true} smooth={true} duration={500}>ABOUT</Link>
                    <Link className="grid-item" to="projects" spy={true} smooth={true} duration={500}>PROJECTS</Link>
                    <Link className="grid-item" to="#" spy={true} smooth={true} duration={500}>BLANK</Link>
                </div>
            </nav>
        )
    }
}

export default Navbar;