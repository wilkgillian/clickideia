import { useDisclosure } from "@chakra-ui/hooks";
import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Input from "../Input";
import FileInput from "../InputFile";

export default function CreateFilmModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="telegram"
        padding={8}
        // borderRadius={50}
        // boxShadow="0 0 10px 5px #000"
        fontSize={24}
      >
        <Text
          //   mt={5}
          textAlign="center"
          //   fontSize={42}
          //   fontWeight="bold"
          //   textShadow="0.1em 0.1em 0.2em #000"
        >
          ADICIONE SEU FILME
        </Text>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.900" minW="50%" padding={10} margin="auto">
          <ModalHeader alignSelf="center" fontWeight="bold" fontSize={28} mb={4}>
            CADASTRAR FILME
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack as="form">
              <HStack w="100%" mb={6}>
                <FileInput name="movie_banner" title="Adicone o banner" />
                <FileInput name="poster" title="Adicone o poster" />
                <FileInput name="film" title="Adicone o filme" />
              </HStack>
              <VStack gap={4} w="100%" padding="0 3rem">
                <Input type="text" placeholder="Titulo do filme" />
                <Input type="text" placeholder="Genero" />
                <Input type="text" placeholder="Diretor" />
                <Input type="text" placeholder="Produtor" />
                <Input type="number" placeholder="Ano de lançamento" />
                <Input type="number" placeholder="Nota de avaliação" />
                <Input type="number" placeholder="Duração" />
                <Textarea
                  placeholder="Sinopse do filme"
                  color="#fff"
                  h={12}
                  //   variant="flushed"
                  _focus={{
                    bg: "rgba(101, 19, 252, 0.4)",
                    color: "cyan",
                    paddingLeft: 2,
                    fontSize: 18,
                    borderRadius: 5,
                    _placeholder: {
                      opacity: 1,
                    },
                  }}
                  _placeholder={{
                    color: "cyan",
                    fontWeight: "normal",
                    opacity: 0.4,
                  }}
                />
                <Button
                  width="100%"
                  h={14}
                  colorScheme="telegram"
                  fontWeight="bold"
                  fontFamily="roboto"
                  fontSize={28}
                  type="submit"
                >
                  Adicionar
                </Button>
              </VStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
