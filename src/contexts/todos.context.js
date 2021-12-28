import React, { createContext, useReducer } from "react";
import reducer from "../reducers/todo.reducer";

export const TodosContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = (props) => {
  const [todos, dispatch] =  useReducer(reducer, []);

   return(
       <TodosContext.Provider value={todos}>
           <DispatchContext.Provider value={dispatch}>
                {props.children}
           </DispatchContext.Provider>
       </TodosContext.Provider>
   )
}

