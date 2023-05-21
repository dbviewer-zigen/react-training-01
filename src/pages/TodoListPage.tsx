import React, { useRef } from "react";
import { useTodo } from "../hooks/useTodo";

// Todoリストを一覧で表示するサンプル
export const TodoListPage = () => {
  // カスタムフックから必要な変数を取得
  // useTodoというカスタムフックを宣言
  // 第一引数はステート、第二引数以降はステートを更新するための各種関数
  const { todoList, add, update, remove } = useTodo();

  // TextAreaの値を参照するためのuseRefを宣言する　<textarea>タグのref属性に設定
  const inputElement = useRef<HTMLTextAreaElement>(null);

  // 追加ボタンを押下した時の関数を宣言
  const handleAdd = () => {
    if (inputElement.current?.value === "") {
      return; // 値が空の場合は何もしない
    }
    add(inputElement.current!.value, "test_user"); // カスタムフックのadd関数を使って登録する
    inputElement.current!.value = ""; //登録後は空白を設定する
  };

  console.log("render todo list");
  return (
    <div>
      <textarea ref={inputElement} />
      <button onClick={handleAdd}>追加</button>
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
