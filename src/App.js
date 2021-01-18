// React Dependencies
import React, { Component } from 'react';
import { Element } from 'react-scroll'
import { Helmet } from 'react-helmet'

// Component Dependencies
import Navbar from './components/Navbar.js'
import Landing from './components/Landing.js'

import About from './components/About.js'
import Projects from './components/Projects.js'
import Carousel from './components/Carousel.js'

import Django from './components/Django.js'

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
      <div className="Application">
        {/* ---------- Title Header ---------------------------- */}
        <Helmet><title>{this.TITLE}</title></Helmet>


        {/* ---------- Navigation Bar -------------------- */}
        <div className="navbar">
          <Navbar />
        </div>
        <React.Fragment>
          <Element id="app" name="app"></Element>
        </React.Fragment>
        

        <Landing />


        <div className="bottom">
          <button className="button" onClick={() => 
            {this.scrollDiv.current.scrollIntoView({ behavior: 'smooth' });}}>
            <span>
              Click to Begin
            </span>
          </button>
        </div>
      
        

        {/* ---------- Start Components --------------------*/}
        <div className="body">
          <div ref={this.scrollDiv} />

          <div className="columns">
            <div className="column-left"><Carousel /></div>
            <div className="column-right"><About /></div>
          </div>

          <Projects />
          <Django />
        </div>


      </div>
 
      
    )
  }
}
export default App 