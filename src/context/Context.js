import React, { createContext, useReducer, useState } from "react";
import { faker } from "@faker-js/faker";
import { EditList, EditTimer } from "./EditList";

export const ListContext = createContext();

const Context = ({ children }) => {
  // todolist
  const [listReducer, dispatch] = useReducer(EditList, [{
    task: "pomodoro",
    id: faker.datatype.uuid(),
    justTimer: true,
    complete: false,
    timerTitle: "pomodoro",
    timerNumOfPomodoro: 1,
    timerStart: false,
    timerSessionValue: 25,
    timerBreakValue: 5,
    timerTimerValue: 1500

  }]);
  const [filter, setFilter] = useState("all")

  // timer
  const TimerInitial = {
    title: "pomodoro",
    start: false,
    sessionValue: 25,
    breakValue: 5,
    timerValue: 1500
  }

  const [timerReducer, timerDispatch] = useReducer(EditTimer, TimerInitial)

  return (
    <ListContext.Provider value={{ listReducer, dispatch, filter, setFilter, timerReducer, timerDispatch }}>
      {children}
    </ListContext.Provider>
  );
};

export default Context;
