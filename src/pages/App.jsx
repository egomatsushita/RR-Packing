import React, { Component } from 'react';
//import './App.css';
import { test } from '../api/api';
import { Page } from '../components/Page';

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
/*        <p>
          This is the test value: {this.state.message}
        </p>
*/
  render() {
    return (
      <div className="app-container">
        
        <Page />
      </div>
    );
  }
}

export default App;
