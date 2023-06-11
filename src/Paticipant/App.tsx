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
} from "@chakra-ui/react";
import React from "react";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { AiOutlineUser } from "react-icons/ai";
import { QuestionInput } from "./components/QuestionInput";
import { QuestionItem } from "./components/QuestionItem";
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
        {/* ヘッダー */}
        <Header />
        {/* スライドバー */}
        <Sidebar>
          {/* display='flex'がついている状態でjustifyContent='center'をつけると縦方向に真ん中寄せ
        // alignItems='center'をつけると横方向に真ん中寄せします。 */}

          <Box p={4}>
            {/* ここがメインコンテンツ */}
            <QuestionInput
              isOpenQuestion={isOpenQuestion}
              onOpenQuestion={onOpenQuestion}
            ></QuestionInput>

            <Box display="flex" justifyContent="center" mt={4}>
              <Tabs
                position="relative"
                variant="unstyled"
                // bgColor={"white"}
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
            </Box>
          </Box>
        </Sidebar>
        <Button
          colorScheme="teal"
          aria-label="Question"
          position="fixed"
          right={6}
          bottom={6}
          // w={14}
          // h={14}
          boxSize={14}
          rounded="full"
          p={2}
          boxShadow="md"
          shadow={"md"}
        >
          Ask
        </Button>
      </Box>
    </>
  );
};
