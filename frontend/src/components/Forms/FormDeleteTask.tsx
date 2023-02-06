import { VStack, Input, Textarea, Select, Button } from "@chakra-ui/react";
import { FormEvent } from "react";
import { useTasks } from "../../hooks/useTasks";

interface FormCreateTaskProps {
  onClose: () => void;
  id: string;
}

function FormEditTask({ id, onClose }: FormCreateTaskProps) {
  const { tasks } = useTasks();
  const currentTask = tasks.find((task) => task.id === id);
  const { handleDeleteTask } = useTasks();

  async function deleteTask(e: FormEvent) {
    e.preventDefault();
    await handleDeleteTask(id);
    onClose();
  }

  return (
    <VStack as="form" onSubmit={(e) => deleteTask(e)}>
      <VStack gap={4} w="100%" padding="0 3rem">
        <Input type="text" placeholder={currentTask?.title} isDisabled />
        <Input type="text" placeholder={currentTask?.list} isDisabled />
        <Textarea
          placeholder={currentTask?.content}
          color="#fff"
          maxH={12}
          isDisabled
        />

        <Select
          placeholder={currentTask?.status}
          colorScheme="teal"
          isDisabled
        />

        <Button width="100%" colorScheme="red" fontWeight="bold" type="submit">
          Deletar
        </Button>
      </VStack>
    </VStack>
  );
}

export default FormEditTask;
