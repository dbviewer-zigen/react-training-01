import { useState, FormEvent, useEffect } from "react";
import { Todo } from "../types/Todo";
import { FormValues } from "./TodoForm";
//import { useTodosDispatch } from "./TodosContext";
import { useForm } from "react-hook-form";

// step13_TODOリストのreact-hook-form化_パート２
// useState,を使わずに、useFormのsetValueを使って入力した文字を保持する
export const TodoEdit = ({
  todo,
  handleEditFormSubmit,
  handleCancelFormSubmit,
}: {
  todo: Todo;
  handleEditFormSubmit: (todo: Todo) => void;
  handleCancelFormSubmit: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    // getValues,　// Formのデータを取得する関数
  } = useForm<FormValues>();

  // const [value, setValue] = useState(todo.title); // TODOのタイトル
  // // useEffectを使い、todoに変更があった場合にsetValueを呼び出す必要がある。
  // // これを実装しないと、
  // //  ・最初の編集モードに切り替えた時しか初期値が入ってこない。
  // //  ・Todoアイテムの編集ボタンをそれぞれ押下しても、値が切り替わらない。
  useEffect(() => {
    //   setValue(todo.title);
    setValue("title", todo.title); // useForm#setValue
    // 特定の行だけESLintのルールを無効にする(https://zenn.dev/mackay/articles/1e8fcce329336d)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todo]); // todoが変わった時に、setValueを実行する

  const onSubmit = (data: FormValues) => {
    const newTodo: Todo = {
      id: todo.id,
      // title: value,   // useStateを使わないのでvalueは利用不可
      title: data.title, // valueではなく、dataのtitleを使う
      completed: false,
      userId: "test",
    };
    handleEditFormSubmit(newTodo);
    // setValue("");
  };

  // 外部からフォームの中のデータを更新する場合の実装例
  // const changeTitleValue = (value: string) => {
  //   const currentText = getValues("title");
  //   setValue("title", currentText === "" ? value : `${currentText},${value}`);
  // };

  console.log("render TodoEdit todo.title:", todo.title);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        // value={value} // inputのvalueは使わない
        placeholder="Todo"
        {...register("title", {
          required: "タイトルは必須です",
          // maxLength: 120,
          maxLength: {
            value: 10,
            message: "10文字以内で入力してください",
          },
          // useFormのsetValueを使うと、自力のonChange処理は不要
          // onChange: (e) => {
          //   // 修正する場合は、onChangeでsetValueする
          //   // react-hook-formを使う場合は、onChangeの場所が違うことに注意する
          //   setValue(e.target.value);
          // },
        })}
      />
      <div>{errors.title && errors.title.message}</div>
      <button type="submit">更新</button>
      <button onClick={handleCancelFormSubmit}>キャンセル</button>
    </form>
  );
};
