import React, { useContext, useState, useEffect } from 'react'
import { Form } from './components/Form';
import TodoList from './components/TodoList';
import { Link } from 'react-router-dom'
import { ListContext } from './context/Context';
import { IoIosTimer } from "react-icons/io";


const TodoApp = () => {

    const { listReducer } = useContext(ListContext)


    const defaultPomodoro = listReducer.filter(item => item.justTimer)
    console.log("TodoApp=", defaultPomodoro[0])


    return (
        <div className="container">
            <div className="App">
                <header>
                    <h1>topic</h1>
                </header>
                <Form />
                <TodoList />

                <Link to='/pomodoro' state={{ id: defaultPomodoro[0].id }} >
                    <IoIosTimer className='timer-bottom' />
                </Link>
            </div>
        </div>

    )
}

export default TodoApp