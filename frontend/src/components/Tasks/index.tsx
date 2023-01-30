import { VStack, HStack, Box, Text } from '@chakra-ui/react';
import CardsStatus from '../Cards/CardsStatus';
import { CardTasks } from '../Cards/CardsTasks';
import { useTasks } from '../../hooks/useTasks';

function CardsContainer() {
  const { tasks } = useTasks();
  const currentDate = new Date();
  const to_define = tasks.filter(task => task.status === 'to_define').length;
  const to_do = tasks.filter(task => task.status === 'to_do').length;
  const making = tasks.filter(task => task.status === 'making').length;
  const completed = tasks.filter(task => task.status === 'completed').length;
  const priorityTasks = tasks.filter(
    task => task.created_at <= (currentDate.getDate() - 3).toString()
  );
  const cardStatus = [
    {
      title: 'A definir',
      amount: to_define
    },
    {
      title: 'A fazer',
      amount: to_do
    },
    {
      title: 'Fazendo',
      amount: making
    },
    {
      title: 'Finalizadas',
      amount: completed
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
            {priorityTasks.slice(0, 5).map(infos => (
              <CardTasks
                key={infos.id}
                title={infos.title}
                id={infos.id}
                data={infos}
              />
            ))}
          </VStack>
          <Text color="teal" m="1rem 0 1rem 0">
            Outras tarefas
          </Text>
          <VStack justifyContent="space-between">
            {tasks.slice(6).map(infos => (
              <CardTasks
                key={infos.id}
                title={infos.title}
                id={infos.id}
                data={infos}
              />
            ))}
          </VStack>
        </Box>
      </Box>
    </VStack>
  );
}

export default CardsContainer;
