import React, { Component } from 'react';

import './App.css';
import Frame from '../frame/frame';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1 className="App-title">React Calculator</h1>
        </header>
        
        <Frame/>
      </div>
    );
  }
}

export default App;
