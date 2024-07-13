import { useGetTodosQuery, useUpdateToDoMutation, useDeleteToDoMutation, useAddTodoMutation } from '../store/api';

// Custom Hooks are very Important to write clean code and here we are exporting all our API functions and data from one hook

const UseApi = () => {

    var mutationLoading = false, error;

    const { data, isError, isLoading } = useGetTodosQuery();
    const [addTodo, add] = useAddTodoMutation();
    const [deleteTodo, del] = useDeleteToDoMutation()
    const [updateToDo, upd] = useUpdateToDoMutation();

    if (isError || add.isError || del.isError || upd.isError) { error = true }
    if (add.isLoading || del.isLoading || upd.isLoading) { mutationLoading = true }

    return {
        mutationLoading,
        data,
        error,
        isLoading,
        addTodo,
        deleteTodo,
        updateToDo
    }
}

export default UseApi