import React from "react";
import {
  Center,
  Flex,
  Square,
  Text,
  Box,
  Container,
  Stack,
} from "@chakra-ui/react";
export const Test = () => {
  return (
    <div>
      <Flex color="white" direction={"column"} h={"100vh"}>
        <Center bg="green.500" h={"48px"}>
          <Text>ヘッダ</Text>
        </Center>
        <Flex direction={"row"} flexGrow={1}>
          <Box bg="red.500" w={"96px"}>
            サイドバー
          </Box>
          <Box bg="blue.500" flexGrow={1}>
            コンテンツ
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};
