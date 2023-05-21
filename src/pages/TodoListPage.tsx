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
  //   { id: "aaa", title: "aaa", completed: false, userId: "user01" },
  //   { id: "bbb", title: "bbb", completed: true, userId: "user01" },
  //   { id: "ccc", title: "ccc", completed: false, userId: "user01" },
  //   { id: "ddd", title: "ddd", completed: false, userId: "user01" },
  //   { id: "eee", title: "eee", completed: false, userId: "user01" },
  //   { id: "fff", title: "fff", completed: false, userId: "user01" },
  //   { id: "ggg", title: "ggg", completed: false, userId: "user01" },
  // ] as Todo[]; // 型を設定する

  // urlを指定してAPIサーバからTodo[]を取得する
  const url = "https://jsonplaceholder.typicode.com/todos";
  const { data, isLoading, error } = useFetch<Todo[]>(url); // 型を指定する

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

  console.log("render todo list");

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
