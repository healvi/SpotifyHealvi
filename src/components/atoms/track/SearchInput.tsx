/* eslint-disable react/no-children-prop */
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { setQuery } from "../../../store/Tracks";

const SearchInput = () => {
  const query = useAppSelector((state) => state.Track.query);
  const dispatch = useAppDispatch();

  return (
    <InputGroup maxW={"xl"}>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        _light={{ color: "black" }}
        value={query}
        type="text"
        name="q"
        placeholder="Search Music"
        onChange={(e) => dispatch(setQuery(e.target.value))}
      />
    </InputGroup>
  );
};

export default SearchInput;
