import React, { useState } from "react";
import InputList from "../../components/inputList/inputList";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [listId, setListId] = useState(1);

  const submit = (e, todo, setTodo) => {
    e.preventDefault();
    todo && addListHandler({ listTodo: todo }, setTodo);
  };

  const addListHandler = (list, setTodo) => {
    // Merge with submit
    setTodoList((prevTodo) => [...prevTodo, { id: listId, ...list }]);
    setListId(listId + 1);
    setTodo("");
  };

  const deleteTodo = (listToDelete) => {
    setTodoList(() => todoList.filter((item) => item.id !== listToDelete));
  };

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={12} md={8} lg={4} offset={{ lg: 4 }}>
            <Form action="">
              <FormHeader>You Have {todoList.length} Todos</FormHeader>
              <InputList
                todoList={todoList}
                deleteTodo={deleteTodo}
                submit={submit}
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default TodoList;

const Form = styled.form``;
const FormHeader = styled.h1`
  text-align: center;
  padding: 10px;
  border-bottom: 2px solid black;
  background-color: lightblue;
  margin-bottom: 0;
`;
