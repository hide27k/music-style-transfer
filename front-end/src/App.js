import React, { Component } from 'react';
import './App.css';
import Approach from './Approach'
import Banner from './Banner'
import Code from './Code'
import Demo from './Demo'
import Intro from './Intro'
import People from './People'
import Video from './Video'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="content">
        <Banner />
        <Intro />
        <Demo />
        <Approach />
        <Video />
        <Code />
        <People />
        <Footer />
      </div>
    )
  }
}

export default App;
