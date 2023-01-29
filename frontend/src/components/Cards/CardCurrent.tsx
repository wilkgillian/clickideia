import { Box, Text } from '@chakra-ui/react';

interface CardCurrentProps {
  cardContent: string;
}

function CardCurrent({ cardContent }: CardCurrentProps) {
  return (
    <Box
      w="full"
      h="auto"
      borderRadius={5}
      bg="gray.800"
      p={5}
      maxH={100}
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px'
        },
        '&::-webkit-scrollbar-track': {
          width: '6px'
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#2C3440',
          borderRadius: '24px'
        }
      }}
    >
      <Text as="h1" color="teal" mb={2}>
        Observação
      </Text>
      <Text as="p" textOverflow="ellipsis">
        {cardContent}
      </Text>
    </Box>
  );
}

export default CardCurrent;
