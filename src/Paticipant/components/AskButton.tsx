import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Grid,
  GridItem,
  Flex,
  Box,
  Avatar,
  IconButton,
  Spacer,
  Container,
  Divider,
  ScaleFade,
  SlideFade,
} from "@chakra-ui/react";
import { HamburgerIcon, CalendarIcon, AddIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineEmojiHappy } from "react-icons/hi";
export const AskButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
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
        onClick={onOpen}
      >
        Ask
      </Button>

      {/* <Button onClick={onOpen}>Open Modal</Button>
      <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      {/* <ScaleFade initialScale={1000.9} in={isOpen}> */}
      {/* <SlideFade in={isOpen} offsetY="120px"> */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"2xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ask the speaker?</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <Flex justifyContent={"space-between"} h={"120px"}>
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
          </ModalBody>

          {/* <ModalFooter>
            <Button size={"sm"} p={5} colorScheme="teal" rounded={"full"}>
              Send
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
      {/* </SlideFade> */}
      {/* </ScaleFade> */}
    </>
  );
};
