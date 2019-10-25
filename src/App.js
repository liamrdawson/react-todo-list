import React, {Component} from 'react';
import './App.css';
import uuid from 'uuid';
import Header from './components/layout/Header';
import ToDos from './components/todo/ToDos';
import AddToDo from './components/todo/AddToDo';

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

  //  MARK TODO AS COMPLETE
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id ) {todo.isComplete = !todo.isComplete}
        return todo
      })
    });
  }

  //  DELETE TODO FROM LIST
  deleteToDo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => id !== todo.id)
    });
  }

  addToDo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <AddToDo addToDo={this.addToDo}/>
          <ToDos todos={this.state.todos} markComplete={this.markComplete} deleteToDo={this.deleteToDo}/>
        </div>
      </div>
    )
  }
}

export default App;
