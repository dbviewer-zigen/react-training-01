import { useState, FormEvent, useEffect } from "react";
import { Todo } from "../types/Todo";
//import { useTodosDispatch } from "./TodosContext";

export const TodoEdit = ({
  todo,
  handleEditFormSubmit,
  handleCancelFormSubmit,
}: {
  todo: Todo;
  handleEditFormSubmit: (todo: Todo) => void;
  handleCancelFormSubmit: () => void;
}) => {
  const [value, setValue] = useState(todo.title); // TODOのタイトル

  // useEffectを使い、todoに変更があった場合にsetValueを呼び出す必要がある。
  // これを実装しないと、
  //  ・最初の編集モードに切り替えた時しか初期値が入ってこない。
  //  ・Todoアイテムの編集ボタンをそれぞれ押下しても、値が切り替わらない。
  useEffect(() => {
    setValue(todo.title);
  }, [todo]); // todoが変わった時に、setValueを実行する

  const onSubmit = (e: FormEvent) => {
    // const onSubmit = (e: any) => {
    e.preventDefault();

    const newTodo: Todo = {
      id: todo.id,
      title: value,
      completed: false,
      userId: "test",
    };

    console.log("ここまできた ", newTodo);

    handleEditFormSubmit(newTodo);
    setValue("");
  };
  console.log("render TodoEdit todo.title:", todo.title);
  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        placeholder="やることを入力してくださいー"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">更新</button>
      <button onClick={handleCancelFormSubmit}>キャンセル</button>
    </form>
  );
};
