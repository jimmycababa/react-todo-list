import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'


function Todo({ todos, completeTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

// gonna map through the todos, passing in todo as the parameter
    return todos.map((todo, index) => (
        
            // creating a function that is going to check if the todo is completed. setting a ternary operator that will toggle the color of the todo telling us if it is complete or not
            <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
{/* passing in the todo text */}
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine />
                <TiEdit />
            </div>
            </div>
    ))
    
}

export default Todo
