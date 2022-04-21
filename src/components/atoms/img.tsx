import React from "react";
import { Image } from "@chakra-ui/react";
type props = {
  data: string;
};
const Img = ({ data }: props) => (
  <Image src={data} alt={`Picture`} maxW="sm" roundedTop="lg" />
);
export default Img;
