import { Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { buttonLogin } from "../../interface/utils";

function ButtonLogin({ name, event, color }: buttonLogin) {
  return (
    <Button
      data-testid="button-login"
      onClick={event}
      w={"full"}
      mt={8}
      bg={useColorModeValue(color, color)}
      color={"white"}
      rounded={"md"}
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "lg",
      }}
    >
      {name}
    </Button>
  );
}

export default ButtonLogin;
