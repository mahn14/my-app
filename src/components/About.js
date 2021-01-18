// React dependencies
import React, { Component } from 'react';
import { Element } from 'react-scroll'

// project
import '../css/About.css'
import img_natgeo from '../images/natgeo.png'
import img_kpmg from '../images/kpmg.png'
import img_portrait from '../images/portrait.png'

import Carousel from './Carousel.js'


class About extends Component {

    render() {
        return (
            <div>
                
                {/* ---------- Navigation Bar --------------------*/}
                <React.Fragment>
                    <Element id="about" name="about"></Element>
                </React.Fragment>



                {/* ---------- About Content -------------------- */}
                <div className="About"> 
                    <div className="emptyNavbar"></div>
                    

                    {/* CONTENT ---------- */}
                    
                    <div className="text">
                        <h1>About</h1>
                            <p><b><i>If "a scientist dreams about doing things, and an engineer does them", what is stopping us from becoming both?</i></b></p>
                            <p>My name is Michael Ahn and I am a data scientist aspiring to be an ML/software engineer. 
                                I am constantly working through independent courses and projects to develop my technical skills.</p>
                            <p>My path towards specialist-level proficiency begins with building a solid foundation - 
                                from predictive models and machine learning implementations to web app microservices.</p>


                        <h1>Background</h1>
                            <p><b>B.S. Mathematics</b>, Virginia Tech</p>
                            <p><b>Research Analyst - National Geographic</b> <i>(Aug 2018 - Dec 2019)</i><br></br>
                            <b>Data & Analytics Modeler - KPMG</b> <i>(Jan 2020 - Present)</i></p>
                            <p>My personal projects involve building reinforcement learning Tic-Tac-Toe agents, 
                                stacked regressions for House Price predictions, and microservices (Django/ Flask) to put on my portfolio site (React)!
                            </p>


                    
                        <h1>Skills</h1>
                            <p><b>Data Science</b><br></br>     
                                <b>&nbsp;&nbsp;&nbsp;&nbsp;Python</b>: PyTorch, Scikit-Learn, Pandas, NumPy, Matplotlib<br></br>
                                <b>&nbsp;&nbsp;&nbsp;&nbsp;R</b>: dplyr, ggplot2<br></br>
                                <b>&nbsp;&nbsp;&nbsp;&nbsp;Data</b>: SQL, Excel
                            </p>
                            <p><b>Web App</b><br></br>
                                <b>&nbsp;&nbsp;&nbsp;&nbsp;Python</b>: Flask, Django<br></br>
                                <b>&nbsp;&nbsp;&nbsp;&nbsp;JavaScript</b>: React                              
                            </p>  


                    
                        <h1>Contact</h1>
                            <p>
                                <b>email</b>: <a href="mailto:ahn.michael14@gmail.com">ahn.michael14@gmail.com</a><br></br>
                                <b>phone</b>: (703)-615-6886<br></br>
                                <b>LinkedIn</b>: <a href="https://www.linkedin.com/in/michael-ahn-396465157/"
                                                    target="_blank">Michael Ahn</a><br></br>
                                <b>GitHub</b>: <a href="https://github.com/mahn14"
                                                  target="_blank">mahn14</a>

                            </p>
                    </div>
                    



                </div>

            </div>
        )
    }
}
export default About