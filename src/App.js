// React Dependencies
import React, { Component } from 'react';
import { Element } from 'react-scroll'

import About from './components/About.js'
import './App.css'


class App extends Component {

  constructor(props) {
    super(props)
    this.scrollDiv = React.createRef()
  }

  render() {
    return (
      <div>
        {/* ---------- Landing Page Content --------------------*/}
        <React.Fragment>
          <Element id="app" name="app"></Element>
        </React.Fragment>

        <div className="intro">
          <div className="top"><h1>Michael Ahn's</h1></div>
          <div className="middle"><h2>Project and Portfolio Demonstration</h2></div>
          <div className="bottom">
            <button onClick={() => {
              this.scrollDiv.current.scrollIntoView({ behavior: 'smooth' });
            }}>
              Begin
            </button>
          </div>
        </div>
        
        {/* ---------- Start Components --------------------*/}
        <div className="body">
          <div ref={this.scrollDiv} />
          <About />
        </div>


      </div>
 
      
    )
  }
}
export default App 