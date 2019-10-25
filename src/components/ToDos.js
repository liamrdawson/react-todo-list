import React, { Component } from 'react'

import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

export default class ToDos extends Component {
    

    render() {

        console.log(this.props.todos)
        return this.props.todos.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}/>
        ));
    }
}

//  PROPTYPES
ToDos.propTypes = {
    todos: PropTypes.array.isRequired
}