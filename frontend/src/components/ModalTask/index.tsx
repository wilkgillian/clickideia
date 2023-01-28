import { useDisclosure } from '@chakra-ui/hooks';
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
  Select
} from '@chakra-ui/react';
import { GrAddCircle } from 'react-icons/gr';

interface ModaltaskProps {
  type: 'editar' | 'criar';
}

export default function ModalTask({ type }: ModaltaskProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  if (type === 'criar') {
    return (
      <>
        <Button onClick={onOpen} colorScheme="teal" leftIcon={<GrAddCircle />}>
          Crie uma tarefa
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="gray.900" minW="50%" padding={10} margin="auto">
            <ModalHeader alignSelf="center" fontWeight="bold" color="teal">
              Criar tarefa
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack as="form">
                <VStack gap={4} w="100%" padding="0 3rem">
                  <Input type="text" placeholder="Titulo da tarefa" />
                  <Input type="text" placeholder="Lista" />
                  <Textarea placeholder="Conteudo" color="#fff" maxH={12} />
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
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  } else {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.900" minW="50%" padding={10} margin="auto">
          <ModalHeader alignSelf="center" fontWeight="bold" color="teal">
            Editar tarefa
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack as="form">
              <VStack gap={4} w="100%" padding="0 3rem">
                <Input type="text" placeholder="Titulo da tarefa" />
                <Input type="text" placeholder="Lista" />
                <Textarea placeholder="Conteudo" color="#fff" maxH={12} />

                <Select placeholder="Selecione o status da tarefa">
                  <option value="option1">Fazendo</option>
                  <option value="option2">Completa</option>
                  <option value="option3">A Fazer</option>
                  <option value="option3">A Definir</option>
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
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
}
