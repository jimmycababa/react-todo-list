import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')

    const handleChange = e => {
        // target value is allowing user to type stuff into the form
        setInput(e.target.value)
    }

    // making sure the page doesn't refresh
    const handleSubmit = e => {
        e.preventDefault()

        // adding props here. making sure to not get the same id back because no auth. each todo will be assigned an id number and the chances of each todo being the same number between 1 and 10000 is pretty slim
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')
    }
     return (
        <div>
            {/* adding onsubmit function to the form */}
           <form className="todo-form" onSubmit={handleSubmit}>
           {/* creating basic input for the form */}
           <input type="text" 
           placeholder="Add a Todo" 
           value={input} name='text'
           className='todo-input'
           onChange={handleChange}
           />
           
            <button className="todo-button">Add Todo</button>
           </form>
        </div>
    )
}

export default TodoForm

