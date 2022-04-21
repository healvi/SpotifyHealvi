import React from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";

import { buttonSong } from "../../../interface/utils";

function ButtonSong({ data, isSelect, name, color, select }: buttonSong) {
  return isSelect ? (
    <Button
      data-testid="buttonsong"
      onClick={() => {
        select(data);
      }}
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
  ) : (
    <Button
      onClick={() => {
        select(data);
      }}
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

export default ButtonSong;
