import React, { createContext, useReducer } from 'react'
import { EditList } from './EditList'

export const ListContext = createContext()

const Context = ({ children }) => {
    const [listReducer, dispatch] = useReducer(EditList, []
    )

    return (
        <ListContext.Provider value={{ listReducer, dispatch }} > {children} </ListContext.Provider>
    )
}

export default Context

