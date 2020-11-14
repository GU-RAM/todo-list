import React from 'react'
// import styled from 'styled-components';

export default function inputList({ todo, todoList, deleteTodo, setTodoHandler }) {

    const list = () => {
        return (
            <ul>
                {todoList && todoList.map((list, index) => {
                    return (
                        list && list.id && list.listTodo && <li key={list.id}>Text {index + 1} <span>{list.listTodo}</span> <span onClick={() => deleteTodo(list.id)}>X</span></li>
                    )
                })
                }
            </ul>
        )
    }

    return (
        <>
            <div>
                {list()}
            </div>
            <input type="text" placeholder="Enter Todo" value={todo} onChange={(e) => setTodoHandler(e)} />
        </>
    )
}
