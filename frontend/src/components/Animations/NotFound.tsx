import { Box } from "@chakra-ui/react";
import * as animationData from "./jsons/Notfound.json";
import Lottie from "react-lottie";

function NotFoundAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box w={40} h={40}>
      <Lottie options={defaultOptions} />
    </Box>
  );
}

export { NotFoundAnimation };
