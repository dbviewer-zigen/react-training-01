import React from "react";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Box, IconButton } from "@chakra-ui/react";
import { EventList } from "./components/EventList";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
export const App = () => {
  return (
    <>
      <Box>
        {/* スタイルシートを拡張する方法 */}
        {/* <Box
          ...
          sx={{
            '&::-webkit-scrollbar': {
              width: '16px',
              borderRadius: '8px',
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
          }}
      > */}

        {/* ヘッダー */}
        <Header />

        {/* スライドバー */}
        <Sidebar>
          {/* display='flex'がついている状態でjustifyContent='center'をつけると縦方向に真ん中寄せ
        // alignItems='center'をつけると横方向に真ん中寄せします。 */}

          <Box p={4}>
            {/* ここがメインコンテンツ */}
            <EventList />
          </Box>
        </Sidebar>

        {/* FloatingActionButton */}
        <IconButton
          colorScheme="teal"
          aria-label="Question"
          icon={<QuestionOutlineIcon boxSize={5} />}
          position="fixed"
          right={6}
          bottom={6}
          // w={14}
          // h={14}
          boxSize={14}
          rounded="full"
          p={2}
          boxShadow="md"
        />
      </Box>
    </>
  );
};
