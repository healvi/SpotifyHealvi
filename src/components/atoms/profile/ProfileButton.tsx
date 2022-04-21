import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { User } from "../../../interface/UserData";

type props = {
  me: User;
};
const ProfileButton = ({ me }: props) => {
  return me ? (
    <HStack>
      <Avatar
        size={"sm"}
        src={
          !me.images
            ? "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            : me.images.length !== 0
            ? me.images[0].url
            : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
        }
      />
      <VStack
        display={{ base: "none", md: "flex" }}
        alignItems="flex-start"
        spacing="1px"
        ml="2"
      >
        <Text fontSize="sm">{me.display_name}</Text>
        <Text fontSize="xs" color="gray.600">
          {me.type}
        </Text>
      </VStack>
      <Box display={{ base: "none", md: "flex" }}>
        <FiChevronDown />
      </Box>
    </HStack>
  ) : (
    <Text fontSize="xs" color="red.600">
      Anda Belum Login
    </Text>
  );
};

export default ProfileButton;
