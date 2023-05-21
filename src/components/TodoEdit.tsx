import { useState, FormEvent, useEffect } from "react";
import { Todo } from "../types/Todo";
import { FormValues } from "./TodoForm";
//import { useTodosDispatch } from "./TodosContext";
import { useForm } from "react-hook-form";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    const newTodo: Todo = {
      id: todo.id,
      title: value,
      completed: false,
      userId: "test",
    };
    handleEditFormSubmit(newTodo);
    setValue("");
  };

  console.log("render TodoEdit todo.title:", todo.title);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        value={value}
        placeholder="Todo"
        {...register("title", {
          required: "タイトルは必須です",
          maxLength: 120,
          onChange: (e) => {
            // 修正する場合は、onChangeでsetValueする
            // react-hook-formを使う場合は、onChangeの場所が違うことに注意する
            setValue(e.target.value);
          },
        })}
      />
      <div>{errors.title && errors.title.message}</div>
      <button type="submit">更新</button>
      <button onClick={handleCancelFormSubmit}>キャンセル</button>
    </form>
  );
};
