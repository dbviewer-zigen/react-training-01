import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  userId: string;
};

// Todoリストを一覧で表示するサンプル
export const TodoListPage = () => {
  // const todos = [
  //   { id: "aaa", content: "aaa", isDone: false },
  //   { id: "bbb", content: "bbb", isDone: true },
  //   { id: "ccc", content: "ccc", isDone: false },
  //   { id: "ddd", content: "ddd", isDone: false },
  //   { id: "eee", content: "eee", isDone: false },
  //   { id: "fff", content: "fff", isDone: false },
  //   { id: "ggg", content: "ggg", isDone: false },
  // ];

  const url = "https://jsonplaceholder.typicode.com/todos";
  const { data, isLoading, error } = useFetch<Todo[]>(url);

  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  if (error) {
    // alert(error);
    console.log(error);
    return (
      <>
        <h4>Error Occured</h4>
      </>
    );
  }

  // todos.mapを使って繰り返し処理を行う
  //  - 子要素のkey属性に一意の値を格納する　key={todo.id}
  return (
    <div>
      <ul>
        {data.map((todo, index) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "(完了)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};
