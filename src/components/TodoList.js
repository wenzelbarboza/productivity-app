import React, { useContext, useState, useEffect } from "react";
import { ListContext } from "../context/Context";
import Todo from "./Todo";

const TodoList = () => {
    const { listReducer, dispatch, filter } = useContext(ListContext);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        renderFilter();
    }, [filter, listReducer])


    const renderFilter = () => {
        switch (filter) {
            case "completed":
                setFilteredList(listReducer.filter(item => item.complete == true))
                break
            case "uncompleted":
                setFilteredList(listReducer.filter(item => item.complete === false))
                break
            default:
                setFilteredList(listReducer)

        }
    }

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredList.map((item) => (
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
