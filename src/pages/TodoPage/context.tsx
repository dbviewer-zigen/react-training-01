// todoContext.tsx
import React, { createContext, useContext, useEffect, useReducer } from "react";

import todoReducer from "./reducer";
import { TodoState } from "./types";
import { Action } from "./actionTypes";

interface TodoContextProps {
  state: TodoState;
  dispatch: React.Dispatch<Action>;
}

export const initialState: TodoState = {
  todos: [],
  error: null,
};

const TodoContext = createContext<TodoContextProps>({
  state: initialState,
  dispatch: () => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: Props) => {
  // const { todos } = useTodoLogic();
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // useEffect(() => {
  //   // dispatch(fetchTodos());
  //   fetchTodos();
  // }, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
