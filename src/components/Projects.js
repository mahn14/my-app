import React, { Component } from 'react';
import { Element } from 'react-scroll'

import Navbar from './Navbar.js'
import '../css/Projects.css'

class Projects extends Component {



    render() {
        return (
            <div className="Projects">
                
                {/* ---------- Navigation Bar --------------------*/}
                <Navbar />
                <React.Fragment>
                    <Element id="projects" name="projects"></Element>
                </React.Fragment>
                

                <p>projects ...</p>

            </div>
        )
    }
}
export default Projects