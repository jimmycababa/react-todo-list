import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todo() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

// gonna map through the todos, passing in todo as the parameter
    return todos.map((todo, index) => (
            // creating a function that is going to check if the todo is completed. setting a ternary operator that will toggle the color of the todo telling us if it is complete or not
            <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
{/* passing in the todo text */}

            </div>
    ))
    
}

export default Todo
