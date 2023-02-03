import { Box, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import Header from "../Header";
import Dashboard from "../Dashboard";
import Sidebar from "../Sidebar";
import { useTasks } from "../../hooks/useTasks";

function Layout() {
  const { loadTasks } = useTasks();
  useEffect(() => {
    loadTasks();
  });
  return (
    <Box w="full" h="full" display="flex">
      <Sidebar />
      <VStack w="full">
        <Header />
        <Dashboard />
      </VStack>
    </Box>
  );
}

export default Layout;
