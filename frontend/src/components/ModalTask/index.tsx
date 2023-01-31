import { useDisclosure } from "@chakra-ui/hooks";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Input,
  Textarea,
  VStack,
  Select,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { useTasks } from "../../hooks/useTasks";
import { useUser } from "../../hooks/useUser";

interface ModaltaskProps {
  type: "Editar" | "Criar";
}

export default function ModalTask({ type }: ModaltaskProps) {
  const { user, userToken } = useUser();
  const { handleCreateTask } = useTasks();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [list, setList] = useState("");
  const [status, setStatus] = useState("to_do");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = {
    title: title,
    content: content,
    list: list,
    userId: user.id,
  };
  async function createTask(e: FormEvent) {
    e.preventDefault();
    await handleCreateTask(e, data);
    setTitle("");
    setContent("");
    setList("");
    onClose();
  }

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" leftIcon={<GrAddCircle />}>
        Crie uma tarefa
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.900" minW="50%" padding={10} margin="auto">
          <ModalHeader alignSelf="center" fontWeight="bold" color="teal">
            {type} uma tarefa
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {type === "Criar" ? (
              <VStack as="form" onSubmit={(e) => handleCreateTask(e, data)}>
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
                  <Button
                    width="100%"
                    colorScheme="teal"
                    fontWeight="bold"
                    type="submit"
                  >
                    Salvar
                  </Button>
                </VStack>
              </VStack>
            ) : (
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
                  >
                    <option value="making">Fazendo</option>
                    <option value="completed">Completa</option>
                    <option value="to_do">A Fazer</option>
                    <option value="to_define">A Definir</option>
                  </Select>

                  <Button
                    width="100%"
                    colorScheme="teal"
                    fontWeight="bold"
                    type="submit"
                  >
                    Salvar
                  </Button>
                </VStack>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
