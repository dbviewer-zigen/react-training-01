// logic.ts
import { useState } from "react";
import { useTodoContext } from "../../context";
import { Todo } from "../../types";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../action";

export const useLogic = () => {
  const { state, dispatch } = useTodoContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // 更新用のSubmitボタン押下時の処理
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: Todo = {
      id: uuidv4(),
      name: name,
      description: description,
    };
    addTodo(dispatch, newTodo);
    setName("");
    setDescription("");
  };

  return {
    name,
    description,
    todos: state.todos,
    error: state.error,
    setName,
    setDescription,
    handleSubmit,
  };
};
