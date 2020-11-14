import React, { useState, Fragment } from 'react';
import TodoList from '../src/containers/todoList/TodoList';
import './App.css';

function App() {

  return (
    <React.Fragment>
      <main>
        <TodoList />
      </main>
    </React.Fragment>
  );
}

export default App;

