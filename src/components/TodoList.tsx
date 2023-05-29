import React, { useEffect, useMemo, useState } from "react";
import { Todo } from "../types/Todo";
import {
  Flex,
  Center,
  Heading,
  VStack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { TodoItem } from "./TodoItem";
export const TodoList = ({
  todoList,
  handleEditClick,
  handleDeleteClick,
  handleToggleClick,
}: {
  todoList: Todo[];
  handleEditClick: (todo: Todo) => void;
  handleDeleteClick: (todo: Todo) => void;
  handleToggleClick: (todo: Todo) => void;
}) => {
  // const [list, setList] = useState([] as Todo[]);

  // useEffect(() => {
  //   setList(todoList);
  // }, []);

  console.log("render TodoList");
  return (
    // <div>
    //   <ul>
    //     {todoList.map((todo, index) => (
    //       <li key={todo.id}>
    //         {todo.title} {todo.completed ? "(完了)" : ""}
    //         <button onClick={() => handleEditClick(todo)}>編集</button>
    //         <button onClick={() => handleDeleteClick(todo)}>削除</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <Flex flexDir="column" align="center">
      <Center mb={8}>
        {/*margin_bottom 32px*/}
        <Heading>Todo List</Heading>
      </Center>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        align="stretch"
        w={{ base: "90vw", sm: "80vw", md: "70vw", lg: "60vw" }}
        border="1px"
        borderColor="grey.300"
        borderRadius="md"
        p={4}
        maxH="65vw"
        overflow="scroll"
      >
        {todoList.length === 0 ? (
          <Text>No Data</Text>
        ) : (
          todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={() => handleDeleteClick(todo)}
              selecteTodo={() => handleEditClick(todo)}
              toggleStatus={() => handleToggleClick(todo)}
              // content={todo.content}
              // isDone={todo.done}
            ></TodoItem>
          ))
        )}
      </VStack>
    </Flex>
  );
};
