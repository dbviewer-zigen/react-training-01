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
      {/* <Flex>
        <Box bgColor={"yellow"} w={"96px"}>
          テキスト１
        </Box>
        <Box bgColor={"green"} w={"96px"} flexGrow={1}>
          テキスト２
        </Box>
        <Box bgColor={"red"} w={"96px"}>
          テキスト３
        </Box>
      </Flex> */}
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
