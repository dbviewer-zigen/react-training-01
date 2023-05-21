import { useState, FormEvent, useEffect } from "react";
import { Todo } from "../types/Todo";
import { useForm } from "react-hook-form";

// react-hook-formをtypescriptで実装する場合
// useFormで型を指定する。
// 入力フィールドの名称、データ型を指定しないと、エラーメッセージの表示ができない。
export type FormValues = {
  title: string;
};

// step13_TODOリストのreact-hook-form化_パート２
// useFormのresetFieldを使って登録処理後に入力フォームの値を初期化する
export const TodoForm = ({
  handleAddFormSubmit,
}: {
  handleAddFormSubmit: (todo: Todo) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setValue,
    // getValues,
    resetField, // 指定したフォームの値を初期化
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    const newTodo: Todo = {
      id: "",
      title: data.title,
      completed: false,
      userId: "test",
    };
    handleAddFormSubmit(newTodo);
    resetField("title"); // 指定したフォームの値を初期化
  };
  console.log("render TodoForm");
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Todo"
        {...register("title", {
          required: "タイトルは必須です",
          // maxLength: 5,
          maxLength: {
            value: 10,
            message: "10文字以内で入力してください",
          },
        })}
      />
      <div>{errors.title && errors.title.message}</div>
      <button type="submit">登録</button>
    </form>
  );
};
