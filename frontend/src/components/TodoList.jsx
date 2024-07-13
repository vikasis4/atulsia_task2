import React from 'react';
import UseApi from '../hooks/UseApi';
import List from './List';

const TodoList = () => {

    // Using our custom hook
    const { data, error, isLoading, mutationLoading, deleteTodo, updateToDo } = UseApi()


    // Memoizing our list to prevent unnecessary function call due multiple time page re-rendering. It will only get called when data param will update
    let content = React.useMemo(() => {
        if (data?.status) {
            return data.toDo.map((todo) => <List key={todo.id} todo={todo} deleteTodo={deleteTodo} updateToDo={updateToDo} />)
        } else { return ErrorTab }
        // eslint-disable-next-line 
    }, [data]);

    return (
        <div className="max-w-md mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Todo List {mutationLoading ? Loading : null}</h1>
            {error ? ErrorTab : isLoading ? Loading : content}
        </div>
    );
};

const Loading = <span className='text-green-600 text-lg font-bold'> &nbsp; Loading...</span>
const ErrorTab = <span className='text-red-600 text-lg font-bold'> &nbsp; Something went wrong, Reload or Try again later...</span>

export default TodoList;