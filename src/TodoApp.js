import React from 'react'
import { Form } from './components/Form';
import TodoList from './components/TodoList';
import { Link } from 'react-router-dom'

const TodoApp = () => {
    return (
        <div className="container">
            <div className="App">
                <header>
                    <h1>topic</h1>
                </header>
                <Form />
                <TodoList />
                <Link to='/pomodoro'>Pomodoro</Link>
            </div>
        </div>

    )
}

export default TodoApp