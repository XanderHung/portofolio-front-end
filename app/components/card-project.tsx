import { Badge, Box, Image, Text } from "@chakra-ui/react";

// interface props {
//   title: string,
//   start: string,
//   end: string,
//   status: string,
//   description: string,
//   picture: string,
// }

export const data = {
  title: "Bahtera Inti",
  start: "2018",
  end: "2022",
  status: "Ongoing",
  description:
    "In this project i learn abour how to make an api, learn about laravel, and refine/refactoring my code for an neat and readbly code",
  picture: "/asset/scarlet.png",
};

export default function Card() {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      mb={10}
    >
      <Image src={data.picture} boxSize="200px"></Image>
      <Box p={4}>
        <Box display="flex">
          <Badge borderRadius="full" pr={2}>
            {data.status}
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
            {data.start} - {data.end}
          </Box>
        </Box>
        <Box pt={2}>
          <Text>{data.title}</Text>
        </Box>
      </Box>
      <Box px={4}>
        <Text>{data.description}</Text>
      </Box>
    </Box>
  );
}
