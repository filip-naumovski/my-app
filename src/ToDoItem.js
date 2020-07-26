import React from 'react'
import './style.css'

function ToDoItem(props){
    return(
        <div className="todo-item">
            <input type="checkbox" defaultChecked={props.ToDoItemObj.completed} onChange={() => props.handleClick(props.ToDoItemObj.id)}/>
            <p className="p1">{props.handleText(props.ToDoItemObj.id)}</p>
        </div> 
    )
}

export default ToDoItem