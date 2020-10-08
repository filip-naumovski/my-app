import React from 'react'
import './style.css'
import ToDoItem from './ToDoItem.js'

class ToDoApp extends React.Component{
    constructor(){
        super()
        this.state = {
            todos : [],
            textBoxValue : ""
        }
    }
    componentDidMount(){
        fetch('http://localhost:50806/api/TodoItem',{
            mode: 'cors',
            method: 'GET'
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
        fetch('http://localhost:50806/api/TodoItem/batch',{
            mode: 'cors',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.todos)
        })
    }

    textSubmit = () => {
        const newChore = this.state.textBoxValue
        fetch('http://localhost:50806/api/TodoItem',{
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id : 0,
                chore : newChore,
                status : false
            })
        })
    }

    textChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name] : value
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
            <hr />
            <form onSubmit={this.textSubmit}>
                <input type="text" onChange={this.textChange} value={this.state.textBoxValue} placeholder="Add new chore." name="textBoxValue"/>
                <input type="submit" value="Add" />
            </form>
        </div>
        )   
    }
}
export default ToDoApp;