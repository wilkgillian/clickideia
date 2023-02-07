import { Box, HStack, Icon, Text, Tooltip } from "@chakra-ui/react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoIosConstruct } from "react-icons/io";
import { IoHandLeftOutline } from "react-icons/io5";
import { GiConfirmed } from "react-icons/gi";
import { useTasks } from "../../hooks/useTasks";
import ModalTask from "../ModalTask";
import { motion } from "framer-motion";

interface CardTasksProps {
  title: string;
  id: string;
}

export function CardTasks({ title, id }: CardTasksProps) {
  const { handleSetTask } = useTasks();
  async function handleSetTo(status: string) {
    console.log("função invocada");
    await handleSetTask(id, status);
  }
  const iconsActions = [
    {
      icon: GiConfirmed,
      color: "gray.100",
      toolTip: "Marcar como finalizado",
      status: "completed",
      function: handleSetTo,
    },
    {
      icon: IoHandLeftOutline,
      color: "gray.100",
      toolTip: "Marcar como a fazer",
      status: "to_do",
      function: handleSetTo,
    },
    {
      icon: IoIosConstruct,
      color: "gray.100",
      toolTip: "Marcar como fazendo",
      status: "making",
      function: handleSetTo,
    },
    {
      icon: AiOutlineFundProjectionScreen,
      color: "gray.100",
      toolTip: "Marcar como a definir",
      status: "to_define",
      function: handleSetTo,
    },
  ];
  return (
    <HStack
      w="full"
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
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
                  onClick={() => icons.function(icons.status)}
                  color={icons.color}
                  cursor="pointer"
                />
              </Box>
            </Tooltip>
          ))}
        </HStack>
      </HStack>
      <ModalTask type="Editar" id={id} />
      <ModalTask type="Deletar" id={id} />
    </HStack>
  );
}
