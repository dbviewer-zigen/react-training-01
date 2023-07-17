import React, { useState } from "react";
import { Todo } from "../../types";
import { useLogic } from "./logic";
import { v4 as uuidv4 } from "uuid";

export const TodoForm = () => {
  const { error, addTodo } = useLogic();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: Todo = {
      id: uuidv4(),
      name: name,
      description: description,
    };
    addTodo(newTodo);
    setName("");
    setDescription("");
  };

  return (
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
      <button type="submit">Add Todo</button>
      {error && <p>Error: {error}</p>}
    </form>
  );
};
