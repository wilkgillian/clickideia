import { Box, HStack, Text, Image } from '@chakra-ui/react';
import Carousel from 'react-elastic-carousel';

import { useFilms } from '../hooks/useFilms';

interface CarouselProps {
  categories: string;
}

export default function CarouselCategories({ categories }: CarouselProps) {
  const { dados } = useFilms();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1200, itemsToShow: 7.5, itemsToScroll: 6 }
  ];
  return (
    <Box p={10}>
      <Text fontWeight="normal" fontSize={22} mb={4}>
        {categories}
      </Text>
      <HStack alignItems="center" width="100%">
        <Carousel
          breakPoints={breakPoints}
          enableAutoPlay={true}
          itemPadding={[4]}
          itemPosition="START"
        >
          {dados.map(inf => (
            <Image
              key={inf.id}
              src={inf.image}
              alt={inf.title}
              borderRadius={10}
              height={350}
              width={250}
            />
          ))}
        </Carousel>
      </HStack>
    </Box>
  );
}
