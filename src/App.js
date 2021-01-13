// React Dependencies
import React, { Component } from 'react';
import { Element } from 'react-scroll'
import { Helmet } from 'react-helmet'

// Component Dependencies
import Navbar from './components/Navbar.js'
import About from './components/About.js'
import Projects from './components/Projects.js'

// CSS
import './App.css'


class App extends Component {

  constructor(props) {
    super(props)

    // header title
    this.TITLE = "Michael Ahn - Portfolio"

    // scroll
    this.scrollDiv = React.createRef()
  }

  render() {
    return (
      <div>
        {/* ---------- Title Header ---------------------------- */}
        <Helmet><title>{this.TITLE}</title></Helmet>


        {/* ---------- Navigation Bar -------------------- */}
        <Navbar />
        <React.Fragment>
          <Element id="app" name="app"></Element>
        </React.Fragment>


        {/* ---------- LANDING PAGE -------------------- */}
        <div className="landing">
          <div className="emptyNavbar"></div>

          <div className="top"><h1>Michael Ahn's</h1></div>
          <div className="middle"><h2>Project and Portfolio Demonstration</h2></div>
          <div className="bottom">
            <button className="button" onClick={() => {this.scrollDiv.current.scrollIntoView({ behavior: 'smooth' });}}>
              <span>
                Click to Begin
              </span>
            </button>
          </div>
        </div>
        

        {/* ---------- Start Components --------------------*/}
        <div className="body">
          <div ref={this.scrollDiv} />
          <About />
          <Projects />
        </div>


      </div>
 
      
    )
  }
}
export default App 