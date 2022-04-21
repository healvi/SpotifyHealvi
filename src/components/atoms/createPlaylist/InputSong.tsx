/* eslint-disable react/no-children-prop */
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { setQuery } from "../../../store/Tracks";

const InputSong = () => {
  const query = useAppSelector((state) => state.Track.query);
  const dispatch = useAppDispatch();
  return (
    <InputGroup maxW={"xl"}>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        data-testid="inputsong"
        _light={{ color: "black" }}
        value={query}
        type="text"
        name="q"
        placeholder="Search Song"
        onChange={(e) => dispatch(setQuery(e.target.value))}
      />
    </InputGroup>
  );
};

export default InputSong;
