import React, { useEffect, useState } from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
  RiEdit2Fill,
} from "react-icons/ri";
import { BsFillTrashFill } from "react-icons/bs";
import { Todo } from "../types/Todo";

export const TodoItem = ({
  todo,
  //toggleTodoListItemStatus, // チェックボックスクリック時に呼ばれる関数の参照
  deleteTodo, // ゴミ箱をクリック時に呼ばれる関数の参照
  selecteTodo, // アイテムをクリック時に呼ばれる関数の参照
  toggleStatus, // 完了(トグルボタン)クリック時に呼ばれる関数の参照
}: {
  todo: Todo;
  deleteTodo: (todo: Todo) => void;
  selecteTodo: (todo: Todo) => void;
  toggleStatus: (todo: Todo) => void;
}) => {
  // // onlcikイベントで呼び出される関数
  // const handleToggleTodoListItemStatus = () => {
  //   console.log("handleToggleTodoListItemStatus");
  //   toggleTodoListItemStatus(todo.id, todo.completed);
  // };

  // onlcikイベントで呼び出される関数
  const handleEditTodoListItem = () => {
    console.log(">> EDIT handleEditTodoListItem todo:", todo.title);
    selecteTodo(todo);
  };

  // onlcikイベントで呼び出される関数
  const handleDeleteTodoListItem = () => deleteTodo(todo);

  // onlcikイベントで呼び出される関数
  const handleToggleStatus = () => toggleStatus(todo);

  // ¥nをBRタグに変換する
  const contentWithBR = todo.title.split(/(\n)/).map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item.match(/\n/) ? <br /> : item}
      </React.Fragment>
    );
  });

  return (
    <>
      <Flex
        w="100%"
        align="center"
        justify="space-between" // 子コンポーネントを両サイドに広げる
        // border="1px dashed grey"
      >
        <Flex
          align="center"
          //  border="1px dashed grey"
        >
          <Icon
            as={
              todo.completed ? RiCheckboxCircleFill : RiCheckboxBlankCircleLine
            } // チェックボックス
            color="teal"
            cursor="pointer"
            h={6} // height 4*6=24px
            w={6} // width 4*6=24px
            mr={2} // margin_right=4*2=8px
            onClick={handleToggleStatus}
          />
          <Text fontSize="xl">{contentWithBR}</Text>
        </Flex>

        <Flex
          align="center"
          //border="1px dashed grey"
        >
          <Icon
            as={RiEdit2Fill} // Editアイコン
            color="gray"
            cursor="pointer"
            h={6} // height 4*6=24px
            w={6} // width 4*6=24px
            mr={4} // margin_right=4*4=16px
            onClick={handleEditTodoListItem}
          />
          <Icon
            as={BsFillTrashFill} // ゴミ箱
            color="gray"
            cursor="pointer"
            h={6} // height 4*6=24px
            w={6} // width 4*6=24px
            onClick={handleDeleteTodoListItem}
          />
        </Flex>
      </Flex>
    </>
  );
};
