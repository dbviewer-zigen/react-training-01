import React, { useState } from "react";

export type Todo = {
  id: string;
  content: string;
  done: boolean;
  name: string;
};

// Todoリストを一覧で表示するサンプル
export const TodoListPage = () => {
  const todos = [
    { id: "aaa", content: "aaa", isDone: false },
    { id: "bbb", content: "bbb", isDone: true },
    { id: "ccc", content: "ccc", isDone: false },
    { id: "ddd", content: "ddd", isDone: false },
    { id: "eee", content: "eee", isDone: false },
    { id: "fff", content: "fff", isDone: false },
    { id: "ggg", content: "ggg", isDone: false },
  ];

  // todos.mapを使って繰り返し処理を行う
  //  - 子要素のkey属性に一意の値を格納する　key={todo.id}
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {todo.content} {todo.isDone ? "(完了)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};
