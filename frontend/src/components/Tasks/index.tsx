import { VStack, HStack, Box, Text } from '@chakra-ui/react';
import CardsStatus from '../Cards/CardsStatus';
import { CardTasks } from '../Cards/CardsTasks';

function CardsContainer() {
  const cardStatus = [
    {
      title: 'A definir',
      amount: 10
    },
    {
      title: 'A fazer',
      amount: 7
    },
    {
      title: 'Fazendo',
      amount: 5
    },
    {
      title: 'Finalizadas',
      amount: 113
    }
  ];
  return (
    <VStack w="70%" gap={4}>
      <Box w="full" borderRadius={10} bg="gray.800" padding={5}>
        <HStack w="full" justifyContent="space-between">
          <Text color="teal">Relatório semanal</Text>
          <Text color="teal">Tarefas: 10</Text>
        </HStack>
        <HStack justifyContent="space-between">
          {cardStatus.map(infos => (
            <CardsStatus
              key={infos.title}
              title={infos.title}
              amount={infos.amount}
            />
          ))}
        </HStack>
      </Box>
      <Box
        w="full"
        h="50vh"
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
        <Box w="full" borderRadius={10} bg="gray.800" padding={5}>
          <Text color="teal" m="0 0 1rem 0">
            Tarefas com prioridade
          </Text>
          <VStack justifyContent="space-between">
            {cardStatus.map(infos => (
              <CardTasks key={infos.title} title={infos.title} />
            ))}
          </VStack>
          <Text color="teal" m="1rem 0 1rem 0">
            Outras tarefas
          </Text>
          <VStack justifyContent="space-between">
            {cardStatus.map(infos => (
              <CardTasks key={infos.title} title={infos.title} />
            ))}
          </VStack>
        </Box>
      </Box>
    </VStack>
  );
}

export default CardsContainer;
