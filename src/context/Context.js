import React, { createContext, useReducer, useState } from "react";
import { EditList } from "./EditList";

export const ListContext = createContext();

const Context = ({ children }) => {
  const [listReducer, dispatch] = useReducer(EditList, []);
  const [filter, setFilter] = useState("all")

  return (
    <ListContext.Provider value={{ listReducer, dispatch, filter, setFilter }}>
      {children}
    </ListContext.Provider>
  );
};

export default Context;
