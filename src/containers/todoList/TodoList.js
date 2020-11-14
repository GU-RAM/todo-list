import React, { useState, useEffect, Fragment } from 'react';
import InputList from '../../components/inputList/inputList';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

function TodoList() {
    const [todo, setTodo] = useState('');
    console.log("TodoList -> todo", todo)
    const [todoList, setTodoList] = useState([]);
    const [listId, setListId] = useState(1);
    const [numberOfTodoes, setNumberOfTodoes] = useState(0);


    useEffect(() => {
        setNumberOfTodoes(todoList.length);
    }, [todoList]);

    const setTodoHandler = (e) => {
        e.target.value && setTodo(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        todo && addListHandler({ listTodo: todo });
    }

    const addListHandler = (list) => {
        setTodoList((prevTodo) => [...prevTodo, { id: listId, ...list }]);
        setListId(listId + 1);
        clearTodoHandler();
    }

    const clearTodoHandler = (e) => {
        setTodo('');
    }

    const deleteTodo = (listToDelete) => {
        setTodoList(() => todoList.filter(item => item.id !== listToDelete));
    }

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col sm={4} offset={{ md: 4 }}>
                        <Form action="">
                            <FormHeader>You Have {numberOfTodoes} Todos</FormHeader>
                            <InputList todo={todo} todoList={todoList} deleteTodo={deleteTodo} setTodoHandler={setTodoHandler} submit={submit} />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default TodoList;

const Form = styled.form`
    
`
const FormHeader = styled.h1`
    text-align: center;
    padding: 10px;
    border-bottom: 2px solid black;
    background-color: lightblue;
    margin-bottom: 0;
`