import React from 'react'
import './style.css'
import ToDoItem from './ToDoItem.js'

class ToDoApp extends React.Component{
    constructor(){
        super()
        this.state = {
            todos : []
        }
    }
    componentDidMount(){
        fetch('http://localhost:50806/api/TodoItem',{
            mode: 'cors'
        })
            .then(response => response.json())
            .then(data => this.setState({
                todos: data
            }))
    }
    handleClick = (id) =>{
        this.setState(prevState =>{
            let i
            let tempState = {
                todos: this.state.todos
            }
            for(i=0; i<prevState.todos.length; i++){
                tempState.todos[i]=prevState.todos[i];
                if(prevState.todos[i].id === id){
                    tempState.todos[i].status = !prevState.todos[i].status;
                }
            }
            return tempState
        })
    }

    handleSubmit = () => {
        console.log("Clicked")
        console.log(JSON.stringify(this.state.todos))
        fetch('http://localhost:50806/api/TodoItem/batch',{
            mode: 'cors',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.todos)
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
            <button style={{cursor: "pointer"}} className="button" onClick={this.handleSubmit}>Submit</button>
        </div>
        )   
    }
}
export default ToDoApp;