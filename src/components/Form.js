import React, { useContext, useState } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { IoIosTimer } from "react-icons/io";
import { ListContext } from "../context/Context";

export const Form = () => {
  const [ThisTask, setThisTask] = useState({
    task: '',
    count: 1
  });
  const { dispatch, setFilter } = useContext(ListContext);

  // set task name
  const handelTask = (e) => {
    setThisTask(prev => ({
      ...prev,
      task: e.target.value
    }));
  };
  //set number of pomodoros
  const countHandler = (e) => {
    if (e.target.value < 1) return
    setThisTask(prev => ({
      ...prev,
      count: e.target.value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_ITEM",
      payload: {
        task: ThisTask.task,
        count: ThisTask.count
      },
    });
    // reset the task after submit
    setThisTask({
      task: '',
      count: 1
    });
  };
  // set filter to list 
  const filterHandler = (e) => {
    setFilter(e.target.value)
  }

  return (
    <form>
      <div className="form-container">
        <input
          type="text"
          value={ThisTask.task}
          onChange={handelTask}
          className="todo-input"
        />
        <div className="timer-btn">
          <IoIosTimer />
        </div>
        <input type="number" value={ThisTask.count} className="todo-input-number" onChange={countHandler} />
        <button className="todo-button" onClick={submitHandler} type="submit">
          <AiOutlinePlusSquare fontSize="20px" />
        </button>
      </div>
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
