import React from "react";
import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  TabIndicator,
  Button,
  Text,
} from "@chakra-ui/react";
import { PhoneIcon, AtSignIcon, ChatIcon } from "@chakra-ui/icons";

export const HeaderTabs = () => {
  return (
    <Tabs position="relative" variant="unstyled">
      <TabList>
        <Tab p={"15px"} flex={1} minW={"180px"} color={"white"}>
          <ChatIcon mr={2} />
          <Text size={"md"} fontWeight={"bold"}>
            Q&A
          </Text>
        </Tab>
        <Tab p={"15px"} flex={1} minW={"180px"} color={"white"}>
          <Text size={"md"} fontWeight={"bold"}>
            Polls
          </Text>
        </Tab>
      </TabList>
      <TabIndicator mt="-5px" height="1.7px" bg="white" borderRadius="1px" />
      {/* <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels> */}
    </Tabs>
  );
};
