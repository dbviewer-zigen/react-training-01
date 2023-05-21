import React from "react";
import { useTodo } from "../hooks/useTodo";

// Todoリストを一覧で表示するサンプル
export const TodoListPage = () => {
  // カスタムフックから必要な変数を取得
  // useTodoというカスタムフックを宣言
  // 第一引数はステート、第二引数以降はステートを更新するための各種関数
  const { todoList, add, update, remove } = useTodo();

  console.log("render todo list");
  return (
    <div>
      <ul>
        {todoList.map((todo, index) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "(完了)" : ""}
            <button onClick={() => remove(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
