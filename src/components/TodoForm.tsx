import { useState, FormEvent, useEffect } from "react";
import { Todo } from "../types/Todo";
import { useForm } from "react-hook-form";
import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import { FormErrorMessage, FormLabel, FormControl } from "@chakra-ui/react";

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
    // formState: { errors },
    formState: { errors, isSubmitting },
    // setValue,
    // getValues,
    resetField, // 指定したフォームの値を初期化
  } = useForm<FormValues>();

  // const onSubmit = (data: FormValues) => {
  //   const newTodo: Todo = {
  //     id: "",
  //     title: data.title,
  //     completed: false,
  //     userId: "test",
  //   };
  //   handleAddFormSubmit(newTodo);
  //   resetField("title"); // 指定したフォームの値を初期化
  // };
  const onSubmit = handleSubmit((data: FormValues) => {
    const newTodo: Todo = {
      id: "",
      title: data.title,
      completed: false,
      userId: "test",
    };
    handleAddFormSubmit(newTodo);
    resetField("title"); // 指定したフォームの値を初期化
  });
  console.log("render TodoForm");
  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input
    //     type="text"
    //     placeholder="Todo"
    //     {...register("title", {
    //       required: "タイトルは必須です",
    //       // maxLength: 5,
    //       maxLength: {
    //         value: 10,
    //         message: "10文字以内で入力してください",
    //       },
    //     })}
    //   />
    //   <div>{errors.title && errors.title.message}</div>
    //   <button type="submit">登録</button>
    // </form>
    <Box display="flex" justifyContent="center" mt={4}>
      <form onSubmit={onSubmit}>
        <FormControl
          isInvalid={errors.title ? true : undefined}
          w={{ base: "90vw", sm: "80vw", md: "70vw", lg: "60vw" }}
        >
          <FormLabel htmlFor="content">ToDoの内容</FormLabel>

          <Textarea
            id="title"
            placeholder="Enter todo"
            {...register("title", {
              required: "必須入力です",
              minLength: { value: 4, message: "4文字以上で入力してください" },
              maxLength: { value: 10, message: "10文字以内で入力してください" },
            })}
          />
          <FormErrorMessage>
            {errors.title && errors.title.message}
          </FormErrorMessage>
        </FormControl>

        <Box w="100%" display="flex" justifyContent="flex-end">
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            登録
          </Button>
        </Box>
      </form>
    </Box>
  );
};
