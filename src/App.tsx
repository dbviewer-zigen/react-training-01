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
import { EventList } from "./Events/EventList";
export const App = () => {
  return (
    <>
      {/* ヘッダー */}
      <Header />

      {/* スライドバー */}
      <SimpleSidebar>
        {/* display='flex'がついている状態でjustifyContent='center'をつけると縦方向に真ん中寄せ
        // alignItems='center'をつけると横方向に真ん中寄せします。 */}

        <Box p={4}>
          {/* ここがメインコンテンツ */}
          <EventList />
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
        boxShadow="md"
      />
    </>
  );
};
