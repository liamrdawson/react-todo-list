import React, { Component } from 'react';
import {MyContext} from '../../context/ContextProvider';
import ToDoItem from './ToDoItem';

class ToDos extends Component {
    
    render() {

        return (

            <div>
                <MyContext.Consumer>
                    {(context) => (
                        context.todos.map(todo => (
                            <ToDoItem title={todo.title} isComplete={todo.isComplete}/>
                        ))
                    )}
                </MyContext.Consumer>
            </div>

        )
    }
};

export default ToDos;