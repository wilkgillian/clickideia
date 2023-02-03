import { Box, Spinner } from "@chakra-ui/react";
import CardsContainer from "../Tasks";
import Aside from "./Aside";
import { useTasks } from "../../hooks/useTasks";
import { useEffect } from "react";

export default function Dashboard() {
  const { tasks, loadTasks } = useTasks();
  useEffect(() => {
    loadTasks();
  }, []);
  return (
    <Box display="flex" w="full" p="0 2.4rem" gap={4}>
      {tasks ? (
        <>
          <CardsContainer />
          <Aside />
        </>
      ) : (
        <Spinner />
      )}
    </Box>
  );
}
