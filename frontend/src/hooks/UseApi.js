import { useGetTodosQuery, useUpdateToDoMutation, useDeleteToDoMutation, useAddTodoMutation } from '../store/api';

// Custom Hooks are very Important to write clean code and here we are exporting all our API functions and data from one hook

const UseApi = () => {
    const { data, error, isLoading } = useGetTodosQuery();
    const [addTodo] = useAddTodoMutation();
    const [deleteTodo] = useDeleteToDoMutation()
    const [updateToDo] = useUpdateToDoMutation();

    return {
        data,
        error,
        isLoading,
        addTodo,
        deleteTodo,
        updateToDo
    }
}

export default UseApi