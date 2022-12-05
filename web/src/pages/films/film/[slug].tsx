import { Box, VStack, Text, Image } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useContext } from "react";
import { FilmsContext } from "../../../contexts/filmsContext";
import { useFilms } from "../../../hooks/useFilms";
import { api } from "../../../services/api";

interface FilmProps {
  id: string;
  title: string;
  description: string;
  image: string;
  genre: string;
  movie_banner: string;
  direction: string;
  producer: string;
  running_time: string;
  rt_score: string;
  duration: string;
}

export default function Film(props: FilmProps) {
  // {title, image, movie_banner, description, direction, producer, running_time, rt_score, duration}: FilmProps
  // const { dados } = useFilms();

  return (
    <Box
      width="100%"
      h="60%"
      backgroundImage={`url(${props.image})`}
      backgroundPosition="top center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <VStack>
        <Image src={`url(${props.image})`} alt={props.title} />
        <Text>{props.title}</Text>
      </VStack>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get("/films");
  const paths = data.map((film: FilmProps) => ({
    params: {
      slug: film.id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params;
  const response = await api.get("/films/film", {
    data: {
    id: slug
  }
}
);
  const film = data.map((film: FilmProps) => ({
    slug: film.id,
    id: film.id,
    title: film.title,
    description: film.description,
    image: film.image,
    movie_banner: film.movie_banner,
    // director: film.director,
    // producer: film.producer,
    // running_time: film.running_time,
    // rt_score: film.rt_score,
    // release_date: film.release_date,
    genre: film.genre,
  }));
  return {
    props: { film },
  };
};
