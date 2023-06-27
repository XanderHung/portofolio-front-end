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
  };
}

export default function Card(props: Props) {
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
      <Image src={props.data.picture} boxSize="200px" m="auto"></Image>
      <Box p={4}>
        <Box pt={2} display="flex">
          <Text mr={2}>{props.data.title}</Text>
          <Badge borderRadius="full" px={2} py={1}>
            {props.data.status}
          </Badge>
        </Box>
      </Box>
      <Box px={4} lineHeight="tight" noOfLines={3} textAlign="justify">
        <Text>{props.data.description}</Text>
      </Box>
      <Box display="flex">
        <Button flex={1} m={1} onClick={onOpen}>
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
              <Text mr={2}>{props.data.title}</Text>
              <Badge borderRadius="full" px={2} py={2}>
                {props.data.status}
              </Badge>
            </AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              <Image src={props.data.picture} boxSize="200px" m="auto"></Image>
              <Box px={4} lineHeight="tight" textAlign="justify">
                <Text>{props.data.description}</Text>
              </Box>
            </AlertDialogBody>
            <AlertDialogFooter display="flex">
              <Button
                as="a"
                flex={1}
                mx={2}
                href="https://www.google.com"
                target="_blank"
              >
                Source Code
              </Button>
              <Button as="a" flex={1} mx={2} href="">
                Open
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Button flex={1} m={1}>
          Open
        </Button>
      </Box>
    </Box>
  );
}
