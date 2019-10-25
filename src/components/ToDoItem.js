import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ToDoItem extends Component {

    itemStyle = () => {
        return {
            opacity: "0.8",
            borderRadius: "8px",
            margin: "12px",
            padding: "6px",
            display: "flex",
            flexDirection: "row",
            textDecoration: this.props.todo.isComplete ? "line-through" : "none",
            backgroundColor: this.props.todo.isComplete ? "#f3f3f3"     : "dodgerblue"
        }
    }

    titleStyle = () => {
        return {
            margin: "0 auto",
            textAlign: "center"
        }
    }

    render() {
        return (
            <div style={this.itemStyle()}>
                <input type="checkbox"/>
                <h3 style={this.titleStyle()}>{this.props.todo.title}</h3>
            </div>
        )
    }
}

//  PROPTYPES
ToDoItem.propTypes = {
    todo: PropTypes.array.isRequired
}

export default ToDoItem