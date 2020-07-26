import React from 'react'
import './style.css'

function ToDoItem(props){
    return(
        <div className="todo-item">
                <input type="checkbox" defaultChecked={props.ToDoItemObj.completed} onChange={() => props.handleClick(props.key)}/>
                <p className="p1"> {props.ToDoItemObj.text}</p>
            </div> 
    )
}

export default ToDoItem