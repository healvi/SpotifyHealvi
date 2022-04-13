import { Text } from '@chakra-ui/react';
import React from 'react';

const Title = ({ data }) => <Text fontSize="xl">{data}</Text>;

const Subtitle = ({ data }) => <Text fontSize="sm">{data.name}</Text>;

export { Title, Subtitle };
