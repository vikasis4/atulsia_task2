import React from 'react';
import UseApi from '../hooks/UseApi';
import List from './List';

const TodoList = () => {

    // Using our custom hook
    const { data, error, isLoading, deleteTodo, updateToDo } = UseApi()

    // Memoizing our list to prevent unnecessary function call due multiple time page re-rendering. It will only get called when data param will update
    let content = React.useMemo(() => {
        if (isLoading) {
            return <p>Loading...</p>;
        } else if (data?.status) {
            return data.toDo.map((todo) => <List key={todo.id} todo={todo} deleteTodo={deleteTodo} updateToDo={updateToDo} />)
        } else {
            return <p>{error}</p>;
        }
    }, [data]);

    return (
        <div className="max-w-md mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            {content}
        </div>
    );
};

export default TodoList;
