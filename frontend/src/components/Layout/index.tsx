import { Box, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';

function Layout() {
  return (
    <Box w="full" h="full" display="flex">
      <Sidebar />
      <VStack w="full">
        <Header />
        <Text>Box</Text>
        {/* <Dashboard /> */}
      </VStack>
    </Box>
  );
}

export default Layout;
