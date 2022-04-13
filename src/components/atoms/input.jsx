import React from 'react';
import {
  Input as Inputan,
} from '@chakra-ui/input';

const Input = ({ get }) => (
  <Inputan
    onChange={(e) => get(e.target.value)}
    type="text"
    className="form-control"
    placeholder="type your name track"
    aria-label="type your name track"
    aria-describedby="basic-addon2"
  />
);

export default Input;
