import { Badge, Box, Image, Text } from "@chakra-ui/react";

interface Props {
  data: {
    title: string;
    start: string;
    end: string;
    status: string;
    description: string;
    picture: string;
  };
}

export default function Card(props: Props) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={{ base: 2, md: 5, sm: 4 }}
      mb={10}
    >
      <Image src={props.data.picture} boxSize="200px"></Image>
      <Box p={4}>
        <Box display="flex">
          <Badge borderRadius="full" pr={2}>
            {props.data.status}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
            pl="2"
          >
            {props.data.start} - {props.data.end}
          </Box>
        </Box>
        <Box pt={2}>
          <Text>{props.data.title}</Text>
        </Box>
      </Box>
      <Box px={4}>
        <Text>{props.data.description}</Text>
      </Box>
    </Box>
  );
}
