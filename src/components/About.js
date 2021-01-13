import React, { Component } from 'react';
import { Element } from 'react-scroll'

import Navbar from './Navbar.js'
import '../css/About.css'

class About extends Component {



    render() {
        return (
            <div>
                
                {/* ---------- Navigation Bar --------------------*/}
                <React.Fragment>
                    <Element id="about" name="about"></Element>
                </React.Fragment>
                <Navbar />


                {/* ---------- About Content -------------------- */}
                <div className="About"> 

                    <div className="column-left">
                        <div className="portrait-placeholder">
                            Placeholder Portrait
                        </div>
                    </div>

                    <div className="column-right">
                        <h1>About</h1>
                        <p>My name is Michael Ahn --- </p>

                        <br></br><br></br>
                        
                        <h1>Hobbies</h1>
                        <p>hobbies ----</p>

                        <br></br><br></br>

                        <h1>Career</h1>
                        <p>here is my career --- </p>

                        <br></br><br></br>

                        <h1>Looking Foward...</h1>
                        <p>blah blah ---- </p>

                        <br></br>
                    </div>

                </div>

            </div>
        )
    }
}
export default About