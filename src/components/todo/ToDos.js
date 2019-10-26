import React, { Component } from 'react';
import {MyContext} from '../../context/ContextProvider';

class ToDos extends Component {
    
    render() {

        return (

            <div>
                <MyContext.Consumer>
                    {(context) => (
                        <h1>Hi, my name is {context.name}</h1>
                    )}
                </MyContext.Consumer>
            </div>

            // <MyContext.Consumer>
            //     {(context) => (
            //         <React.Fragment>
            //             <h1>What</h1>
            //             <h1>{`Hello, my name is ${context.name}`}</h1>   
            //         </React.Fragment>                    
            //     )}
            // </MyContext.Consumer>
        )
    }
};

export default ToDos;