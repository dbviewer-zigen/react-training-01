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
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";

import { ArrowBackIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Events", icon: FiHome },
  { name: "Teams", icon: FiTrendingUp },
  { name: "Analytics", icon: FiCompass },
  { name: "Tutorials", icon: FiStar },
];

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  //const { isOpen, onOpen, onClose } = useDisclosure();
  // 複数のuseDisclosureを利用したいので、別名をつける
  // メニュー機能用
  const {
    isOpen: isOpenMenu,
    onOpen: onOpenMenu,
    onClose: onCloseMenu,
  } = useDisclosure();

  // 検索機能用
  const {
    isOpen: isOpenSearch,
    onOpen: onOpenSearch,
    onClose: onCloseSearch,
  } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onCloseMenu}
        display={{ base: "none", lg: "block" }} // lgサイズ以上はPC用のメニュを表示する
      />

      {/* Charaku Teamplateにあったサンプル */}
      {/* <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer> */}

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
              <CloseButton
                display={{ base: "flex", lg: "none" }}
                onClick={onCloseMenu}
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            {LinkItems.map((link) => (
              // テストサイズ修正
              <Text fontSize="sm" fontWeight={"bold"}>
                <NavItem key={link.name} icon={link.icon}>
                  {link.name}
                </NavItem>
              </Text>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      {isOpenSearch ? (
        <MobileNavForSearch
          display={{ base: "flex", lg: "none" }}
          onCloseSearch={onCloseSearch}
        />
      ) : (
        <MobileNav
          display={{ base: "flex", lg: "none" }}
          onOpenMenu={onOpenMenu}
          onOpenSearch={onOpenSearch}
        />
      )}

      {/* ウィンドウ幅がlg以上の場合は、margin-leftを60確保する */}
      <Box ml={{ base: 0, lg: 60 }} p="2">
        {/* メインコンテンツの位置 */}
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
  onOpenSearch: () => void;
}

// モバイスサイズで表示する場合のヘッダーです。
const MobileNav = ({ onOpenMenu, onOpenSearch, ...rest }: MobileProps) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("#2A56A7", "gray.900")}
      px={4}
      display={{ lg: "none" }} // lgサイズ以上で非表示にする(Slidoではlgが境界)
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/* メニューアイコン */}
        <IconButton
          size={"md"}
          icon={<HamburgerIcon boxSize={6} />}
          aria-label={"Open Menu"}
          onClick={onOpenMenu}
          backgroundColor={"#2A56A7"}
          color={"white"}
        />

        {/* タイトル */}
        <Stack spacing={8} alignItems={"center"}>
          <Text fontSize={"md"} color={"white"} fontWeight={"bold"}>
            Events
          </Text>
        </Stack>

        {/* 検索ボタン */}
        <IconButton
          size={"md"}
          icon={<SearchIcon boxSize={5} />}
          aria-label={"Open Search"}
          onClick={onOpenSearch}
          backgroundColor={"#2A56A7"}
          color={"white"}
        />
      </Flex>
    </Box>
  );
};

interface MobileForSearchProps extends FlexProps {
  onCloseSearch: () => void;
}

// モバイスサイズで表示する場合のヘッダー（検索用）です。
const MobileNavForSearch = ({
  onCloseSearch,
  ...rest
}: MobileForSearchProps) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("#2A56A7", "gray.900")}
      px={4}
      display={{ lg: "none" }} // lgサイズ以上で非表示にする(Slidoではlgが境界)
    >
      <Flex h={16} alignItems={"center"}>
        {/* 戻るアイコン */}
        <IconButton
          size={"md"}
          icon={<ArrowBackIcon boxSize={6} />}
          aria-label={"Open Menu"}
          onClick={onCloseSearch}
          backgroundColor={"#2A56A7"}
          color={"white"}
        />
        {/* Flexの中で、横幅いっぱいに広げるために、 flex="1"を設定 */}
        <Stack spacing={1} alignItems={"center"} flex="1">
          <InputGroup>
            {/* <InputLeftElement pointerEvents={"none"}>
              <SearchIcon color="white" />
            </InputLeftElement> */}
            <Input
              type="text"
              placeholder="Search"
              // width={"auto"}
              // w="100%"
              _placeholder={{ color: "gray.300" }}
              // 通常表示で枠に色をつけない
              border={"none"}
              color={"white"}
              // フォーカスされた時に枠の色をつけないようにする
              _focusVisible={{
                outline: "none",
              }}
            ></Input>
          </InputGroup>
        </Stack>

        {/* タイトル */}
        {/* <Stack spacing={8} alignItems={"center"}>
          <Text fontSize={"md"} color={"white"} fontWeight={"bold"}>
            検索
          </Text>
        </Stack> */}
      </Flex>
    </Box>
  );
};
