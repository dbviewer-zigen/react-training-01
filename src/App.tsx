import React from "react";
import Header from "./headers/Header";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import SidebarWithHeader from "./sidebars/SidebarWithHeader";
import SimpleSidebar from "./sidebars/SimpleSidebar";
import { DrawerExample } from "./drawers/DrawerExample";
export const App = () => {
  return (
    <>
      {/* ヘッダー */}
      <Header></Header>

      {/* スライドバー */}
      <SimpleSidebar>
        <Box p={4}>
          これがSimpleSidebarの中に入れている要素です＝メインコンテンツ
        </Box>
      </SimpleSidebar>

      {/* FloatingActionButton */}
      <IconButton
        colorScheme="teal"
        aria-label="Question"
        icon={<QuestionOutlineIcon boxSize={5} />}
        position="fixed"
        right={6}
        bottom={6}
        // w={14}
        // h={14}
        boxSize={14}
        rounded="full"
        p={2}
        boxShadow="2xl"
      />
    </>
  );
};
