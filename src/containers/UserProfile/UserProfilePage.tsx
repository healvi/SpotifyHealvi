import React from "react";
import { Center, Flex, Image, Show, Stack } from "@chakra-ui/react";
import { useAppSelector } from "../../app/hooks";
import CardOri from "../../components/atoms/profile/CardProfile";
const UserProfile = () => {
  const user = useAppSelector((state) => state.User.user);

  return (
    <Stack minH={"100vh"} direction={{ base: "column", sm: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          {/* card */}
          <Center py={6}>
            <CardOri user={user} />
          </Center>
          {/* Endcard */}
        </Stack>
      </Flex>
      <Show breakpoint="(min-width: 560px)">
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1504509546545-e000b4a62425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
          />
        </Flex>
      </Show>
    </Stack>
    //
  );
};

export default UserProfile;
