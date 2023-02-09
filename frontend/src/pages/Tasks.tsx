import Layout from "../components/Layout";
import {
  Button,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosOptions } from "react-icons/io";
import { TasksProvider } from "../contexts/tasksContext";
import { useState, useEffect } from "react";
import { useUser } from "../hooks/useUser";
import TasksPanel from "../components/TasksPanel";

function Tasks() {
  const { loadUser } = useUser();
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    loadUser();
    const token = localStorage.getItem("token");
    setToken(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <TasksProvider token={token}>
      <Layout>
        <HStack w="50%" padding={6} gap={4}>
          <InputGroup>
            <Input
              placeholder="Localizar Tarefa"
              colorScheme="teal"
              border="2px solid"
              padding={4}
            />
            <InputRightElement>
              <Icon
                as={AiOutlineSearch}
                cursor="pointer"
                w={8}
                h={8}
                mr={2}
                _hover={{
                  color: "teal",
                }}
              />
            </InputRightElement>
          </InputGroup>
          <Button
            w={200}
            colorScheme="teal"
            leftIcon={<Icon as={IoIosOptions} />}
          >
            Filtros
          </Button>
        </HStack>
        <TasksPanel />
      </Layout>
    </TasksProvider>
  );
}

export default Tasks;
