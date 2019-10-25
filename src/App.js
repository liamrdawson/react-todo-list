import React, {Component} from 'react';
import './App.css';

import ToDos from './components/ToDos'

class App extends Component {

  state = {
    todos: [
      {
        id: 1, 
        title: 'Hoover the stairs',
        isComplete: false
      },
      {
        id: 2, 
        title: 'Complete coding homework',
        isComplete: false
      },
      {
        id: 3, 
        title: 'Fetch groceries',
        isComplete: false
      },
      {
        id: 4, 
        title: 'Take out trash',
        isComplete: false
      },
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id ) {todo.isComplete = !todo.isComplete}
        return todo
      })
    });
  }

  deleteToDo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => id !== todo.id)
    });
  }

  render() {
    return (
      <div className="App">
        <ToDos todos={this.state.todos} markComplete={this.markComplete} deleteToDo={this.deleteToDo}/>
      </div>
    )
  }
}

export default App;
