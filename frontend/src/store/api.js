import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Using Rtk Query for both State management and Api Hanfling, For Simple projects like this, for scalable app we use slice as well.
// Rtk cache the data and do not fetch again untill there is change in params or tags calls them when mutation functions are used.

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASEURL }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/fetch',
            providesTags: ["fetch"]
        }),
        addTodo: builder.mutation({
            query: (newTodo) => ({
                url: '/create',
                method: 'POST',
                body: newTodo,
            }),
            invalidatesTags: ["fetch"]
        }),
        deleteToDo: builder.mutation({
            query: (id) => ({
                url: `/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["fetch"]
        }),
        updateToDo: builder.mutation({
            query: (newTodo) => ({
                url: '/update',
                method: 'PUT',
                body: newTodo,
            }),
            invalidatesTags: ["fetch"]
        }),
    }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteToDoMutation, useUpdateToDoMutation } = api;
export default api;
