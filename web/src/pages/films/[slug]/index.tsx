import {
  Box,
  VStack,
  Text,
  Image,
  HStack,
  Divider,
  Flex,
  Button
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { BsPlayFill } from 'react-icons/bs';
import CardInfo from '../../../components/Cards/Infos';
import { api } from '../../../services/api';

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
      display="flex"
    >
      <HStack
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.3)"
        display="flex"
        transition="0.2s"
        _hover={{
          backdropFilter: 'blur(5px) saturate(100%)'
          // backdropFilter: 'none'
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
            <Button
              colorScheme="none"
              padding={0}
              bgColor="rgba(0, 255, 255, 0.3)"
              w={70}
              h={70}
              transform="scale(0.9)"
              _hover={{
                transform: 'scale(1)'
              }}
              borderRadius={50}
              boxShadow="0 0 10px 5px #000"
              fontSize={50}
            >
              <BsPlayFill color="#000" />
            </Button>
          </Flex>
        </VStack>
      </HStack>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('/films');
  const paths = data.map((film: FilmProps) => ({
    params: {
      slug: film.id
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const response = await api.get('/films/film', {
    data: {
      id: context.params?.slug
    }
  });
  const film = {
    slug: response.data.id,
    id: response.data.id,
    title: response.data.title,
    description: response.data.description,
    image: response.data.image,
    movie_banner: response.data.movie_banner,
    director: response.data.director,
    producer: response.data.producer,
    running_time: response.data.running_time,
    rt_score: response.data.rt_score,
    release_date: response.data.release_date,
    genre: response.data.genre
  };
  return {
    props: { film }
  };
};
