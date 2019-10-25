import React, { Component } from 'react'

import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

export default class ToDos extends Component {
    render() {

        console.log(this.props.todos)
        return this.props.todos.map((todo) => (
            <ToDoItem key={todo.id} todo={todo}/>
        ));
    }
}

//  PROPTYPES
ToDos.propTypes = {
    ToDos: PropTypes.array.isRequired
}