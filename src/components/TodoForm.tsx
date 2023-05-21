import { useState, FormEvent } from "react";
import { Todo } from "../types/Todo";
import { useForm } from "react-hook-form";

// react-hook-formをtypescriptで実装する場合
// useFormで型を指定する。
// 入力フィールドの名称、データ型を指定しないと、エラーメッセージの表示ができない。
export type FormValues = {
  title: string;
};

export const TodoForm = ({
  handleAddFormSubmit,
}: {
  handleAddFormSubmit: (todo: Todo) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    const newTodo: Todo = {
      id: "",
      title: data.title,
      completed: false,
      userId: "test",
    };
    handleAddFormSubmit(newTodo);
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
