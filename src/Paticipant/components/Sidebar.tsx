import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Stack,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  useMenuItem,
  MenuItem,
  Container,
  Center,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
} from "@chakra-ui/react";

import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiMessageSquare,
} from "react-icons/fi";
import { PhoneIcon, AtSignIcon, ChatIcon } from "@chakra-ui/icons";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { CgDarkMode, CgInfo } from "react-icons/cg";

import { IconType } from "react-icons";
import { ReactText } from "react";

import { ArrowBackIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import { HeaderTabs } from "./HeaderTabs";
interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Live interaction", icon: FiMessageSquare },
  { name: "Switch event", icon: HiOutlineSwitchHorizontal },
  { name: "Dark mode", icon: CgDarkMode },
  { name: "About Slido", icon: CgInfo },
];

export function Sidebar({ children }: { children: ReactNode }) {
  //const { isOpen, onOpen, onClose } = useDisclosure();
  // 複数のuseDisclosureを利用したいので、別名をつける
  // メニュー機能用
  const {
    isOpen: isOpenMenu,
    onOpen: onOpenMenu,
    onClose: onCloseMenu,
  } = useDisclosure();

  // // 検索機能用
  // const {
  //   isOpen: isOpenSearch,
  //   onOpen: onOpenSearch,
  //   onClose: onCloseSearch,
  // } = useDisclosure();

  return (
    // 100vh問題(ブラウザの種類によって、100vhを指定しても、余分なスクロールが表示される）
    <Box bg={useColorModeValue("gray.100", "gray.900")} minH="100vh">
      <SidebarContent
        onClose={() => onCloseMenu}
        display={{ base: "none", lg: "block" }} // lgサイズ以上はPC用のメニュを表示する
      />

      <Drawer placement="left" onClose={onCloseMenu} isOpen={isOpenMenu}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            bgColor={"#2A56A7"}
            color={"white"}
          >
            <Flex
              h="120px"
              alignItems="end"
              // mx="8"
              justifyContent="space-between"
            >
              <Stack spacing={0} direction={"column"} align={"left"}>
                <Text fontSize={"sm"} color={"white"} fontWeight={"bold"}>
                  TEST
                </Text>
                <Stack spacing={0} direction={"column"} align={"left"}>
                  <Text fontSize={"xs"} color={"white"}>
                    May 1-4, 2023
                  </Text>
                  <Text fontSize={"xs"} color={"white"}>
                    # 1234 123
                  </Text>
                </Stack>
              </Stack>
              <CloseButton
                display={{ base: "flex", lg: "none" }}
                onClick={onCloseMenu}
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            {LinkItems.map((link) => (
              // テストサイズ修正
              <Text fontSize="sm">
                <NavItem key={link.name} icon={link.icon}>
                  {link.name}
                </NavItem>
              </Text>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav
        display={{ base: "flex", lg: "none" }}
        onOpenMenu={onOpenMenu}
      />

      {/* ウィンドウ幅がlg以上の場合は、margin-leftを60確保する */}
      <Box ml={{ base: 0, lg: 60 }} p="2">
        {/* メインコンテンツの位置 */}
        {/* <Box alignItems={"center"}> </Box> */}
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", lg: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      {/* Slidebarのタイトルと閉じるボタンを表示する場合 */}
      {/* <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          TEST
        </Text>
        <CloseButton display={{ base: "flex", lg: "none" }} onClick={onClose} />
      </Flex> */}
      {LinkItems.map((link) => (
        // テストサイズ修正
        <Text fontSize="sm">
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        </Text>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="0"
        // borderRadius="lg"
        role="group"
        cursor="pointer"
        // マウスホバーで色をつけない
        // _hover={{
        //   bg: "cyan.400",
        //   color: "white",
        // }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            // マウスホバーで色をつけない
            // _groupHover={{
            //   color: "white",
            // }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpenMenu: () => void;
}

// モバイスサイズで表示する場合のヘッダーです。
const MobileNav = ({ onOpenMenu, ...rest }: MobileProps) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("#2A56A7", "gray.900")}
      px={4}
      display={{ lg: "none" }} // lgサイズ以上で非表示にする(Slidoではlgが境界)
    >
      <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
        {/* メニューアイコン */}

        <Stack
          spacing={1}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={<HamburgerIcon boxSize={6} />}
            aria-label={"Open Menu"}
            // display={{ lg: "none" }} // lgサイズ以上で非表示にする(Slidoではlgが境界)
            onClick={onOpenMenu}
            backgroundColor={"#2A56A7"}
            color={"white"}
            mr={2}
          />

          {/* モバイル以上の場合に表示する */}
          <Text display={{ base: "none", md: "flex" }} color={"white"}>
            TEST for mobile
          </Text>
        </Stack>

        <Center
          display={{ md: "none" }}
          // bgColor={"red"}
          alignContent={"center"}
        >
          {/* スマホサイズの場合のタイトル */}
          <Text color={"white"}>TEST</Text>
        </Center>

        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          display={{ base: "none", md: "flex" }}
          // モバイルサイズ以上の場合のみ表示する
        >
          <Container
            maxW="md"
            // bgColor={"red"}
          >
            <HeaderTabs />
          </Container>
        </Flex>

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

      <Flex
        h={10}
        alignItems={"center"}
        justifyContent={"space-between"}
        display={{ md: "none" }} // スマホサイズの場合のみ表示する
      >
        <Container maxW="3xl">
          <Tabs position="relative" variant="unstyled">
            <TabList>
              <Tab p={"8px"} flex={1} minW={"180px"}>
                <Button leftIcon={<ChatIcon />} color={"white"} variant="link">
                  Q&A
                </Button>
              </Tab>
              <Tab p={"8px"} flex={1} minW={"180px"}>
                <Button
                  leftIcon={<AtSignIcon />}
                  color={"white"}
                  variant="link"
                >
                  Polls
                </Button>
              </Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="1.7px"
              bg="white"
              borderRadius="1px"
            />
          </Tabs>
        </Container>
      </Flex>
    </Box>
  );
};
