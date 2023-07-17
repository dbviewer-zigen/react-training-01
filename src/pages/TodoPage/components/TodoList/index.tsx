// TodoList.tsx
import React, { useState } from "react";
import { useLogic } from "./logic";
import { Todo } from "../../types";

// TODOリストを表示するコンポーネント
export const TodoList = () => {
  const { todos, error, editTodo, removeTodo } = useLogic();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleDelete = (todoId: string) => {
    console.log("handle delete btn");
    removeTodo(todoId);
  };

  // Editボタンを押下した時に、更新用フォームに値を設定する
  const handleEdit = (todo: Todo) => {
    console.log("handle edit btn :", todo);
    setId(todo.id);
    setName(todo.name);
    setDescription(todo.description!);
  };

  // 更新用のSubmitボタン押下時の処理
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updateTodo: Todo = {
      id: id,
      name: name,
      description: description,
    };
    editTodo(updateTodo);
    setName("");
    setDescription("");
  };

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
