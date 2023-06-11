import { ReactNode } from "react";
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
  MenuOptionGroup,
  MenuItemOption,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import { HeaderTabs } from "./HeaderTabs";
const Links = ["Dashboard", "Projects", "Team"];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log("isOpen", isOpen);
  return (
    <>
      <Box bg={useColorModeValue("#2A56A7", "gray.900")} px={4}>
        <Flex
          h={14}
          alignItems={"center"}
          justifyContent={"space-between"}
          display={{ base: "none", lg: "flex" }}
        >
          <Stack
            spacing={1}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={6} />}
              aria-label={"Open Menu"}
              // display={{ lg: "none" }} // lgサイズ以上で非表示にする(Slidoではlgが境界)
              onClick={isOpen ? onClose : onOpen}
              backgroundColor={"#2A56A7"}
              color={"white"}
              mr={2}
            />
            <Text color={"white"}>TEST for PC</Text>
          </Stack>

          <Stack
            spacing={8}
            alignItems={"center"}
            display={{ lg: "none" }} // lgサイズ以上で非表示にする(Slidoではlgが境界)
          >
            <Text fontSize={"md"} color={"white"} fontWeight={"bold"}>
              TEST
            </Text>
          </Stack>

          <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            display={{ base: "none", md: "flex" }}
          >
            <Container maxW="md">
              <HeaderTabs />
            </Container>
          </Flex>
          <Flex
            alignItems={"center"}
            display={{ base: "none", lg: "flex" }} // lgサイズ以上は表示にする
          >
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  icon={<AiOutlineUser fontSize="1.0rem" />}
                ></Avatar>
              </MenuButton>
              <MenuList>
                <MenuItem>My profile</MenuItem>
                <MenuItem>My questions</MenuItem>
              </MenuList>
            </Menu>
          </Flex>

          <IconButton
            size={"md"}
            icon={
              isOpen ? <SearchIcon boxSize={5} /> : <SearchIcon boxSize={5} />
            }
            aria-label={"Open Search"}
            display={{ lg: "none" }} // lgサイズ以上で非表示にする(Slidoではlgが境界)
            onClick={isOpen ? onClose : onOpen}
            backgroundColor={"#2A56A7"}
            color={"white"}
          />
        </Flex>
      </Box>
    </>
  );
}
