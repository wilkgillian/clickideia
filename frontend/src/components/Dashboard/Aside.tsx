import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import CardCurrent from '../Cards/CardCurrent';
import CardCurrentTask from '../Cards/CardCurrentTask';
import Graph from '../Graph';

function Aside() {
  return (
    <VStack w="40%" h="full" overflowY="auto" gap={4}>
      <CardCurrentTask title="Beber água" />
      <CardCurrent cardContent="ejejkajsa hsjakjsjkasjas jsjkasjjaksjajsdas djsjkakjsasjdbabasjbd jasjasjkdajsd jskasjdbasjdas jsjkajsdjajsdnasnx jsdjaj jsda sd akjj" />
      <Graph />
    </VStack>
  );
}

export default Aside;
