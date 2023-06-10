import { Avatar, AvatarGroup } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import React from "react";

export const Avator = () => {
  return (
    <AvatarGroup spacing="1rem">
      <Avatar bg="red.500" icon={<AiOutlineUser fontSize="1.5rem" />} />
      <Avatar bg="teal.500" />
    </AvatarGroup>
  );
};
