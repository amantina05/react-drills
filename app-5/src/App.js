import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={'http://http.cat/444'} />
      </div>
    );
  }
}

export default App;
