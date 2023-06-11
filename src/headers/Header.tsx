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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log("isOpen", isOpen);
  return (
    <>
      <Box bg={useColorModeValue("#2A56A7", "gray.900")} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          display={{ base: "none", lg: "flex" }}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={6} />}
            aria-label={"Open Menu"}
            display={{ lg: "none" }} // lgサイズ以上で非表示にする(Slidoではlgが境界)
            onClick={isOpen ? onClose : onOpen}
            backgroundColor={"#2A56A7"}
            color={"white"}
          />

          <Stack
            spacing={1}
            direction={"column"}
            align={"left"}
            display={{ base: "none", lg: "flex" }} // lgサイズ以上は表示にする
          >
            <Text fontSize={"sm"} color={"white"} fontWeight={"bold"}>
              Zigen's organization
            </Text>
            <Stack spacing={1} direction={"row"} align={"left"}>
              <Text fontSize={"xs"} color={"white"}>
                Owner
              </Text>
              <Button
                size={"xs"}
                variant={"none"}
                color={"white"}
                bgColor={"#4C71B5"}
              >
                UPGRADE
              </Button>
            </Stack>
          </Stack>

          <Stack
            spacing={1}
            alignItems={"center"}
            display={{ base: "none", lg: "flex" }} // lgサイズ以上は表示にする
          >
            <InputGroup>
              <InputLeftElement pointerEvents={"none"}>
                <SearchIcon color="white" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search events"
                htmlSize={34}
                width={"auto"}
                _placeholder={{ color: "gray.300" }}
                border={"none"}
                color={"white"}
                bgColor={"#4C71B5"}
              ></Input>
            </InputGroup>
          </Stack>

          <Stack
            spacing={8}
            alignItems={"center"}
            display={{ lg: "none" }} // lgサイズ以上で非表示にする(Slidoではlgが境界)
          >
            <Text fontSize={"md"} color={"white"} fontWeight={"bold"}>
              Events
            </Text>
          </Stack>

          <Flex
            alignItems={"center"}
            display={{ base: "none", lg: "flex" }} // lgサイズ以上は表示にする
          >
            <Box m={1}>
              <Button
                size={"sm"}
                bgColor={"#2A56A7"}
                color={"white"}
                variant={"none"}
              >
                What's new
              </Button>
            </Box>

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
                  name="Zigen Zigen"
                  icon={<AiOutlineUser fontSize="1.5rem" />}
                ></Avatar>
              </MenuButton>
              <MenuList minWidth="260px">
                <MenuItem pointerEvents={"none"}>
                  {/* EDITボタンだけがクリック出来るように見せたい */}
                  {/*  
                    1. MenuItemのpointerEventsをnoneにする（クリックさせない）
                    2. EDITのボタンに対して、pointerEventsをautoを設定する
                  */}
                  <Flex
                    h={12}
                    width={"100%"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Stack spacing={1} direction={"row"} align={"left"}>
                      <Avatar
                        size={"sm"}
                        icon={<AiOutlineUser fontSize="1.2rem" />}
                      ></Avatar>

                      <Spacer></Spacer>
                      <Stack spacing={0} direction={"column"} align={"left"}>
                        <Text fontSize={"xs"} fontWeight={"bold"}>
                          Zigen Zigen
                        </Text>
                        <Text fontSize={"xs"}>zigen.zigen@gmail.com</Text>
                      </Stack>
                    </Stack>
                    <Button
                      size={"xs"}
                      variant={"none"}
                      pointerEvents={"auto"}
                      onClick={() => alert("test")}
                      color={"blue"}
                    >
                      EDIT
                    </Button>
                  </Flex>
                </MenuItem>
                <MenuDivider />

                <MenuItem>Events</MenuItem>
                <MenuItem>Schedule event</MenuItem>
                <MenuItem>Organization setting and billing</MenuItem>
                <MenuItem>Team management</MenuItem>
                <MenuDivider />
                <MenuItem>Upgrade</MenuItem>
                <MenuItem>Product news</MenuItem>
                <MenuItem>Help Center</MenuItem>
                <MenuItem>Tutorials</MenuItem>
                <MenuItem>Send us feedback</MenuItem>
                <MenuItem>Logout</MenuItem>
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

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
