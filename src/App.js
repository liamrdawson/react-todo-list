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

  render() {
    return (
      <div className="App">
        <ToDos todos={this.state.todos}/>
      </div>
    )
  }
}

export default App;
