// todoContext.tsx
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { fetchTodos } from "../actions/todoActions";
import todoReducer from "../reducers/todoReducer";
import { Todo } from "../types/todoTypes";

interface TodoState {
  todos: Todo[];
  error: string | null;
}

interface TodoContextProps {
  state: TodoState;
  dispatch: React.Dispatch<any>;
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
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    // dispatch(fetchTodos());
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
