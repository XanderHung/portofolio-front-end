import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

export default function Profile() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)", {
    ssr: false,
    fallback: true, // return false on the server, and re-evaluate on the client side
  });
  return (
    <Stack
      display="flex"
      flexDir={{ base: "column-reverse", md: "row" }}
      alignItems={{ base: "center", md: "default" }}
      justifyContent="space-between"
    >
      <Stack maxWidth="xl" flex={1}>
        <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }}>
          Hello, I Am Alexander Hung.
        </Heading>
        <Text mt="5" justifyItems="center" textAlign="justify">
          I'm Graduate From Bina Nusantara University CS at 2022 🎓. I'm
          passionate about Web Development, with a particular focus on Backend
          Engineering. Feel free to reach me out.
        </Text>
        <HStack>
          <Button rightIcon={<ChevronRightIcon />}>CV</Button>
          <Button
            as="a"
            rightIcon={<ChevronRightIcon />}
            target="_blank"
            href="https://gitlab.com/Hunga453"
          >
            Gitlab
          </Button>
        </HStack>
      </Stack>
      <Stack
        maxW="230px"
        mb={{ base: "10", md: "0" }}
        ml={{ base: "0", md: "10" }}
      >
        <Image src="asset/alex.jpg" borderRadius="full"></Image>
      </Stack>
    </Stack>
  );
}
