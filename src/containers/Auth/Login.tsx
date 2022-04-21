import React from "react";
import {
  Flex,
  Heading,
  Stack,
  Image,
  Avatar,
  Box,
  Center,
  Text,
  useColorModeValue,
  Show,
} from "@chakra-ui/react";
import { RedirectLogin } from "../../api/res/AuthApi";
import ButtonLogin from "../../components/atoms/ButtonLogin";

const Login = () => {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", sm: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          {/* card */}
          <Center py={6}>
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
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
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
                  >
                    Helo GIGIH
                  </Heading>
                  <Text color={"gray.500"} align={"center"}>
                    Silahkan Login Untuk melihat Karyaku By Spotify
                  </Text>
                </Stack>

                <ButtonLogin
                  name="LOGIN"
                  event={RedirectLogin}
                  color="#2F855A"
                />
              </Box>
            </Box>
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
  );
};

export default Login;
