import React, { useState } from "react";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  userId: string;
};

// Todoリストを一覧で表示するサンプル
export const TodoListPage = () => {
  const todos = [
    { id: "aaa", title: "aaa", completed: false, userId: "user01" },
    { id: "bbb", title: "bbb", completed: true, userId: "user01" },
    { id: "ccc", title: "ccc", completed: false, userId: "user01" },
    { id: "ddd", title: "ddd", completed: false, userId: "user01" },
    { id: "eee", title: "eee", completed: false, userId: "user01" },
    { id: "fff", title: "fff", completed: false, userId: "user01" },
    { id: "ggg", title: "ggg", completed: false, userId: "user01" },
  ] as Todo[]; // 型を設定する

  // todos.mapを使って繰り返し処理を行う
  //  - 子要素のkey属性に一意の値を格納する　key={todo.id}
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "(完了)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};
