import React, {Component} from 'react';
import './scss/App.scss';
import {MyProvider} from './context/ContextProvider';
import Header from './components/layout/Header';
import ToDos from './components/todo/ToDos';
import AddToDo from './components/todo/AddToDo';

class App extends Component {

  render() {
    return (
      <MyProvider>
        <div className="App">
            <Header />
            <div className="container">
              <AddToDo />
              <ToDos />
            </div>
        </div>
      </MyProvider>

    )
  }
}

export default App;