import React, { createContext, useReducer, useState } from "react";

import { EditList, EditTimer } from "./EditList";

export const ListContext = createContext();

const Context = ({ children }) => {
  // todolist
  const [listReducer, dispatch] = useReducer(EditList, []);
  const [filter, setFilter] = useState("all")

  // timer
  const TimerInitial = {
    title: "pomodoro",
    sessionValue: 25,
    BreakValue: 5,
    timeValue: 1500
  }

  const [timerRecucer, timerdispatch] = useReducer(EditTimer, TimerInitial)

  return (
    <ListContext.Provider value={{ listReducer, dispatch, filter, setFilter, timerRecucer, timerdispatch }}>
      {children}
    </ListContext.Provider>
  );
};

export default Context;
