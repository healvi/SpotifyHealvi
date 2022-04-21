import { Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useAppDispatch } from "../../../app/hooks";

import { buttonTrack } from "../../../interface/utils";
import { setModalTrack } from "../../../store/Tracks";

function ButtonTrack({
  data,
  isSelect,
  name,
  color,
  select,
  openModal,
}: buttonTrack) {
  const dispatch = useAppDispatch();
  return isSelect ? (
    <Button
      onClick={() => {
        openModal();
        dispatch(setModalTrack(data));
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
        openModal();
        dispatch(setModalTrack(data));
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

export default ButtonTrack;
