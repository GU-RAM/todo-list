import React from 'react'
import styled from 'styled-components';

export default function inputList({ todo, todoList, deleteTodo, setTodoHandler, submit }) {

    const list = () => {
        return (
            <Ul>
                {todoList && todoList.map(({ id, listTodo }, index) => {
                    return (
                        id && listTodo && <Li key={id}><span>Text {index + 1} </span><span>{listTodo}</span>
                            <DelSpan onClick={() => deleteTodo(id)}>X</DelSpan></Li>
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
`

const DelSpan = styled.span`
    padding: 0 10px;
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
