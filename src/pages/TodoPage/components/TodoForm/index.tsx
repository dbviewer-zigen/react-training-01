import React from "react";
import { useLogic } from "./logic";

export const TodoForm = () => {
  const { name, description, error, setName, setDescription, handleSubmit } =
    useLogic();

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
