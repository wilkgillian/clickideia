import { Box, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
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
