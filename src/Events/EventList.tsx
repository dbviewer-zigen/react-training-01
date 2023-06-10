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
} from "@chakra-ui/react";
import { HamburgerIcon, CalendarIcon, AddIcon } from "@chakra-ui/icons";
import React from "react";
import { RiFilter3Fill, RiMore2Line } from "react-icons/ri";
export const EventList = () => {
  return (
    <center>
      {/* 幅が1024pxまでは100%に伸び縮みする */}
      <Flex
        w={"100%"}
        maxWidth={"1024px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {/* Past(タイトル) */}
        <Stack spacing={1} direction={"row"} align={"left"} ml={6}>
          <Text fontWeight={"bold"}>Past</Text>
        </Stack>
        {/* フィルタおよびCreateボタン */}
        <Stack spacing={1} direction={"row"} align={"right"} mr={6}>
          <IconButton
            size={"md"}
            icon={<RiFilter3Fill size={20} />}
            aria-label={"Open Filter"}
          />
          <Button
            size={"md"}
            leftIcon={<AddIcon />}
            colorScheme="teal"
            variant="solid"
          >
            Create Slido
          </Button>
        </Stack>
      </Flex>
      <Spacer height={4} />

      {/* 幅が1024pxまでは100%に伸び縮みする */}
      <VStack w={"100%"} maxWidth={"1024px"} spacing={2} align="stretch">
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
                <IconButton
                  size={"md"}
                  icon={<RiMore2Line size={20} />}
                  aria-label={"Open more"}
                  bgColor={"white"}
                  color={"gray"}
                />
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
                <IconButton
                  size={"md"}
                  icon={<RiMore2Line size={20} />}
                  aria-label={"Open more"}
                  bgColor={"white"}
                  color={"gray"}
                />
              </Stack>
            </Flex>
          </CardBody>
        </Card>
      </VStack>
    </center>
  );
};
