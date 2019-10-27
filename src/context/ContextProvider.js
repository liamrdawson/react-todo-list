import React, { Component } from 'react';
import axios from 'axios';

export const MyContext = React.createContext();

export class MyProvider extends Component {

    state = {
        todos: [
            {
                completed: false,
                id: 1,
                title: "Complete homework",
                userId: 1
            },
            {
                completed: false,
                id: 2,
                title: "Take out trash",
                userId: 2
            },
            {
                completed: false,
                id: 3,
                title: "Complete coding challenge",
                userId: 3
            }
        ],
        name: "Liam"
    }

    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //         .then(res => this.setState({
    //             todos: res.data
    //     }));
    // }

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

    //  ADD TODO TO LIST 
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
            <MyContext.Provider value={{
                name: this.state.name,
                todos: this.state.todos,
                addToDo: this.onSubmit,
                markComplete: this.markComplete,
                deleteToDo: this.deleteToDo
                }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}