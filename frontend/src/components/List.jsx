import React from 'react'

function List({ todo, deleteTodo, updateToDo }) {
    return (
        <div className="flex justify-between items-center p-4 border-b">
            <div className={`flex-grow hover:cursor-pointer ${todo.completed ? 'line-through' : ''}`} onClick={() => updateToDo({ id: todo.id, completed: !todo.completed })}>
                <input type="checkbox" readOnly checked={todo.completed} />  {todo.text}
            </div>
            <button className="ml-4 text-red-600" onClick={() => deleteTodo(todo.id)}>
                Delete
            </button>
        </div>
    )
}

export default React.memo(List)