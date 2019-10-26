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
            textDecoration: "none",
            backgroundColor: "dodgerblue"
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
                            <input type="checkbox" onChange={context.markComplete.bind(this, context.todos.id)}/>
                            <h3 style={this.titleStyle()}>{this.props.title}</h3>
                            <button style={this.buttonStyle()} onClick={context.deleteToDo.bind(this, context.todos.id)} >X</button>

                        </div>
                    </React.Fragment>
                )}
            </MyContext.Consumer>
        )
    }
}

export default ToDoItem