import React, { Component } from 'react';
import logo from '../JYLarge.png';
import '../css/App.css';

import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <Portfolio/>
        </div>
      </div>
    );
  }
}

export default App;
