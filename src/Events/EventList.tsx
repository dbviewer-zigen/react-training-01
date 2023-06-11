import {
  Button,
  Flex,
  Icon,
  Stack,
  Text,
  IconButton,
  VStack,
  Box,
  Spacer,
  Avatar,
  CardBody,
  Card,
  CardHeader,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuButton,
  Menu,
  Container,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import { HamburgerIcon, CalendarIcon, AddIcon } from "@chakra-ui/icons";
import React from "react";
import { RiFilter3Fill, RiMore2Line } from "react-icons/ri";
import { CreateSlidoButton } from "../buttons/CreateSlidoButton";
export const EventList = () => {
  return (
    <Container maxW={"6xl"}>
      {/* Container maxW=6xlを使うことで6xlのサイズまでは自動拡張、それ以上は拡張しない */}
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        {/* Past(タイトル) */}
        <Stack spacing={1} direction={"row"} align={"left"} ml={6}>
          <Text fontWeight={"bold"}>Past</Text>
        </Stack>
        {/* フィルタおよびCreateボタン */}
        <Stack spacing={1} direction={"row"} align={"right"} mr={6}>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <IconButton
                size={"md"}
                icon={<RiFilter3Fill size={20} />}
                aria-label={"Open Filter"}
              />
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup
                defaultValue="all"
                title="Filter by"
                type="radio"
              >
                <MenuItemOption value="all">All events</MenuItemOption>
                <MenuItemOption value="only">Only my events</MenuItemOption>
                <MenuItemOption value="share">Shared events</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>

          {/* <Button
            size={"md"}
            // p={3}
            leftIcon={<AddIcon />}
            colorScheme="teal"
            variant="solid"
          >
            Create Slido
          </Button> */}

          <CreateSlidoButton />
        </Stack>
      </Flex>
      <Spacer height={4} />

      <VStack spacing={2} align="stretch">
        <Card>
          <CardBody p={3}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              {/* カレンダアイコン、イベント名、作成年月日など */}
              <Stack spacing={0} direction={"row"} align={"left"}>
                <Avatar
                  mt={1}
                  mr={2}
                  size={"sm"}
                  icon={<CalendarIcon />}
                  bgColor={"gray.100"}
                  color={"gray"}
                ></Avatar>
                <Stack spacing={1} direction={"column"} align={"left"}>
                  <Stack spacing={1} direction={"row"} align={"left"}>
                    <Text fontSize={"sm"} mr={2}>
                      Test
                    </Text>
                    <Text fontSize={"sm"}># 1234567</Text>
                  </Stack>
                  <Stack spacing={0} direction={"row"} align={"left"}>
                    <Text fontSize={"xs"}>01 -4 May 2023</Text>
                  </Stack>
                </Stack>
              </Stack>

              {/* メニューボタン */}
              <Stack direction={"row"}>
                {/* <IconButton
                  size={"md"}
                  icon={<RiMore2Line size={20} />}
                  aria-label={"Open more"}
                  bgColor={"white"}
                  color={"gray"}
                /> */}

                <Menu>
                  {/* テキスト付きのボタンの場合 */}
                  {/* <MenuButton
                    as={Button}
                    // rounded={"full"}
                    // variant={"link"}
                    cursor={"pointer"}
                    size={"md"}
                    rightIcon={<RiMore2Line />}
                  >
                    Menu
                  </MenuButton> */}

                  {/* アイコンだけのボタンにする場合 */}
                  <MenuButton
                    as={IconButton}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    // size={"md"}
                    icon={<RiMore2Line size={20} />}
                  />

                  {/* <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <IconButton
                      size={"md"}
                      icon={<RiMore2Line size={20} />}
                      aria-label={"Open more"}
                      bgColor={"white"}
                      color={"gray"}
                    />
                  </MenuButton> */}
                  <MenuList>
                    <MenuItem>Participant mode</MenuItem>
                    <MenuItem>Present mode</MenuItem>
                    <MenuDivider />
                    <MenuItem>Open</MenuItem>
                    <MenuItem>Share access</MenuItem>
                    <MenuItem>Upgrade event</MenuItem>
                    <MenuItem>Duplicate</MenuItem>
                    <MenuItem>Transfer</MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardBody p={3}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              {/* カレンダアイコン、イベント名、作成年月日など */}
              <Stack spacing={0} direction={"row"} align={"left"}>
                <Avatar
                  mt={1}
                  mr={2}
                  size={"sm"}
                  icon={<CalendarIcon />}
                  bgColor={"gray.100"}
                  color={"gray"}
                ></Avatar>
                <Stack spacing={1} direction={"column"} align={"left"}>
                  <Stack spacing={1} direction={"row"} align={"left"}>
                    <Text fontSize={"sm"} mr={2}>
                      Test
                    </Text>
                    <Text fontSize={"sm"}># 1234567</Text>
                  </Stack>
                  <Stack spacing={0} direction={"row"} align={"left"}>
                    <Text fontSize={"xs"}>01 -4 May 2023</Text>
                  </Stack>
                </Stack>
              </Stack>

              {/* メニューボタン */}
              <Stack direction={"row"}>
                {/* <IconButton
                  size={"md"}
                  icon={<RiMore2Line size={20} />}
                  aria-label={"Open more"}
                  bgColor={"white"}
                  color={"gray"}
                /> */}
                <Menu>
                  {/* アイコンだけのボタンにする場合 */}
                  <MenuButton
                    as={IconButton}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    // size={"md"}
                    icon={<RiMore2Line size={20} />}
                  />
                  <MenuList>
                    <MenuItem>Participant mode</MenuItem>
                    <MenuItem>Present mode</MenuItem>
                    <MenuDivider />
                    <MenuItem>Open</MenuItem>
                    <MenuItem>Share access</MenuItem>
                    <MenuItem>Upgrade event</MenuItem>
                    <MenuItem>Duplicate</MenuItem>
                    <MenuItem>Transfer</MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </CardBody>
        </Card>
      </VStack>
      <Container maxW="2xl" bg="gray.200" centerContent>
        <Box padding="4" bg="yellow.400" color="black" maxW="md">
          画面全体に不要なスクロールがついている（下に余白が出ている）
          メインコンテンツにのみスクロールをつけたい
        </Box>
      </Container>
    </Container>
  );
};
