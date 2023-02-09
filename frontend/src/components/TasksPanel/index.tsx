import { HStack, VStack, Text, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useTasks } from "../../hooks/useTasks";
import CardCurrentTask from "../Cards/CardCurrentTask";

interface SearchTaskProps {
  search?: string;
  title?: string;
  status?: string;
  data?: string
}

function TasksPanel({ search, data, status, title }: SearchTaskProps) {
  const { tasks, loadTasks } = useTasks();
  useEffect(() => {
    loadTasks();
  });
  return (
    <HStack gap={4}>
      <VStack
        w={350}
        h="80vh"
        borderRadius={10}
        bgColor="gray.800"
        textAlign="center"
        padding={4}
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#2C3440",
            borderRadius: "24px",
          },
        }}
      >
        <Text textTransform="uppercase" m={4} color="teal">
          A definir
        </Text>
        {tasks
          .filter((tasks) => tasks.status == "to_define")
          .map((task) => (
            <Box
              key={task.id}
              w="full"
              border="1px solid teal"
              borderRadius={10}
            >
              <CardCurrentTask
                id={task.id}
                title={task.title}
                created_at={task.created_at}
              />
            </Box>
          ))}
      </VStack>
      <VStack
        w={350}
        h="80vh"
        borderRadius={10}
        bgColor="gray.800"
        textAlign="center"
        padding={4}
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#2C3440",
            borderRadius: "24px",
          },
        }}
      >
        <Text textTransform="uppercase" m={4} color="teal">
          A fazer
        </Text>
        {tasks
          .filter((tasks) => tasks.status == "to_do")
          .map((task) => (
            <Box
              key={task.id}
              w="full"
              border="1px solid teal"
              borderRadius={10}
            >
              <CardCurrentTask
                id={task.id}
                title={task.title}
                created_at={task.created_at}
              />
            </Box>
          ))}
      </VStack>
      <VStack
        w={350}
        h="80vh"
        borderRadius={10}
        bgColor="gray.800"
        textAlign="center"
        padding={4}
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#2C3440",
            borderRadius: "24px",
          },
        }}
      >
        <Text textTransform="uppercase" m={4} color="teal">
          Fazendo
        </Text>
        {tasks
          .filter((tasks) => tasks.status == "making")
          .map((task) => (
            <Box
              key={task.id}
              w="full"
              border="1px solid teal"
              borderRadius={10}
            >
              <CardCurrentTask
                id={task.id}
                title={task.title}
                created_at={task.created_at}
              />
            </Box>
          ))}
      </VStack>
      <VStack
        w={350}
        h="80vh"
        borderRadius={10}
        bgColor="gray.800"
        textAlign="center"
        padding={4}
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#2C3440",
            borderRadius: "24px",
          },
        }}
      >
        <Text textTransform="uppercase" m={4} color="teal">
          Completas
        </Text>
        {tasks
          .filter((tasks) => tasks.status == "completed")
          .map((task) => (
            <Box
              key={task.id}
              w="full"
              border="1px solid teal"
              borderRadius={10}
            >
              <CardCurrentTask
                id={task.id}
                title={task.title}
                created_at={task.created_at}
              />
            </Box>
          ))}
      </VStack>
    </HStack>
  );
}

export default TasksPanel;
