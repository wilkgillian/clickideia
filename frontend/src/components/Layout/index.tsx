import { Box, VStack } from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { useTasks } from "../../hooks/useTasks";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { loadTasks } = useTasks();
  useEffect(() => {
    loadTasks();
  });
  return (
    <Box w="full" h="full" display="flex">
      <Sidebar />
      <VStack w="full">
        <Header />
        {children}
      </VStack>
    </Box>
  );
}

export default Layout;
