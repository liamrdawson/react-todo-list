import React, { Component, useContext } from 'react';
import {MyContext} from '../../context/ContextProvider';

export const AddToDo = () => {

    const context = useContext(MyContext);
   
    return (
        <MyContext.Consumer>
            {context => (
                <form style={{ display:"flex" }} onSubmit={context.onSubmit}>
                    <input  type="text" 
                            name="title" 
                            placeholder="Add to do ..." 
                            className="add-todo"
                            value={context.title}
                            onChange={context.onChange}
                    />
                    <input type="submit" value="Submit" className="btn" style={{flex: 1}}/>
                </form>
            )}
        </MyContext.Consumer>            
    )
    
}

export default AddToDo
