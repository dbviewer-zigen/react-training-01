import { Box, Button } from "@chakra-ui/react";
import React from "react";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export const App = () => {
  return (
    <>
      <Box>
        {/* ヘッダー */}
        <Header />
        {/* スライドバー */}
        <Sidebar>
          {/* display='flex'がついている状態でjustifyContent='center'をつけると縦方向に真ん中寄せ
        // alignItems='center'をつけると横方向に真ん中寄せします。 */}

          <Box p={4}>
            {/* ここがメインコンテンツ */}
            this is main contents
          </Box>
        </Sidebar>
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
        >
          Ask
        </Button>
      </Box>
    </>
  );
};
