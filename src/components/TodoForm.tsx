import { useState, FormEvent } from "react";
import { Todo } from "../types/Todo";
//import { useTodosDispatch } from "./TodosContext";

export const TodoForm = ({
  handleAddFormSubmit,
}: {
  handleAddFormSubmit: (todo: Todo) => void;
}) => {
  const [value, setValue] = useState("");

  const onSubmit = (e: FormEvent) => {
    // const onSubmit = (e: any) => {
    e.preventDefault();

    const newTodo: Todo = {
      id: "",
      title: value,
      completed: false,
      userId: "test",
    };

    console.log("登録するデータ ", newTodo);

    handleAddFormSubmit(newTodo);
    setValue("");
  };
  console.log("render TodoForm");
  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        placeholder="やることを入力してくださいー"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">登録</button>
    </form>
  );
};
