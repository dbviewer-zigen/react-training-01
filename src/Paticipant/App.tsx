import {
  Avatar,
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  Textarea,
  useBoolean,
  useDisclosure,
  Text,
  TabPanels,
  TabPanel,
  Center,
  Container,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { AiOutlineUser } from "react-icons/ai";
import { QuestionInput } from "./components/QuestionInput";
import { QuestionItem } from "./components/QuestionItem";
import { AskButton } from "./components/AskButton";
export const App = () => {
  const {
    isOpen: isOpenQuestion,
    onOpen: onOpenQuestion,
    onClose: onCloseQuestion,
  } = useDisclosure();

  // QuestionInputがclickされた状態を解除するイベント
  const handleClick = () => {
    console.log("Box click isOpen:", isOpenQuestion);
    onCloseQuestion();
  };
  return (
    <>
      <Box onClick={handleClick}>
        {/* <Box
        onClick={handleClick}
        h={"100vh"}
        bgColor={"black"}
        display={"flex"}
        flex={"column"}
      > */}

        {/* スライドバー */}
        <Sidebar>
          <Box p={4} bgColor={"white"}>
            {/* <Flex p={4} bgColor={"red"} flexGrow={1} direction={"column"}> */}
            {/* ここがメインコンテンツ */}
            <QuestionInput
              isOpenQuestion={isOpenQuestion}
              onOpenQuestion={onOpenQuestion}
            ></QuestionInput>

            <Flex display="flex" justifyContent="center" mt={4}>
              <Tabs
                position="relative"
                variant="unstyled"
                // bgColor={"red"}
                w={{ base: "90vw", sm: "80vw", md: "70vw", lg: "60vw" }}
              >
                <TabList>
                  <Tab>Popular</Tab>
                  <Tab>Recent</Tab>
                </TabList>
                <TabIndicator
                  mt="-1.5px"
                  height="2px"
                  bg="blue.500"
                  borderRadius="1px"
                />
                <TabPanels mt="-20px">
                  <TabPanel>
                    <QuestionItem />
                    <QuestionItem />
                    <QuestionItem />
                    <QuestionItem />
                  </TabPanel>
                  <TabPanel>
                    <QuestionItem />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Flex>
          </Box>
        </Sidebar>

        <AskButton />
      </Box>
    </>
  );
};
