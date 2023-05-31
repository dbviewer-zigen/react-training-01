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
  startDate: string;
  endDate: string;
};

export const TodoForm = ({
  handleAddFormSubmit,
}: {
  handleAddFormSubmit: (todo: Todo) => void;
}) => {
  // 指定した日付の文字列(yyyy-MM-dd)を取得する
  const getDateString = (date: Date): string => {
    // const date2 = date.setDate(date.getDate() + 1);
    const year = date.getFullYear().toString().padStart(4, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return year + "-" + month + "-" + day;
  };

  console.log(getDateString(new Date()));

  const {
    register,
    handleSubmit,
    // formState: { errors },
    formState: { errors, isSubmitting },
    // setValue,　// フォームに値を設定する関数
    getValues, // フォームの値を取得する関数
    resetField, // 指定したフォームの値を初期化
  } = useForm<FormValues>({
    defaultValues: {
      title: "初期値",
      startDate: getDateString(new Date()),
      endDate: getDateString(new Date()),
    },
  });

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

  // Vadidate関数
  const validateName = (name: string) => {
    console.log("name-->", name);
    if (name === "inValid") return "This name is not validate";
    console.log("startDate:", getValues("startDate"));
    console.log("endDate:", getValues("endDate"));
  };

  console.log("render TodoForm");
  console.log(errors.endDate);
  return (
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
              minLength: { value: 1, message: "1文字以上で入力してください" },
              maxLength: { value: 10, message: "10文字以内で入力してください" },
              validate: validateName,
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
