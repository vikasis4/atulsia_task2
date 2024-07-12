import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import TodoList from './components/TodoList.jsx';
import AddTodo from './components/AddToDo.jsx';

const App = () => {
  return (
    // Wrapping our application with the redux Store
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
