import { Box, HStack, Icon, Text, Tooltip } from "@chakra-ui/react";
import { AiOutlineDelete, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoIosConstruct } from "react-icons/io";
import { IoHandLeftOutline } from "react-icons/io5";
import { GiConfirmed } from "react-icons/gi";
import { useTasks } from "../../hooks/useTasks";
import ModalTask from "../ModalTask";

interface CardTasksProps {
  title: string;
  id: string;
}

export function CardTasks({ title, id }: CardTasksProps) {
  const { handleDeleteTask } = useTasks();
  async function handleDelete() {
    await handleDeleteTask(id);

    console.log("deleted");
  }
  async function handleSetTo() {
    console.log("moved");
  }
  const iconsActions = [
    {
      icon: AiOutlineDelete,
      function: handleDelete,
      color: "red.300",
      toolTip: "Deletar",
    },
    {
      icon: GiConfirmed,
      function: handleSetTo,
      color: "gray.100",
      toolTip: "Marcar como finalizado",
    },
    {
      icon: IoHandLeftOutline,
      function: handleSetTo,
      color: "gray.100",
      toolTip: "Marcar como a fazer",
    },
    {
      icon: IoIosConstruct,
      function: handleSetTo,
      color: "gray.100",
      toolTip: "Marcar como fazendo",
    },
    {
      icon: AiOutlineFundProjectionScreen,
      function: handleSetTo,
      color: "gray.100",
      toolTip: "Marcar como a definir",
    },
  ];
  return (
    <HStack w="full">
      <HStack
        w="full"
        borderRadius={5}
        border="1px solid #434f5f"
        h={10}
        p={2}
        justifyContent="space-between"
        _hover={{
          span: {
            visibility: "visible",
          },
        }}
      >
        <Text>{title}</Text>
        <HStack
          as="span"
          w="30%"
          justifyContent="space-between"
          alignItems="center"
          visibility="hidden"
          pr={2}
        >
          {iconsActions.map((icons, index) => (
            <Tooltip
              key={index}
              label={icons.toolTip}
              aria-label={icons.toolTip}
              display="flex"
              alignItems="center"
            >
              <Box as="span">
                <Icon
                  as={icons.icon}
                  onClick={icons.function}
                  color={icons.color}
                  cursor="pointer"
                />
              </Box>
            </Tooltip>
          ))}
        </HStack>
      </HStack>
      <Tooltip
        label="Editar"
        aria-label="Editar"
        display="flex"
        alignItems="center"
      >
        <ModalTask type="Editar" id={id} />
      </Tooltip>
    </HStack>
  );
}
