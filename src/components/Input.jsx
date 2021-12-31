import React, { useState } from 'react'

const Input = (props) => {

    const [todoEntry, setTodoEntry] = useState("");

    const handleTodoEntry = (event) => {
        const value = event.target.value;
        setTodoEntry(value);
    };

    return (
        <div className="form">
            <input
                type="text"
                onChange={handleTodoEntry}
                placeholder="Enter a task"
                value={todoEntry}
            />

            <button onClick={() => {
                props.onAdd(todoEntry)
                console.log("Input.jsx", todoEntry)
                setTodoEntry("")
            }}>
                <span>Add</span>
            </button>
        </div>
    )
}

export default Input