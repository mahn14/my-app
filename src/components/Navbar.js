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
            <Link to="app" spy={true} smooth={true} duration={500}>LANDING</Link>
            <Link to="about" spy={true} smooth={true} duration={500}>ABOUT</Link>
        </nav>
    )
    }
}

export default Navbar;