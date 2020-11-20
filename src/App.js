import React from 'react';
import TodoList from '../src/containers/todoList/TodoList';
import styled from 'styled-components';
import './App.css';

function App() {

  return (
    <React.Fragment>
      <Main>
        <TodoList />
      </Main>
    </React.Fragment>
  );
}

export default App;

const Main = styled.main`
  background-color: darkorange;
  min-height: 100vh;
`
