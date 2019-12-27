import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChangeUsername(name) {
    this.setState({ username: name });
  }
  handleChangePassword(pass) {
    // preventDefault();
    this.setState({ password: pass });
  }
  handleLogin(e) {
    // e.preventDefault();

    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }
  render() {
    return (
      <div>
        <br></br>
        <input
          type="text"
          onChange={event => this.handleChangeUsername(event.target.value)}
        />

        <input
          type="text"
          onChange={event => this.handleChangePassword(event.target.value)}
        />

        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
