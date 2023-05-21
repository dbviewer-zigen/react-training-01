import React, { useRef, useState } from "react";
import { useTodo } from "../hooks/useTodo";
import { Todo } from "../types/Todo";

// Todoリストを一覧表示、および登録、更新、削除するサンプル
// - 既知の問題
//  ・文字を入力する毎にステートを更新するため、再レンダリングする実装になっている。
export const TodoListPage = () => {
  // カスタムフックから必要な変数を取得
  // useTodoというカスタムフックを宣言
  // 第一引数はステート、第二引数以降はステートを更新するための各種関数
  const { todoList, add, update, remove } = useTodo();

  const [editMode, setEditMode] = useState(false);

  const emptyTodo: Todo = {
    id: "",
    title: "",
    completed: false,
    userId: "",
  };

  const [currentTodo, setCurrentTodo] = useState(emptyTodo);

  // 登録用Submitボタン押下時の処理
  function handleAddFormSubmit(e: any): void {
    e.preventDefault(); // submitのデフォルト動作を止める(submitさせない)
    add(currentTodo.title, "testUser001");
    setCurrentTodo(emptyTodo); // 入力フィールドをクリアする
  }
  // 更新用Submitボタン押下時の処理
  function handleEditFormSubmit(e: any): void {
    e.preventDefault(); // submitのデフォルト動作を止める(submitさせない)
    update(currentTodo.id, currentTodo.title);
    setCurrentTodo(emptyTodo);
    setEditMode(false); // 入力フィールドをクリアする
  }

  // Todoアイテム毎にある編集ボタン押下時の処理
  function handleEditClick(todo: Todo): void {
    setEditMode(true); // 編集モードにする
    setCurrentTodo(todo); //  現在（選択中）のTodoを設定する
  }

  // Todoアイテム毎にある削除ボタン押下時の処理
  function handleDeleteClick(todo: Todo): void {
    remove(todo.id); // Todoアイテムを削除する
  }

  // 通常モード(非編集）の入力フィールドの値が変更時の処理
  function handleAddInputChange(e: any): void {
    // const newItem: Todo = {
    //   id: "",
    //   title: e.target.value,
    //   completed: false,
    //   userId: "",
    // };
    // setCurrentTodo(newItem);
    // 上記の書き方もできるが、emptyTodoをスプレット展開して、タイトルだけ上書きする方がシンプル
    setCurrentTodo({ ...emptyTodo, title: e.target.value });
  }

  // 編集モードの入力フィールドの値が変更時の処理
  function handleEditInputChange(e: any): void {
    setCurrentTodo({ ...currentTodo, title: e.target.value }); // タイトルだけ更新する
  }

  console.log("render todo list");

  if (!editMode) {
    // 編集モードでない場合の表示
    return (
      <div>
        <form onSubmit={handleAddFormSubmit}>
          <h2>TOODリスト</h2>
          <label htmlFor="todo">Add todo: </label>
          <input
            name="todo"
            type="text"
            placeholder="Create a new todo"
            value={currentTodo.title}
            onChange={handleAddInputChange}
          />
          <button type="submit">登録</button>
        </form>
        <ul>
          {todoList.map((todo, index) => (
            <li key={todo.id}>
              {todo.title} {todo.completed ? "(完了)" : ""}
              <button onClick={() => handleEditClick(todo)}>編集</button>
              <button onClick={() => handleDeleteClick(todo)}>削除</button>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    // 編集モード場合の表示
    return (
      <div>
        <form onSubmit={handleEditFormSubmit}>
          <h2>TOODリスト(編集モード)</h2>
          <label htmlFor="editTodo">Edit todo: </label>
          <input
            name="editTodo"
            type="text"
            placeholder="Edit todo"
            value={currentTodo.title}
            onChange={handleEditInputChange}
          />
          <button type="submit">更新</button>
          <button onClick={() => setEditMode(false)}>キャンセル</button>
        </form>
        <ul>
          {todoList.map((todo, index) => (
            <li key={todo.id}>
              {todo.title} {todo.completed ? "(完了)" : ""}
              <button onClick={() => handleEditClick(todo)}>編集</button>
              <button onClick={() => handleDeleteClick(todo)}>削除</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
