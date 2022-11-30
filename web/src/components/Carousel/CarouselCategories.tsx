import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Destak from "../Hero";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Wrapper from "../Wrapper";
import { useFilms } from "../hooks/useFilms";
import { Text } from "@chakra-ui/react";

interface CarouselProps {
  categories: string;
}

export default function CarouselCategories({ categories }: CarouselProps) {
  const { dados } = useFilms();
  return (
    // <Carousel autoPlay={true} axis="horizontal" infiniteLoop={true}>
    //   {/* <Text fontWeight="bold" fontSize={22}>
    //     {categories}
    //   </Text> */}
    <div>
      {/* {dados.map((films) => ( */}
        <Wrapper dados={dados} />
      {/* ))} */}
    </div>
    // </Carousel>
  );
}
