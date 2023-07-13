// todoContext.tsx
import React, { createContext, useContext, useEffect, useReducer } from "react";

import todoReducer from "./todoReducer";
import { TodoState } from "./todoTypes";
import { Action } from "./actionTypes";
import useTodoLogic from "./todoLogic";

interface TodoContextProps {
  state: TodoState;
  dispatch: React.Dispatch<Action>;
}

const initialState: TodoState = {
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
