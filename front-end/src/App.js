import React, { Component } from 'react';
import './App.css';
import Banner from './Banner'
import Demo from './Demo'
import Intro from './Intro'

class App extends Component {
  render() {
    return (
      <div className="content">
        <Banner />
        <Intro />
        <Demo />
      </div>
    )
  }
}

export default App;
