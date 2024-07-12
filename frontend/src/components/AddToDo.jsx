import React, { useState } from 'react';
import UseApi from '../hooks/UseApi';


const AddTodo = () => {

    const [text, setText] = useState('');
    const { addTodo } = UseApi();

    // This function handle the create note event and send API call via our custom hook
    const handleSubmit = async (e) => {
        // this line is used to prevent the refresh of page
        e.preventDefault();
        addTodo({ text })
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            <div className="flex items-center border-b-2 border-teal-500 py-2">
                <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Add a new todo"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    );
};

export default AddTodo;
