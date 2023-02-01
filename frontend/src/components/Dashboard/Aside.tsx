import { VStack } from '@chakra-ui/react';
import React from 'react';
import CardCurrent from '../Cards/CardCurrent';
import CardCurrentTask from '../Cards/CardCurrentTask';
import Graph from '../Graph';

function Aside() {
  return (
    <VStack w="40%" h="calc(100vh - 6rem)" overflowY="auto" gap={4}>
      <CardCurrentTask />
      <CardCurrent cardContent="ejejkajsa hsjakjsjkasjas jsjkasjjaksjajsdas djsjkakjsasjdbabasjbd jasjasjkdajsd jskasjdbasjdas jsjkajsdjajsdnasnx jsdjaj jsda sd akjj" />
      <Graph />
    </VStack>
  );
}

export default Aside;
