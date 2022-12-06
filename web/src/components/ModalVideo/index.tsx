import { useDisclosure } from "@chakra-ui/hooks";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsPlayFill } from "react-icons/bs";

interface ModalVideoProps {
  children: ReactNode;
  title: string;
}

export default function ModalVideo({ children, title }: ModalVideoProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="none"
        padding={0}
        bgColor="rgba(0, 255, 255, 0.3)"
        w={70}
        h={70}
        transform="scale(0.9)"
        _hover={{
          transform: "scale(1)",
        }}
        borderRadius={50}
        boxShadow="0 0 10px 5px #000"
        fontSize={50}
      >
        <BsPlayFill color="#000" />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.900" minW="60%" pb={10} margin="auto">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
