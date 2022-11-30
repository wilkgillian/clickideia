import { Box, HStack, Text, Image, Flex, styled } from "@chakra-ui/react";
import { ReactNode } from "react";
import Carousel, { ReactElasticCarouselProps } from "react-elastic-carousel";
// import "./styles.css";

import Banner from "../../../public/assets/banner.png";
import CarouselCategories from "../Carousel/CarouselCategories";
import { useFilms } from "../hooks/useFilms";

interface WrapperProps {
  // categories: string;
  dados: FilmsProps[];
}
interface CarouselProps extends ReactElasticCarouselProps {
  children: ReactNode;
}
interface FilmsProps {
  id: string;
  image: string;
  title: string;
  description: string;
}

export default function Wrapper({ dados }: WrapperProps) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3, itemsToScroll: 4 },
    { width: 1200, itemsToShow: 10, itemsToScroll: 6 },
  ];
  return (
    <Box p={10}>
      <HStack gap={5} display="flex" alignItems="center">
        <Carousel breakPoints={breakPoints} enableAutoPlay={true} itemPadding={[1]}>
          {dados.map((inf) => (
            // <Flex key={inf.id} h={300} w={200}>
            <Image src={inf.image} alt={inf.title} borderRadius={10} />
            // </Flex>
          ))}
        </Carousel>
      </HStack>
    </Box>
  );
}

