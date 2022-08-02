import React, { useContext, useState, useEffect } from "react";
import { ListContext } from "../context/Context";
import Todo from "./Todo";

const TodoList = () => {
    const { listReducer, dispatch, filter } = useContext(ListContext);
    let filteredList = listReducer.filter(item => item.justTimer === false)


    const renderFilter = () => {

        switch (filter) {
            case "completed":
                filteredList = filteredList.filter(item => item.complete == true)
                break
            case "uncompleted":
                filteredList = filteredList.filter(item => item.complete === false)
                break
            default:
                filteredList = filteredList

        }
        return filteredList
    }

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {renderFilter().map((item) => (
                    <Todo
                        key={item.id}
                        id={item.id}
                        task={item.task}
                        complete={item.complete}
                        dispatch={dispatch}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
