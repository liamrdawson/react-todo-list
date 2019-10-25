import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ToDoItem extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.todo.title}</h3>
            </div>
        )
    }
}

//  PROPTYPES
ToDoItem.propTypes = {
    todo: PropTypes.array.isRequired
}

export default ToDoItem