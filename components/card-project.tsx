import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Image,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  data: {
    title: string;
    status: string;
    description: string;
    picture: string;
    gitlab: string;
    link?: string;
  };
}

export default function Card(props: Props) {
  const { data } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <Box
      maxW={{ base: "100%", lg: "sm" }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={{ base: 2, md: 5, sm: 4 }}
      mb={10}
    >
      <Image src={data.picture} boxSize="200px" m="auto"></Image>
      <Box p={4}>
        <Box pt={2} display="flex">
          <Text mr={2} my="auto" fontWeight="bold">
            {data.title}
          </Text>
          <Badge borderRadius="full" px={2} py={1}>
            {data.status}
          </Badge>
        </Box>
      </Box>
      <Box px={4} lineHeight="tight" noOfLines={3} textAlign="justify">
        <Text>{data.description}</Text>
      </Box>
      <Box display="flex" pt={2}>
        <ButtonGroup flex={1} variant="outline">
          <Button flex={1} m={1} onClick={onOpen} colorScheme="linkedin">
            View More
          </Button>
          <AlertDialog
            leastDestructiveRef=""
            motionPreset="slideInBottom"
            onClose={onClose}
            isOpen={isOpen}
            isCentered
          >
            <AlertDialogOverlay />
            <AlertDialogContent>
              <AlertDialogHeader display="flex">
                <Text mr={2} my="auto">
                  {data.title}
                </Text>
                <Badge borderRadius="full" px={2} py={2}>
                  {data.status}
                </Badge>
              </AlertDialogHeader>
              <AlertDialogCloseButton />
              <AlertDialogBody>
                <Image src={data.picture} boxSize="200px" m="auto"></Image>
                <Box px={4} lineHeight="tight" textAlign="justify">
                  <Text>{data.description}</Text>
                </Box>
              </AlertDialogBody>
              <AlertDialogFooter display="flex">
                <ButtonGroup flex={1} variant="outline">
                  <Button
                    as="a"
                    flex={1}
                    mx={2}
                    href={data.gitlab}
                    colorScheme="linkedin"
                    target="_blank"
                  >
                    Source Code
                  </Button>
                  {!!data.link && (
                    <Button
                      as="a"
                      flex={1}
                      mx={2}
                      href={data.link}
                      colorScheme="linkedin"
                    >
                      Open
                    </Button>
                  )}
                </ButtonGroup>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          {!!data.link && (
            <Button
              as="a"
              flex={1}
              mx={2}
              href={data.link}
              colorScheme="linkedin"
            >
              Open
            </Button>
          )}
        </ButtonGroup>
      </Box>
    </Box>
  );
}
