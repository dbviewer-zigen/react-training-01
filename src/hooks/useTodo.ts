import { useState, useEffect } from "react";
import * as todoApi from "../apis/todos";
import { Todo } from "../types/Todo";
import { ulid } from "ulid";
// Environmental requirements
// - install ulid, axios
// カスタムHook
export const useTodo = () => {
  // useStateの引数に何を渡すのか？ useState() フックの唯一の引数は state の初期値です。
  // useState は何を返すのか？ 現在の state と、それを更新するための関数とを、ペアにして返します。
  const [todoList, setTodoList] = useState<Todo[]>([]);

  // Similar to componentDidMount and componentDidUpdate:
  // Update the document title using the browser API
  useEffect(() => {
    console.log("useTodo# useEffect");
    todoApi.findAll().then((todos) => {
      setTodoList(todos); // 検索結果をそのまま設定
      // ex 登録順の逆順で表示する場合
      // setTodoList([...todos].reverse()); // リバース（逆順）して設定
    });
  }, []);

  // Todoの登録
  const add = (title: string, userId: string) => {
    // あたらしいitemを作成する
    const newItem: Todo = {
      id: ulid(),
      title: title,
      completed: false,
      userId: userId,
    };

    // サーバーの追加APIを呼ぶ
    todoApi.add(newItem).then((addTodo) => {
      // --------------------------------
      // 新しいtodoListをstateにセットする
      // --------------------------------
      // addTodoをtodoListの先頭に追加、その後todoListを展開
      // ...はスプレット演算子(オブジェクトの展開)
      //setTodoList([addTodo, ...todoList]);

      // addTodoをtodoListの最後に追加場合
      setTodoList([...todoList, addTodo]);
    });
  };

  // IDを指定してタイトルを更新する
  const update = (id: string, title: string) => {
    // todoListから、idが一致する1件を取り出す
    const todoItem = todoList.find((item: Todo) => item.id === id);
    // タイトルを上書きする
    const updateItem: Todo = { ...todoItem!, title: title };
    // サーバに更新API呼ぶ
    todoApi.update(id, updateItem).then((updatedTodo) => {
      // 更新が成功したら、todoListを更新する
      // 保持しているtodoListからidが一致しているTodoをサーバーから返ってきたupdatedTodoで更新する
      const newTodoList = todoList.map((item) =>
        item.id !== id ? item : updatedTodo
      );
      // --------------------------------
      // 新しいtodoListをstateにセットする
      // --------------------------------
      setTodoList(newTodoList);
    });
  };

  // 指定したIDのデータを削除する
  const remove = (id: string) => {
    todoApi.remove(id).then((deletedid) => {
      const newTodoList = todoList.filter((item) => item.id !== deletedid);
      // --------------------------------
      // 削除した新しいtodoListをstateにセットする
      // --------------------------------
      setTodoList(newTodoList);
    });
  };

  // 作成した関数を返す
  // 第一引数:ステート
  // 第二引数以降:ステートを更新するための関数
  return {
    todoList,
    add,
    update,
    remove,
  };
};
