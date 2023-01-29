import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';

interface CardCurrentTaskProps {
  title: string;
}

function CardCurrentTask({ title }: CardCurrentTaskProps) {
  const time = '12:30:20';
  const data = '5 julho 2022';

  return (
    <Box w="full" bg="gray.800" p={5} borderRadius={10}>
      <Text color="teal">Próxima tarefa</Text>
      <Text fontWeight="bold" color="red.500">
        {title}
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
            <Text>{time}</Text>
          </Flex>
        </Box>
        <Box>
          <Text fontSize={12}>Data de criação</Text>
          <Flex alignItems="center" gap={4}>
            <Icon as={AiOutlineCalendar} />
            <Text>{data}</Text>
          </Flex>
        </Box>
      </HStack>
    </Box>
  );
}

export default CardCurrentTask;
