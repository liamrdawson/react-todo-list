import React, { Component } from 'react';
import {MyContext} from '../../context/ContextProvider';

export class ToDoItem extends Component {

    itemStyle = () => {
        return {
            opacity: "0.8",
            borderRadius: "8px",
            margin: "12px",
            padding: "6px",
            display: "flex",
            flexDirection: "row",
            textDecoration: this.props.todo.completed ? "line-through" : "none",
            backgroundColor: this.props.todo.completed ? "dodgerblue" : "tomato"
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
            <MyContext.Consumer>
                {context => (
                    <React.Fragment>
                        <div style={this.itemStyle()}>
                            <input type="checkbox" onChange={context.markComplete.bind(this, this.props.todo.id)}/>
                            <h3 style={this.titleStyle()}>{this.props.todo.title}</h3>
                            <button style={this.buttonStyle()} onClick={context.deleteToDo.bind(this, this.props.todo.id)} >X</button>
                        </div>
                    </React.Fragment>
                )}
            </MyContext.Consumer>
        )
    }
}

export default ToDoItem
