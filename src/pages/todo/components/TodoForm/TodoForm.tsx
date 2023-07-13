// TodoForm.tsx
import React, { useState } from "react";
import { useTodoContext } from "../../todoContext";
import { Todo } from "../../todoTypes";
import useTodoLogic from "../../todoLogic";

const TodoForm: React.FC = () => {
  const { todos, error, addTodo } = useTodoLogic();

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

    // dispatch(addTodo(newTodo)); // ここでdispathはしない(logic経由でdispathする)
    addTodo(newTodo);

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
