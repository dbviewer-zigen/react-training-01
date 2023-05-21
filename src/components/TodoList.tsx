import React, { useEffect, useMemo, useState } from "react";
import { Todo } from "../types/Todo";

export const TodoList = ({
  todoList,
  handleEditClick,
  handleDeleteClick,
}: {
  todoList: Todo[];
  handleEditClick: (todo: Todo) => void;
  handleDeleteClick: (todo: Todo) => void;
}) => {
  // const [list, setList] = useState([] as Todo[]);

  // useEffect(() => {
  //   setList(todoList);
  // }, []);

  console.log("render TodoList");
  return (
    <div>
      <ul>
        {todoList.map((todo, index) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "(完了)" : ""}
            <button onClick={() => handleEditClick(todo)}>編集</button>
            <button onClick={() => handleDeleteClick(todo)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
