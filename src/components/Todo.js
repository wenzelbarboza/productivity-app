import React, { useContext } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";


const Todo = ({ task, id, complete, dispatch }) => {

    console.log(complete)

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
        </div>
    );
};

export default Todo;
