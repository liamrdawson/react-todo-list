import React, { Component } from 'react';
import ContextProvider from '../../context/ContextProvider';

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

    buttonStyle = () => {
        return {
            border: "none",
            backgroundColor: "tomato",
            color: "white",
            borderRadius: "4px",
            height: "20px",
            width: "20px"
        }
    }

    render() {
        return (
            <ContextProvider.Consumer>
                {(context) => (
                    <div style={this.itemStyle()}>
                        <input type="checkbox" onChange={this.props.markComplete.bind(this, context.state.id)}/>
                        <h3 style={this.titleStyle()}>{context.state.title}</h3>
                        <button style={this.buttonStyle()} onClick={this.props.deleteToDo.bind(this, context.state.id)} >X</button>
                    </div>
                )}
            </ContextProvider.Consumer>
        )
    }
}

export default ToDoItem