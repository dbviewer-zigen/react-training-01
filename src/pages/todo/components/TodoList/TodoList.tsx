// TodoList.tsx
import React from "react";
import useTodoLogic from "../../todoLogic";

const TodoList: React.FC = () => {
  const { todos, error, deleteTodo } = useTodoLogic();
  const handleDelete = (todoId: string) => {
    deleteTodo(todoId);
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.name}</span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default TodoList;
