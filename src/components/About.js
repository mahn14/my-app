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


                    {/* PORTRAIT ---------- */}
                    <div className="column-left">
                        <div className="portrait-placeholder">
                            Placeholder Portrait
                        </div>
                    </div>

                    {/* CONTENT ---------- */}
                    <div className="column-right">

                        <h1>About</h1>
                            <p><b><i>If "a scientist dreams about doing things, and an engineer does them", what is stopping us from becoming both?</i></b></p>
                            <p>My name is Michael Ahn and I am a data scientist aspiring to be an ML/software engineer. 
                                I am constantly working through independent courses and projects to develop my technical skills.</p>
                            <p>My path towards specialist-level proficiency begins with building a solid foundation - from predictive models and machine learning implentations to web app microservices.</p>


                        <br></br>
                        <h1>Career</h1>
                            <p><b>Research Analyst - National Geographic</b> <i>(Aug 2018 - Dec 2019)</i><br></br>
                               <b>Data & Analytics Modeler - KPMG</b> <i>(Jan 2020 - Present)</i></p>
                            <p>My professional experiences have revolved around building predictive models, automating reporting templates, and cleaning data pipelines.<br></br>
                               I have also worked on Operations Research as an analyst and Service Now implementations as a track lead.
                            </p>


                        <br></br>
                        <h1>Personal Projects & Skills</h1>
                            <p><b>Data Science</b><br></br>     
                                <b>&nbsp;&nbsp;&nbsp;&nbsp;Python</b>: PyTorch, Scikit-Learn, Pandas, NumPy, Matplotlib<br></br>
                                <b>&nbsp;&nbsp;&nbsp;&nbsp;R</b>: dplyr, ggplot2<br></br>
                                <b>&nbsp;&nbsp;&nbsp;&nbsp;Data</b>: AccessSQL, Excel
                            </p>
                            <p><b>Web App</b><br></br>
                                <b>&nbsp;&nbsp;&nbsp;&nbsp;Python</b>: Flask, Django<br></br>
                                <b>&nbsp;&nbsp;&nbsp;&nbsp;JavaScript</b>: React                              
                            </p>  


                        <br></br>
                        <h1>Contact</h1>
                            <p><b>email</b>: ahn.michael14@gmail.com<br></br>
                               <b>phone</b>: (703)-615-6886<br></br>
                            </p>
                            <p>Please feel free to reach out at any time.</p>      
                      

                        <br></br>
                    </div>

                </div>

            </div>
        )
    }
}
export default About