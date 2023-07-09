// TodoForm.tsx
import React, { useState } from "react";
import { useTodoContext } from "../store/todoContext";
import { addTodo } from "../actions/todoActions";
import { Todo } from "../types/todoTypes";

const TodoForm: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { dispatch } = useTodoContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo: Todo = {
      id: "123",
      name: name,
      description: description,
    };

    dispatch(addTodo(newTodo));

    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
