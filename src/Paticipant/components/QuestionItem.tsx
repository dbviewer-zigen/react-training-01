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
  Text,
  Spacer,
} from "@chakra-ui/react";
import { FormErrorMessage, FormLabel, FormControl } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { RiMore2Fill, RiMoreFill } from "react-icons/ri";
import { TbThumbUp } from "react-icons/tb";

// step13_TODOリストのreact-hook-form化_パート２
// useState,を使わずに、useFormのsetValueを使って入力した文字を保持する
export const QuestionItem = () => {
  return (
    <Box display="flex" justifyContent="center" mt={2}>
      <form>
        <FormControl w={{ base: "90vw", sm: "80vw", md: "70vw", lg: "60vw" }}>
          <Card p={3} rounded={"xl"} boxShadow={"xs"}>
            <Flex
              // h={20}
              alignItems={"center"}
              justifyContent={"space-between"}
              // bgColor={"blue"}
            >
              <Box p={0}>
                <Stack
                  direction={"row"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Avatar
                    size={"sm"}
                    icon={<AiOutlineUser fontSize="1.0rem" />}
                    bgColor={"gray.100"}
                    color={"gray"}
                  ></Avatar>
                  <Spacer></Spacer>
                  <Stack spacing={0} direction={"column"} align={"left"}>
                    <Text fontSize={"sm"} fontWeight={"bold"}>
                      Anonymous
                    </Text>
                    <Text fontSize={"xs"} color={"gray"}>
                      10 hours ago
                    </Text>
                  </Stack>
                </Stack>
              </Box>

              <Box>
                <Button
                  rightIcon={<TbThumbUp fontSize="1.0rem" />}
                  // colorScheme="gray"
                  variant="solid"
                  rounded={"full"}
                  size={"sm"}
                  p={4}
                >
                  <Text size={"xs"}>0</Text>
                </Button>
              </Box>
            </Flex>
            <Flex
              // h={20}
              m={2}
              alignItems={"center"}
              justifyContent={"space-between"}
              // bgColor={"blue"}
            >
              <Text fontSize={"sm"}>あいうえお</Text>
              <IconButton
                size={"md"}
                icon={<RiMoreFill />}
                aria-label={"Open Search"}
                // onClick={isOpen ? onClose : onOpen}
                backgroundColor={"white"}
                // color={"white"}
              />
            </Flex>
          </Card>
        </FormControl>
      </form>
    </Box>
  );
};
