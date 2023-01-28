import Lottie from 'react-lottie';
import { Box, Center, Flex } from '@chakra-ui/react';
import * as animationData from './jsons/Login.json';

function LoginAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Flex w="full" h="full">
      <Center>
        <Lottie options={defaultOptions} />
      </Center>
    </Flex>
  );
}

export default LoginAnimation;
