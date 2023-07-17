import React from "react";
import { TodoProvider } from "./context";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export const TodoPage = () => {
  return (
    <TodoProvider>
      <TodoForm />
      <hr />
      <TodoList />
    </TodoProvider>
  );
};
