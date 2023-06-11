import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Button,
} from "@chakra-ui/react";
import { PhoneIcon, AtSignIcon, ChatIcon } from "@chakra-ui/icons";

export const HeaderTabs = () => {
  return (
    <Tabs position="relative" variant="unstyled">
      <TabList>
        <Tab p={"18px"} flex={1} minW={"180px"}>
          <Button leftIcon={<ChatIcon />} color={"white"} variant="link">
            Q&A
          </Button>
        </Tab>
        <Tab p={"18px"} flex={1} minW={"180px"}>
          <Button leftIcon={<AtSignIcon />} color={"white"} variant="link">
            Polls
          </Button>
        </Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="1.7px" bg="white" borderRadius="1px" />
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
