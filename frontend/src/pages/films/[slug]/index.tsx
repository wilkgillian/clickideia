import {
  Box,
  VStack,
  Text,
  Image,
  HStack,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import CardInfo from "../../../components/Cards/Infos";
import ModalVideo from "../../../components/ModalVideo";
import { api } from "../../../services/api";

interface FilmProps {
  id: string;
  title: string;
  description: string;
  image: string;
  genre: string;
  movie_banner: string;
  movie_url: string;
  direction: string;
  producer: string;
  running_time: string;
  rt_score: string;
  release_date: string;
}
interface Film {
  film: FilmProps;
}

export default function Film({ film }: Film) {
  return (
    <Box
      width="100%"
      h="100vh"
      backgroundImage={`url(${film.movie_banner})`}
      backgroundPosition="top center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <HStack
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.3)"
        display="flex"
        transition="0.2s"
        _hover={{
          backdropFilter: "blur(5px) saturate(100%)",
        }}
        padding={10}
      >
        <VStack w="50%" h="100%" padding="2rem 2rem 2rem 0">
          <Image
            src={film.image}
            width="80%"
            height="auto"
            alt={film.title}
            margin="auto"
            borderRadius={20}
            boxShadow="0 0 10px 5px #000"
            border="1px solid #fff"
          />
        </VStack>
        <VStack w="100%" h="100%" gap={4} padding={10}>
          <Text color="gray.100" fontSize={42} fontWeight="bold" mt={10}>
            {film.title}
          </Text>
          <Divider />
          <Text fontSize={20} textShadow="dark-lg">
            {film.description}
          </Text>
          <Flex w="100%" gap={4}>
            <CardInfo text={film.rt_score} />
            <CardInfo text={film.running_time} />
            <CardInfo text={film.release_date} />
          </Flex>
          <Flex w="100%" gap={4}>
            <ModalVideo title={film.title}>
              <Box
                as="video"
                w="100%"
                h="100%"
                autoPlay
                controls
                controlsList="nodownload"
              >
                <source src={film.movie_url} type="video/mp4" />
              </Box>
            </ModalVideo>
          </Flex>
        </VStack>
      </HStack>
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

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await api.get("/films/film", {
    data: {
      id: context.params?.slug,
    },
  });
  const film = {
    slug: response.data.id,
    id: response.data.id,
    title: response.data.title,
    description: response.data.description,
    image: response.data.image,
    movie_banner: response.data.movie_banner,
    movie_url: response.data.movie_url,
    director: response.data.director,
    producer: response.data.producer,
    running_time: response.data.running_time,
    rt_score: response.data.rt_score,
    release_date: response.data.release_date,
    genre: response.data.genre,
  };
  return {
    props: { film },
  };
};
