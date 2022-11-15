import { Box, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';

import Banner from '../../../public/assets/banner.png';

interface WrapperProps {
  categories: string;
}

export default function Wrapper({ categories }: WrapperProps) {
  return (
    <Box p={10}>
      <Text fontSize={24} fontWeight="bold" mt={-10} mb={5}>
        {categories}
      </Text>
      <HStack gap={5}>
        <Image src={Banner} width={200} alt="banner" />
        <Image src={Banner} width={200} alt="banner" />
        <Image src={Banner} width={200} alt="banner" />
        <Image src={Banner} width={200} alt="banner" />
        <Image src={Banner} width={200} alt="banner" />
        <Image src={Banner} width={200} alt="banner" />
      </HStack>
    </Box>
  );
}
