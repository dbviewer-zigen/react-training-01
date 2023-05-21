import axios from "axios";
import { Todo } from "../types/Todo";

const todoDataUrl = "http://localhost:3100/todos";

// 全TODOリスト取得
// 非同期の場合の復帰値の型指定はPromise<T>で指定する
export const findAll = async (): Promise<Todo[]> => {
  console.log("GET ", todoDataUrl);
  const response = await axios.get(todoDataUrl);
  return response.data;
  // return response.data;
};

// 1件のTODOを追加する
export const add = async (todo: Todo) => {
  const response = await axios.post(todoDataUrl, todo);
  return response.data;
};

// 1件のTODOを削除する
export const remove = async (id: string) => {
  await axios.delete(`${todoDataUrl}/${id}`);
  return id;
};

// 1件のTODOを更新する
export const update = async (id: string, todo: Todo) => {
  const response = await axios.put(`${todoDataUrl}/${id}`, todo);
  return response.data;
};
