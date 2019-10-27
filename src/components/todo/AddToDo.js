import React, { Component } from 'react';
import {MyContext} from '../../context/ContextProvider';

export class AddToDo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.addToDo(this.state.title);
        this.setState({title: ''});
        console.log(this.state.title);
    }

    render() {
        return (
            <MyContext.Consumer>
                {context => (
                    <form style={{ display:"flex" }} onSubmit={this.onSubmit}>
                        <input  type="text" 
                                name="title" 
                                placeholder="Add to do ..." 
                                className="add-todo"
                                value={this.state.title}
                                onChange={this.onChange}
                        />
                        <input type="submit" value="Submit" className="btn" style={{flex: 1}}/>
                    </form>
                )}
            </MyContext.Consumer>            

        )
    }
}

export default AddToDo
