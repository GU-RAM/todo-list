import React, { useState, useEffect, Fragment } from 'react';
import InputList from '../../components/inputList/inputList';
import './App.css';

function TodoList() {


    return (
        <React.Fragment>
            <main>
                <form action="">
                    <h1>You Have Todos</h1>
                    <InputList />
                    <input type="text" />
                    <button type="submit" onClick={(e) => submit(e)}>Submit</button>
                </form>
            </main>
        </React.Fragment>
    );
}

export default TodoList;