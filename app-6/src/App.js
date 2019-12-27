import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      input: '',
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleAddTodo() {
    this.setState({
      //allows you to add to the list without altering completely
      todoList: [...this.state.todoList, this.state.input],
      input: '',
    });
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List:</h1>

        <div>
          <input
            value={this.state.input}
            placeholder="Add new task"
            onChange={element => this.handleInputChange(element.target.value)}
          />

          <button onClick={this.handleAddTodo}>New</button>
        </div>

        <br></br>

        {this.state.todoList.map((element, index) => {
          return <Todo key={index} task={element} />;
        })}
      </div>
    );
  }
}
// render() {
//   let list = this.state.todoList.map((element, index) => {
//     return <Todo key={index} task={element} />;
//   });

//   return (
//     <div className="App">
//       <h1>My to-do list:</h1>

//       <div>
//         <input
//           value={this.state.input}
//           placeholder="Enter new task"
//           onChange={e => this.handleInputChange(e.target.value)}
//         />

//         <button onClick={this.handleAddTask}>Add</button>
//       </div>

//       <br />

//       {todoList}
//     </div>
//   );
// }
// }
export default App;
