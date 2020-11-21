import React, { useState } from "react";
import styled from "styled-components";
import List from "./list";

function InputList({ todoList, deleteTodo, submit }) {
  const [todo, setTodo] = useState("");

  const setTodoHandler = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <div>
        <List todoList={todoList} deleteTodo={deleteTodo} />
      </div>
      <InputContainer>
        <input
          type="text"
          placeholder="Enter Todo"
          value={todo}
          onChange={(e) => setTodoHandler(e)}
        />
        <button type="submit" onClick={(e) => submit(e, todo, setTodo)}>
          Submit
        </button>
      </InputContainer>
    </>
  );
}

export default InputList;

const InputContainer = styled.div`
  padding: 20px;
  background-color: lightgreen;
  display: flex;
  justify-content: center;

  & input {
    padding: 10px;
    border-radius: 5px;
    margin-right: 10px;
  }

  & button {
    border-radius: 5px;
    cursor: pointer;
  }
`;
