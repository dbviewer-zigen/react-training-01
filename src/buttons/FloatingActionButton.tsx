import { IconButton } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";

export const FloatingActionButton = () => {
  return (
    <>
      {/* when using a IconButton (colorSchemaを指定出来る) */}
      {/* ボタンの中に表示されるアイコンのサイズがちょうど良い */}
      <IconButton
        colorScheme="teal"
        aria-label="Search database"
        icon={<SearchIcon />}
        position="fixed"
        right={6}
        bottom={6}
        // w={14}
        // h={14}
        boxSize={14}
        rounded="full"
        p={2}
        boxShadow="md"
      />
    </>
  );
};
