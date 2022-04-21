import React from "react";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { User } from "../../../interface/UserData";
type props = {
  user: User;
};
const CardProfile = ({ user }: props) => {
  return (
    <Box
      maxW={"270px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Image
        h={"120px"}
        w={"full"}
        src={
          "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        }
        objectFit={"cover"}
      />
      <Flex justify={"center"} mt={-12}>
        <Avatar
          size={"xl"}
          src={
            user.images.length !== 0
              ? user.images[0].url
              : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          }
          css={{
            border: "2px solid white",
          }}
        />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} justify={"center"} align={"center"} mb={5}>
          <Heading
            fontSize={"2xl"}
            fontWeight={500}
            fontFamily={"body"}
            justifyItems={"center"}
          >
            <Text>Hello, {user.display_name}</Text>
          </Heading>
          <Text color={"gray.500"} align={"center"}>
            Followers : {user.followers.total}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default CardProfile;
