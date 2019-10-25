import React, { Component } from 'react'

export default class ToDos extends Component {
    render() {

        console.log(this.props.todos)
        return this.props.todos.map((todo) => (
            <h3>{todo.title}</h3>
        ));
    }
}
