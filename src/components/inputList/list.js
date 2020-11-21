import React from "react";
import styled from "styled-components";

const List = ({ todoList, deleteTodo }) => {
  console.log("aq var");
  return (
    <Ul>
      {todoList.map(({ id, listTodo }, index) => {
        return (
          <Li key={id}>
            <span>Text {index + 1} </span>
            <span>{listTodo}</span>
            <DelSpan onClick={() => deleteTodo(id)}>X</DelSpan>
          </Li>
        );
      })}
    </Ul>
  );
};

export default React.memo(List);

const Ul = styled.ul`
  margin: 0;
`;

const Li = styled.li`
  border-bottom: 2px solid black;
  background-color: lightblue;
  display: flex;
  padding: 10px 0;

  & span {
    padding: 20px 10px;
    /* min-width: 10%; */
  }

  & span:nth-child(2) {
    max-width: calc(100% - 100px);
    overflow: auto;
    padding: 20px 0;
  }
`;

const DelSpan = styled.span`
  padding: 0 10px;
  margin-left: auto;
  cursor: pointer;
`;
