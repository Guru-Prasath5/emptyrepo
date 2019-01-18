import React, { Component } from 'react';
import Home from './Home';
import AboutMe from './AboutMe';
import Skills from './Skills';
import ContactMe from './ContactMe';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
         <AboutMe/>
        <Skills/>
        <ContactMe/>
        <Footer/>
      </div>
    );
  }
}

export default App;
