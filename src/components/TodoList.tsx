import React, { useEffect, useMemo, useState } from "react";
import { Todo } from "../types/Todo";
import {
  Flex,
  Center,
  Heading,
  VStack,
  StackDivider,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";

import { TodoItem } from "./TodoItem";

//function sort(sortedTodoList: Todo[], isDesc: boolean): Todo[] {
// const sort = function (sortedTodoList: Todo[], isDesc: boolean): Todo[] {
const sort = (sortedTodoList: Todo[], isDesc: boolean): Todo[] => {
  console.log("sortが呼ばれました");
  var clonedList = Array.from(sortedTodoList);
  if (isDesc) {
    clonedList.sort((a, b) => (a.title < b.title ? 1 : -1));
  } else {
    clonedList.sort((a, b) => (a.title < b.title ? -1 : 1));
  }
  return clonedList;
};

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

  // クライアント側でソート結果を持つケース
  const [sortedTodoList, setSortedTodoList] = useState<Todo[]>(todoList);

  useEffect(() => {
    setSortedTodoList(todoList);
  }, [todoList]);

  const sortByTitle = (isDesc: boolean) => {
    setSortedTodoList(sort(sortedTodoList, isDesc));
  };

  console.log("render TodoList");
  return (
    <Flex flexDir="column" align="center">
      <Center mb={8}>
        {/*margin_bottom 32px*/}
        <Heading>Todo List</Heading>
      </Center>
      <Box
        w={{ base: "90vw", sm: "80vw", md: "70vw", lg: "60vw" }}
        display="flex"
        justifyContent="flex-end"
        p={4}
      >
        {/* 並び替えボタン */}
        <Button ml={4} colorScheme="teal" onClick={() => sortByTitle(true)}>
          並び替え(降順)
        </Button>
        <Button ml={4} colorScheme="teal" onClick={() => sortByTitle(false)}>
          並び替え(昇順)
        </Button>
      </Box>
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
        {/* {todoList.length === 0 ? ( */}
        {sortedTodoList.length === 0 ? (
          <Text>No Data</Text>
        ) : (
          // todoList.map((todo) => (
          sortedTodoList.map((todo) => (
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
