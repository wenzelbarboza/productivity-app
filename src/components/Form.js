import React, { useContext, useState } from "react";
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { ListContext } from "../context/Context";


export const Form = () => {
    const [ThisTask, setThisTask] = useState("")
    const { dispatch } = useContext(ListContext)

    const handelTask = (e) => {
        setThisTask(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch({
            type: "ADD_ITEM",
            payload: {
                task: ThisTask
            }
        })
        setThisTask("")
    }

    return (
        <form>
            <input type="text" value={ThisTask} onChange={handelTask} className="todo-input" />
            <button className="todo-button" onClick={submitHandler} type="submit">
                <AiOutlinePlusSquare fontSize="20px" />
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}