import { useState, FormEvent, useEffect } from "react";

//import { useTodosDispatch } from "./TodosContext";
import { useForm } from "react-hook-form";
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  useBoolean,
} from "@chakra-ui/react";
import { FormErrorMessage, FormLabel, FormControl } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineEmojiHappy } from "react-icons/hi";

// step13_TODOリストのreact-hook-form化_パート２
// useState,を使わずに、useFormのsetValueを使って入力した文字を保持する
export const QuestionInput = ({
  isOpenQuestion,
  onOpenQuestion,
}: {
  isOpenQuestion: boolean;
  onOpenQuestion: () => void;
}) => {
  // const [flag, setFlag] = useBoolean();

  // Card領域をクリックした場合の処理
  const handleCardClick = (e: any) => {
    console.log("Card click");
    onOpenQuestion();
    // 以下の処理が重要（後続のイベントを無効化する）
    e.stopPropagation(); // イベントを中止(BoxのClickイベントを呼ばない)
  };

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <form>
        <FormControl
          // isInvalid={errors.title ? true : undefined}
          w={{ base: "90vw", sm: "80vw", md: "70vw", lg: "60vw" }}
        >
          <Card p={3} rounded={"xl"} boxShadow={"md"} onClick={handleCardClick}>
            <Flex
              // h={20}
              alignItems={"center"}
              justifyContent={"center"}
              // bgColor={"blue"}
            >
              {/* isOpenQuestionがfalseの場合に顔アイコンを表示する */}
              {isOpenQuestion ? null : (
                <Box p={2}>
                  <Avatar
                    size={"sm"}
                    icon={<AiOutlineUser fontSize="1.0rem" />}
                    bgColor={"gray.100"}
                    color={"gray"}
                  ></Avatar>
                </Box>
              )}

              <Input
                type="text"
                placeholder="Type your question"
                htmlSize={34}
                width={"auto"}
                _placeholder={{ color: "gray" }}
                border={"none"}
                // color={"white"}
                bgColor={"white"}
                focusBorderColor={"white"}
                flex={1}
                // onFocus={setFlag.on}
              ></Input>

              <Box p={1}>
                <Stack direction={"column"}>
                  <IconButton
                    aria-label="Search emoji"
                    variant={"none"}
                    icon={<HiOutlineEmojiHappy fontSize="1.4rem" />}
                    color={"gray"}
                  />
                </Stack>
              </Box>
            </Flex>

            {/* isOpenQuestionがtrueの場合に表示する */}
            {isOpenQuestion ? (
              <>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  // bgColor={"red"}
                >
                  <Box ml={2} p={2} color={"red"} fontSize={"sm"}>
                    Please enter your question
                  </Box>
                  <Box mr={2} p={2} color={"gray"}>
                    160
                  </Box>
                </Flex>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  // bgColor={"red"}
                >
                  <Box p={2} h={12}>
                    <Avatar
                      size={"xs"}
                      mt={2}
                      icon={<AiOutlineUser fontSize="1.0rem" />}
                      bgColor={"gray.100"}
                      color={"gray"}
                    ></Avatar>
                    <Input
                      type="text"
                      placeholder="Your name (optional)"
                      htmlSize={34}
                      width={"auto"}
                      _placeholder={{ color: "gray" }}
                      border={"none"}
                      // color={"white"}
                      bgColor={"white"}
                      focusBorderColor={"white"}
                      flex={1}
                    ></Input>
                  </Box>
                  <Button
                    m={2}
                    p={5}
                    size={"md"}
                    colorScheme="teal"
                    // isLoading={isSubmitting}
                    type="submit"
                    rounded={"full"}
                  >
                    Send
                  </Button>
                </Flex>
              </>
            ) : null}
          </Card>
        </FormControl>
      </form>
    </Box>
  );
};
