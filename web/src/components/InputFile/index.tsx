import {
  Box,
  FormLabel,
  Icon,
  Text,
  FormControl,
  Flex,
} from "@chakra-ui/react";
import { AiOutlineCloudUpload } from "react-icons/ai";

export interface FileInputProps {
  name: string;
  title: string
}


export default function FileInput({name, title}: FileInputProps){
  return (
    <FormControl>
      <FormLabel
        m="auto"
        w={40}
        h={40}
        htmlFor={name}
        cursor="pointer"
        // cursor={isSending ? "progress" : "pointer"}
        // opacity={isSending ? 0.5 : 1}
      >
        {/* {localImageUrl && !isSending ? (
          <Image
            w="full"
            h="full"
            src={localImageUrl}
            alt="Uploaded photo"
            borderRadius="md"
            objectFit="cover"
          />
        ) : (
          <Flex
            w="full"
            h="full"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            borderRadius="md"
            bgColor="pGray.800"
            color="pGray.200"
            borderWidth={error?.message && 2}
            borderColor={error?.message && "red.500"}
          >
            {isSending ? (
              <>
                <CircularProgress
                  trackColor="pGray.200"
                  value={progress}
                  color="orange.500"
                >
                  <CircularProgressLabel>{progress}%</CircularProgressLabel>
                </CircularProgress>
                <Text as="span" pt={2} textAlign="center">
                  Enviando...
                </Text>
              </>
            ) : ( */}
              <Box pos="relative" h="full" border="2px dashed cyan" padding={2} borderRadius={20} color="cyan">
                {/* {!!error && (
                  <Tooltip label={error.message} bg="red.500">
                    <FormErrorMessage
                      pos="absolute"
                      right={2}
                      top={2}
                      mt={0}
                      zIndex="tooltip"
                    >
                      <Icon as={FiAlertCircle} color="red.500" w={4} h={4} />
                    </FormErrorMessage>
                  </Tooltip>
                )} */}

                <Flex
                  h="full"
                  alignItems="center"
                  justifyContent="center"
                  flexDir="column"
                >
                  <Icon as={AiOutlineCloudUpload} w={14} h={14} />
                  <Text as="span" pt={2} textAlign="center" textTransform="uppercase">
                    {title}
                  </Text>
                </Flex>
              </Box>
            {/* )} */}
          {/* </Flex>
        )} */}
        <input
          data-testid={name}
        //   disabled={isSending}
          id={name}
          name={name}
        //   onChange={handleImageUpload}
        //   ref={ref}
          type="file"
          style={{
            display: "none",
          }}
        //   {...rest}
        />
      </FormLabel>
    </FormControl>
  );
};
