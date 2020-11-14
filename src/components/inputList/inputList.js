import React from 'react'
import styled from 'styled-components';

export default function inputList({ todo, todoList, deleteTodo, setTodoHandler, submit }) {

    const list = () => {
        return (
            <Ul>
                {todoList && todoList.map((list, index) => {
                    return (
                        list && list.id && list.listTodo && <Li key={list.id}>Text {index + 1} <span>{list.listTodo}</span>
                            <DelSpan onClick={() => deleteTodo(list.id)}>X</DelSpan></Li>
                    )
                })
                }
            </Ul>
        )
    }

    return (
        <>
            <div>
                {list()}
            </div>
            <InputContainer>
                <input type="text" placeholder="Enter Todo" value={todo} onChange={(e) => setTodoHandler(e)} />
                <button type="submit" onClick={(e) => submit(e)}>Submit</button>
            </InputContainer>
        </>
    )
}

const Ul = styled.ul`
    margin: 0;
`
const Li = styled.li`
    padding: 10px;
    border-bottom: 2px solid black;
    background-color: lightblue;
    display: flex;

    & span:first-child {
        margin-left: 20px
    }
`

const DelSpan = styled.span`
    margin-left: auto;
    cursor: pointer;
`
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
`
