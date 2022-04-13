import { Image } from '@chakra-ui/react';
import React from 'react';

const Img = ({ data }) => (
  <Image
    src={data}
    alt={`Picture of ${data.name}`}
    maxW="sm"
    roundedTop="lg"
  />
);
export default Img;
