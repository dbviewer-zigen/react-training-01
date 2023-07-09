// TodoList.tsx
import React from "react";
import { useTodoContext } from "../store/todoContext";
import { deleteTodo } from "../actions/todoActions";

const TodoList: React.FC = () => {
  const { state, dispatch } = useTodoContext();

  const handleDelete = (todoId: string) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <div>
      {state.todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.name}</span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
      {state.error && <p>Error: {state.error}</p>}
    </div>
  );
};

export default TodoList;
