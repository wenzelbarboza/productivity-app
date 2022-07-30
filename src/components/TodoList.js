import React, { useContext } from 'react'
import { ListContext } from '../context/Context'

const TodoList = () => {

    const { listReducer, dispatch } = useContext(ListContext)

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {listReducer.map((item) => (
                    <li key={item.id}>{item.task}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList