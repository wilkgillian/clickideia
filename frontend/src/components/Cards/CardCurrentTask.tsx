import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import { useTasks } from '../../hooks/useTasks';
import ModalTask from '../ModalTask';
import { formatDateAndHour } from '../utils/formatDateAndHour';

interface TaskProps {
  id: string;
  title: string;
  status: string;
  content: string;
  userId: string;
  list: string;
  created_at: string;
}

function CardCurrentTask() {
  const { tasks } = useTasks();
  const [allTasks, setAllTasks] = useState<TaskProps[]>([]);
  const prioritsTasks = allTasks.find(task => task.status === 'to_do');
  const currentTask = prioritsTasks ? prioritsTasks[0] : '';
  const dateAndHour = formatDateAndHour(currentTask?.created_at);

  useEffect(() => {
    setAllTasks(tasks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box w="full" bg="gray.800" p={5} borderRadius={10}>
      <HStack justifyContent="space-between">
        <Text color="teal">Próxima tarefa</Text>
        <ModalTask id={currentTask.id} type="Editar" />
      </HStack>
      <Text fontWeight="bold" color="red.500">
        {currentTask.title}
      </Text>
      <HStack
        w="full"
        alignItems="center"
        mt={4}
        justifyContent="space-between"
      >
        <Box>
          <Text fontSize={12}>Hora de criação</Text>
          <Flex alignItems="center" gap={4}>
            <Icon as={AiOutlineClockCircle} />
            <Text>{dateAndHour.time}</Text>
          </Flex>
        </Box>
        <Box>
          <Text fontSize={12}>Data de criação</Text>
          <Flex alignItems="center" gap={4}>
            <Icon as={AiOutlineCalendar} />
            <Text>{dateAndHour.date}</Text>
          </Flex>
        </Box>
      </HStack>
    </Box>
  );
}

export default CardCurrentTask;
