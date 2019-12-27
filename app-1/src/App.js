import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };
  }

  handleChange(value) {
    this.setState({ message: value });
  }
  render() {
    return (
      <div className="App">
        <br></br>
        <input
          type="text"
          onChange={event => this.handleChange(event.target.value)}
        />

        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
