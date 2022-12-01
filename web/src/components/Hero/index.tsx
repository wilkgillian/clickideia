import { Box, Text, VStack, HStack } from '@chakra-ui/react';
import { BsPlayCircle } from 'react-icons/bs';

interface DestakProps {
  title: string;
  subtitle?: string;
  genre: string;
  movie_banner: string;
}

export default function Destak({
  title,
  subtitle,
  genre,
  movie_banner
}: DestakProps) {
  return (
    <Box display="flex" w="100%" p={10}>
      <Box
        w="100%"
        h={400}
        borderRadius={20}
        backgroundImage={`url(${movie_banner})`}
        backgroundPosition="top center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Box
          w="100%"
          h="inherit"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="left"
          textAlign="left"
          bgGradient="linear(to-r, #000, transparent)"
          borderRadius="inherit"
        >
          <VStack ml={5} alignItems="left" p={9}>
            <Text fontSize={16} textTransform="uppercase">
              Destaque
            </Text>
            <Text fontSize={64} fontWeight="bold">
              {title}
            </Text>
            <Text fontSize={40} fontWeight="medium">
              {subtitle}
            </Text>
            <Text fontSize={24}>{genre}</Text>
            <HStack>
              <BsPlayCircle fontSize={30} />
              <Text fontSize={26}>Veja o trailer</Text>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
