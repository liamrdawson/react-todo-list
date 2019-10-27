import React, { Component, createContext } from 'react';
import axios from 'axios';

export const MyContext = createContext();

export class MyProvider extends Component {

    state = {
        todos: [ ],
        name: "Liam",
        title: ''
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => this.setState({
                todos: res.data
        }));
    }

      //  MARK TODO AS COMPLETE
    markComplete = (id) => {
        console.log(`Hi, my name is ${id}`);
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id ) {todo.completed = !todo.completed}
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

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.addToDo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <MyContext.Provider value={{
                name: this.state.name,
                todos: this.state.todos,
                onChange: this.onChange,
                onSubmit: this.onSubmit,
                addToDo: this.addToDo,
                markComplete: this.markComplete,
                deleteToDo: this.deleteToDo,
                title: this.state.title
                }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}