import { Box, Flex, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { BsPlayFill } from 'react-icons/bs';

interface CardProps {
  image: string;
  id: string;
}

export function Card({ image, id }: CardProps) {
  return (
    <Box
      width={200}
      minW={200}
      height={300}
      borderRadius={10}
      backgroundImage={`url(${image})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      transform={'scale(0.98)'}
      transition="0.2s"
      _hover={{
        boxShadow: '0 0 10px 10px #000',
        transform: 'scale(1)',
        zIndex: 1
      }}
    >
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        opacity={1}
        padding={5}
        bg="rgba(0, 0,0, 0.3)"
        transition="0.2s"
        _hover={{ bg: 'rgba(0, 0,0, 0)' }}
      >
        <Link href={`/films/${id}`} passHref>
          <Flex as="button">
            <Icon
              as={BsPlayFill}
              transition="0.2s"
              fontSize={100}
              color="#fff"
              textShadow="0 0 10px 10px #000"
              opacity={0.2}
              _hover={{
                opacity: 1
              }}
            />
          </Flex>
        </Link>
      </Box>
    </Box>
  );
}
