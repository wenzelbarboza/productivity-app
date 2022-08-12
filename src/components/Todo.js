import React, { useContext } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { Link } from "react-router-dom";

const Todo = ({ task, id, complete, dispatch }) => {


    const handleComplete = () => {
        dispatch({
            type: "COMPLETE",
            id: id
        })
    }

    const handleDelete = () => {
        console.log("delete")
        dispatch({
            type: "DELETE",
            id: id
        })
    }

    return (
        <div className="todo">
            <li className={`todo-item ${complete ? "completed" : ""}`}>{task}</li>
            <button onClick={handleComplete} className="complete-btn">
                <BsFillCheckSquareFill />
            </button>
            <button onClick={handleDelete} className="trash-btn">
                <FaTrash />
            </button>
            <Link to='/Pomodoro' state={{ id: id }}>
                <button className="trash-btn timer-trash-btn">
                    <IoIosTimer className="timer-btn-todo" />
                </button>
            </Link>

        </div>
    );
};

export default Todo;
