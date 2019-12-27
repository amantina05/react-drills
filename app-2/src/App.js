import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: ['bread', 'cheese', 'lettuce', 'tomato'],
    };
  }

  handleChange(value) {
    this.setState({ data: value });
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.data.map(element => {
            return <h1>{element}</h1>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
