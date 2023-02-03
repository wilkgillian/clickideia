import { VStack } from "@chakra-ui/react";
import React from "react";
import CardCurrent from "../Cards/CardCurrent";
import CardCurrentTask from "../Cards/CardCurrentTask";
import Graph from "../Graph";
import { useTasks } from "../../hooks/useTasks";

function Aside() {
  const { tasks } = useTasks();
  let tasksOrdered = tasks.filter((task) => task.status === "to_do");
  const currentTask = tasksOrdered.at(0);

  const infos = {
    id: currentTask ? currentTask.id : "",
    title: currentTask ? currentTask.title : "",
    created_at: currentTask ? currentTask.created_at : "",
    content: currentTask ? currentTask.content : "",
  };
  return (
    <VStack w="40%" h="calc(100vh - 6rem)" overflowY="auto" gap={4}>
      <CardCurrentTask
        id={infos.id}
        title={infos.title}
        created_at={infos.created_at}
      />
      <CardCurrent cardContent={infos.content} />
      <Graph />
    </VStack>
  );
}

export default Aside;
