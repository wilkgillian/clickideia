import { Box, HStack, Text, Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';

import Banner from '../../../public/assets/banner.png';
import { useFilms } from '../hooks/useFilms';

interface WrapperProps {
  categories: string;
  dados: FilmsProps[];
}
interface FilmsProps {
  id: string;
  image: string;
}

export default function Wrapper({ categories, dados }: WrapperProps) {
  return (
    <Box p={10}>
      <Text fontSize={24} fontWeight="bold" mt={-10} mb={5}>
        {categories}
      </Text>
      <HStack gap={5}>
        <Carousel autoPlay={true} axis="horizontal" infiniteLoop={true}>
          {dados.map(inf => (
            <Image
              key={inf.id}
              src={inf.image}
              width={200}
              alt="banner"
              borderRadius={10}
            />
          ))}
        </Carousel>
      </HStack>
    </Box>
  );
}
