// logic.ts
import { useEffect, useState } from "react";
import { useTodoContext } from "../../context";
import { Todo } from "../../types";
import {
  addSubscription,
  deleteSubscription,
  editTodo,
  fetchTodos,
  removeTodo,
  updateSubscription,
} from "../../action";

import { ZenObservable } from "zen-observable-ts";

export const useLogic = () => {
  const { state, dispatch } = useTodoContext();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleDelete = (todoId: string) => {
    console.log("handle delete btn");
    removeTodo(dispatch, todoId);
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
    editTodo(dispatch, updateTodo);
    setName("");
    setDescription("");
  };

  useEffect(() => {
    console.log("useLogicのuseEffectが実行されました");
    let addResult: ZenObservable.Subscription | null;
    let updateResult: ZenObservable.Subscription | null;
    let deleteResult: ZenObservable.Subscription | null;

    addResult = addSubscription(dispatch);
    updateResult = updateSubscription(dispatch);
    deleteResult = deleteSubscription(dispatch);

    fetchTodos(dispatch);

    return () => {
      // どっちの実装が良い？
      // 案１
      addResult!.unsubscribe();
      updateResult!.unsubscribe();
      deleteResult!.unsubscribe();

      // 案２
      addResult && addResult.unsubscribe();
      updateResult && updateResult.unsubscribe();
      deleteResult && deleteResult.unsubscribe();
    };
  }, []);
  return {
    name,
    description,
    todos: state.todos,
    error: state.error,
    setName,
    setDescription,
    handleDelete,
    handleEdit,
    handleSubmit,
  };
};
