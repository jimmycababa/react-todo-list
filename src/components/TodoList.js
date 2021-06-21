import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    // adding our state and passing in an empty array
    const [todos, setTodos] = useState([])

    // how we are going to add the todos. it allows us to make sure that if noone types in a letter that it will still show up
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
       
    }

    return (
        <div>
            <h1>what is the plan for today</h1>
            <TodoForm onSubmit={addTodo} />
        </div>
    )
}

export default TodoList
