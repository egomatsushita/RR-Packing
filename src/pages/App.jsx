import React, { Component } from 'react';
//import './App.css';
import { test } from '../api/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "no message"
    }
    test((err, message) => {
      this.setState({message})
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          This is the test value: {this.state.message}
        </p>
      </div>
    );
  }
}

export default App;
