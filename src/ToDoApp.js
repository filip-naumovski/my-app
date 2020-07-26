import React from 'react'
import './style.css'
import ToDoItem from './ToDoItem.js'
import todosData from './todosData.js'

class ToDoApp extends React.Component{
    constructor(){
        super()
        this.state = {
            todos : todosData
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(id){
        this.setState(prevState =>{
            let i
            let tempState = {
                todos: todosData
            }
            for(i=0; i<prevState.todos.length; i++){
                tempState.todos[i]=prevState.todos[i];
                if(prevState.todos[i].id === id){
                    tempState.todos[i].completed = !prevState.todos[i].completed;
                }
            }
            return tempState
        })
    }
    render(){
        const itemComponents = this.state.todos.map(item =>{
            return <ToDoItem ToDoItemObj = {item} key = {item.id} handleClick={this.handleClick}/>
        })
        return(
        <div className="divbg">
            <h1 className="header">To-do list</h1>
            {itemComponents}
        </div>
        )   
    }
}
export default ToDoApp;