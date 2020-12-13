import React, { Component } from 'react';
import './App.css';
import Banner from './Banner'
import Demo from './Demo'
import Intro from './Intro'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="content">
        <Banner />
        <Intro />
        <Demo />
        <Footer />
      </div>
    )
  }
}

export default App;
