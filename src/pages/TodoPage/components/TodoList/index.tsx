// TodoList.tsx
import React from "react";
import { useLogic } from "./logic";

// TODOリストを表示するコンポーネント
export const TodoList = () => {
  // const {} = useInit();
  const {
    name,
    description,
    todos,
    error,
    setName,
    setDescription,
    handleEdit,
    handleDelete,
    handleSubmit,
  } = useLogic();

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>
            {todo.name} {todo.description} {todo.id}
          </span>
          <button onClick={() => handleEdit(todo)}>Edit</button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
      {error && <p>Error: {error}</p>}

      {
        <p>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button type="submit">Edit Todo</button>
            {error && <p>Error: {error}</p>}
          </form>
        </p>
      }
    </div>
  );
};
