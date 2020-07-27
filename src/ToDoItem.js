import React from 'react'
import './style.css'

function ToDoItem(props){
    const completedStyle = {
        textDecoration: "line-through",
        color: "gray",
        fontStyle: "italic",
        fontSize: "25px"
    }
    return(
        <div className="todo-item">
            <input type="checkbox" defaultChecked={props.ToDoItemObj.status} onChange={() => props.handleClick(props.ToDoItemObj.id)}/>
            <p className="p1" style={props.ToDoItemObj.status ? completedStyle : null}>{props.ToDoItemObj.chore}</p>
        </div> 
    )
}

export default ToDoItem 