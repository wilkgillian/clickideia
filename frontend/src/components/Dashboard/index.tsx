import { Box } from '@chakra-ui/react';
import CardsContainer from '../Tasks';
import Aside from './Aside';

export default function Dashboard() {
  return (
    <Box display="flex" w="full" p="0 2.4rem" gap={4}>
      <CardsContainer />
      <Aside />
    </Box>
  );
}
