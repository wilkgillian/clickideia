import { useDisclosure } from '@chakra-ui/hooks';
import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tooltip
} from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { GrAddCircle } from 'react-icons/gr';
import FormCreateTask from '../Forms/FormCreateTask';
import FormEditTask from '../Forms/FormEditTask';

interface ModaltaskProps {
  type: 'Editar' | 'Criar';
  id: string;
}

export default function ModalTask({ type, id }: ModaltaskProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {type === 'Criar' ? (
        <>
          <Button
            onClick={onOpen}
            colorScheme="teal"
            leftIcon={<GrAddCircle />}
          >
            {type} uma tarefa
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg="gray.900" minW="50%" padding={10} margin="auto">
              <ModalHeader alignSelf="center" fontWeight="bold" color="teal">
                {type} uma tarefa
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormCreateTask onClose={onClose} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <>
          <Tooltip
            label="Editar"
            aria-label="Editar"
            display="flex"
            alignItems="center"
          >
            <Icon onClick={onOpen} color="teal.100" as={FaEdit} />
          </Tooltip>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg="gray.900" minW="50%" padding={10} margin="auto">
              <ModalHeader alignSelf="center" fontWeight="bold" color="teal">
                {type} uma tarefa
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormEditTask onClose={onClose} id={id} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
}
