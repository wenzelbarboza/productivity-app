import React, { useContext, useState } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { ListContext } from "../context/Context";

export const Form = () => {
  const [ThisTask, setThisTask] = useState("");
  const { dispatch, setFilter } = useContext(ListContext);

  const handelTask = (e) => {
    setThisTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_ITEM",
      payload: {
        task: ThisTask,
      },
    });
    setThisTask("");
  };

  const filterHandler = (e) => {
    setFilter(e.target.value)
  }

  return (
    <form>
      <input
        type="text"
        value={ThisTask}
        onChange={handelTask}
        className="todo-input"
      />
      <button className="todo-button" onClick={submitHandler} type="submit">
        <AiOutlinePlusSquare fontSize="20px" />
      </button>
      <div className="select">
        <select onChange={filterHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
