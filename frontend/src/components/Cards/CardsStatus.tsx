import { VStack, Text } from '@chakra-ui/react';

interface CardsStatusProps {
  title: string;
  amount: number;
}

function CardsStatus({ title, amount }: CardsStatusProps) {
  return (
    <VStack justifyContent="center">
      <Text m={2} fontSize={12}>
        {title}
      </Text>
      <VStack
        borderRadius="50%"
        border="1px solid teal"
        w={20}
        h={20}
        alignItems="center"
        justifyContent="center"
        color="teal"
      >
        <Text fontSize={26} lineHeight={1} fontWeight="bold">
          {amount}
        </Text>
        <Text lineHeight={0.5} fontSize={12}>
          Tarefas
        </Text>
      </VStack>
    </VStack>
  );
}

export default CardsStatus;
