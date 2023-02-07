import {
  VStack,
  Input,
  Textarea,
  Select,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useState, FormEvent } from "react";
import { useTasks } from "../../hooks/useTasks";

interface FormCreateTaskProps {
  onClose: () => void;
  id: string;
}

function FormEditTask({ id, onClose }: FormCreateTaskProps) {
  const { tasks } = useTasks();
  const currentTask = tasks.find((task) => task.id === id);
  const { handleEditTask } = useTasks();
  const [title, setTitle] = useState(currentTask ? currentTask.title : "");
  const [content, setContent] = useState(
    currentTask ? currentTask.content : ""
  );
  const [list, setList] = useState(currentTask ? currentTask.list : "");
  const [status, setStatus] = useState(currentTask ? currentTask.status : "");

  const data = {
    title: title,
    content: content,
    list: list,
    status: status,
  };
  async function createTask(e: FormEvent) {
    e.preventDefault();
    await handleEditTask(id, data);
    setTitle(currentTask ? currentTask.title : "");
    setContent(currentTask ? currentTask.content : "");
    setList(currentTask ? currentTask.list : "");
    onClose();
  }
  async function handleAbort() {
    setTitle(currentTask ? currentTask.title : "");
    setContent(currentTask ? currentTask.content : "");
    setList(currentTask ? currentTask.list : "");
    onClose();
  }

  return (
    <VStack as="form" onSubmit={(e) => createTask(e)}>
      <VStack gap={4} w="100%" padding="0 3rem">
        <Input
          type="text"
          value={title}
          placeholder="Titulo da tarefa"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Lista"
          value={list}
          onChange={(e) => setList(e.target.value)}
        />
        <Textarea
          placeholder="Conteudo"
          color="#fff"
          maxH={12}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <Select
          placeholder="Selecione o status da tarefa"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          colorScheme="teal"
        >
          <option
            style={{
              background: "teal",
            }}
            value="making"
          >
            Fazendo
          </option>
          <option
            style={{
              background: "teal",
            }}
            value="completed"
          >
            Completa
          </option>
          <option
            style={{
              background: "teal",
            }}
            value="to_do"
          >
            A Fazer
          </option>
          <option
            style={{
              background: "teal",
            }}
            value="to_define"
          >
            A Definir
          </option>
        </Select>
        <HStack w="full">
          <Button
            width="100%"
            colorScheme="teal"
            fontWeight="bold"
            type="submit"
          >
            Salvar
          </Button>
          <Button
            width="100%"
            colorScheme="red"
            fontWeight="bold"
            onClick={handleAbort}
          >
            Cancelar
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default FormEditTask;
