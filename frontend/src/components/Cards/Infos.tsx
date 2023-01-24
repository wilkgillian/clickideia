import { Box, Text } from '@chakra-ui/react';

interface CardInfoProps {
  text: string;
}

export default function CardInfo({ text }: CardInfoProps) {
  return (
    <Box
      w={150}
      h={50}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius={20}
      bgColor="rgba(17, 25, 40, 0.75)"
      border="1px solid rgba(255, 255, 255, 0.125)"
      backdropFilter="blur(16px) saturate(180%)"
    >
      <Text fontWeight="normal" fontSize={24}>
        {text}
      </Text>
    </Box>
  );
}
