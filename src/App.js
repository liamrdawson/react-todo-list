import React, {Component} from 'react';
import './App.css';
import Header from './components/layout/Header';
import ToDos from './components/todo/ToDos';
import AddToDo from './components/todo/AddToDo';
import axios from 'axios';

class App extends Component {

  state = {
    todos: [ ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({
        todos: res.data
      }));
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({todos: [...this.state.todos.filter(todo => id !== todo.id)]}));
  }

  addToDo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos',
    {
      title, 
      isComplete: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data]}))
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
