import { FC, useEffect } from "react";
import { BoxProps, Icon, useBoolean } from "@chakra-ui/react";
import { RiSearchLine, RiArrowUpSLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

import { SearchIcon } from "@chakra-ui/icons";
export const ScrollToTop: FC = () => {
  return (
    // アイコンのサイズが大きすぎる
    <Icon
      cursor="pointer"
      position="fixed"
      right={6}
      bottom={6}
      as={SearchIcon}
      bgColor="gray.300"
      color="gray.500"
      // w={14}
      // h={14}
      boxSize={14}
      rounded="full"
      p={2}
      boxShadow="md"
      _hover={{
        bgColor: "gray.200",
      }}
    />
  );
};
