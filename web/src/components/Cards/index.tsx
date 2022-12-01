import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsPlay } from "react-icons/bs";

interface CardProps {
  image: string;
  title: string;
  duration: string;
}

export function Card({ image, title, duration }: CardProps) {
  const [visible, setVisible] = useState(false);
  return (
    <Box
      width={200}
      minW={200}
      height={300}
      borderRadius={10}
      backgroundImage={`url(${image})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      transform={"scale(0.98)"}
      transition="0.2s"
      _hover={{
        boxShadow: "0 0 10px 10px #000",
        transform: "scale(1)",
        zIndex: 1,
      }}
    >
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        opacity={1}
        justifyContent="flex-end"
        padding={5}
        bg="rgba(0, 0,0, 0.3)"
        transition="0.2s"
        _hover={{ bg: "rgba(0, 0,0, 0)"}}
      >
        <Text as="a" href="/films" fontSize={20} fontWeight="bold" color="rgba(255, 255, 255, 0.3)" textTransform="uppercase" _hover={{
            color: 'rgba(0, 0,0, 1)'
        }}>
          {title}
        </Text>
        <Text>{duration}</Text>
        <Button colorScheme="none" padding={0} borderRadius={50} bgColor="#000" display="flex" alignItems="center" justifyContent="center" width={50} h={50}>
            <BsPlay fontSize={42} />
        </Button>
      </Box>
    </Box>
  );
}
