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
        isComplete: true
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

  markComplete = () => {
    console.log('What are you looking at');
  }

  render() {
    return (
      <div className="App">
        <ToDos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    )
  }
}

export default App;
