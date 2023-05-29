import { useState, FormEvent, useEffect } from "react";
import { Todo } from "../types/Todo";
import { FormValues } from "./TodoForm";
//import { useTodosDispatch } from "./TodosContext";
import { useForm } from "react-hook-form";
import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import { FormErrorMessage, FormLabel, FormControl } from "@chakra-ui/react";

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
    // formState: { errors },
    formState: { errors, isSubmitting },
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

  // const onSubmit = (data: FormValues) => {
  //   const newTodo: Todo = {
  //     id: todo.id,
  //     // title: value,   // useStateを使わないのでvalueは利用不可
  //     title: data.title, // valueではなく、dataのtitleを使う
  //     completed: false,
  //     userId: "test",
  //   };
  //   handleEditFormSubmit(newTodo);
  //   // setValue("");
  // };
  const onSubmit = handleSubmit((data: FormValues) => {
    const newTodo: Todo = {
      id: todo.id,
      // title: value,   // useStateを使わないのでvalueは利用不可
      title: data.title, // valueではなく、dataのtitleを使う
      completed: false,
      userId: "test",
    };
    handleEditFormSubmit(newTodo);
    // setValue("");
  });

  // 外部からフォームの中のデータを更新する場合の実装例
  // const changeTitleValue = (value: string) => {
  //   const currentText = getValues("title");
  //   setValue("title", currentText === "" ? value : `${currentText},${value}`);
  // };

  console.log("render TodoEdit todo.title:", todo.title);

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input
    //     type="text"
    //     // value={value} // inputのvalueは使わない
    //     placeholder="Todo"
    //     {...register("title", {
    //       required: "タイトルは必須です",
    //       // maxLength: 120,
    //       maxLength: {
    //         value: 10,
    //         message: "10文字以内で入力してください",
    //       },
    //       // useFormのsetValueを使うと、自力のonChange処理は不要
    //       // onChange: (e) => {
    //       //   // 修正する場合は、onChangeでsetValueする
    //       //   // react-hook-formを使う場合は、onChangeの場所が違うことに注意する
    //       //   setValue(e.target.value);
    //       // },
    //     })}
    //   />
    //   <div>{errors.title && errors.title.message}</div>
    //   <button type="submit">更新</button>
    //   <button onClick={handleCancelFormSubmit}>キャンセル</button>
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
            //value={todo.title} // この方法はダメ(入力すると、再描画で初期値に戻る)
            // onChange={onChangeConatent} // react-hook-formを使う場合、ここでは記載できない(registerの中で書く)
            placeholder="Enter todo"
            {...register("title", {
              required: "必須入力です",
              minLength: { value: 4, message: "4文字以上で入力してください" },
              maxLength: { value: 10, message: "10文字以内で入力してください" },
              onChange: (e) => {
                setValue("title", e.target.value);
              },
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
            変更
          </Button>
          <Button
            mt={4}
            ml={2} // margin left
            colorScheme="teal"
            onClick={handleCancelFormSubmit}
            type="button"
          >
            キャンセル
          </Button>
        </Box>
      </form>
    </Box>
  );
};
