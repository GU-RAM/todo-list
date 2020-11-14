import React, { useState, useEffect, Fragment } from 'react';
import InputList from '../../components/inputList/inputList';

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
            <main>
                <form action="">
                    <h1>You Have {numberOfTodoes} Todos</h1>
                    <InputList todo={todo} todoList={todoList} deleteTodo={deleteTodo} setTodoHandler={setTodoHandler} />
                    <button type="submit" onClick={(e) => submit(e)}>Submit</button>
                </form>
            </main>
        </React.Fragment>
    );
}

export default TodoList;