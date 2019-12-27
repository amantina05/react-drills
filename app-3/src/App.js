import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      newString: '',
      data: ['rice', 'beans', 'green beans', 'salad', 'water'],
    };
  }

  handleChange(filter) {
    this.setState({ newString: filter });
  }

  render() {
    let display = this.state.data
      .filter((element, index) => {
        return element.includes(this.state.newString);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

    return (
      <div className="App">
        <br></br>
        <input
          onChange={event => this.handleChange(event.target.value)}
          type="text"
        />
        {display}
      </div>
    );
  }
}

export default App;
