import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";

export default function ContactForm() {
  return (
    <Stack mt={5} border={"1px"} borderColor="gray.200" rounded="xl" p={7}>
      <FormControl>
        <HStack>
          <FormLabel flex={1}>Name</FormLabel>
          <FormLabel flex={1}>Email</FormLabel>
        </HStack>
        <HStack mb={5}>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
        </HStack>
        <FormLabel>Message:</FormLabel>
        <Textarea />
        <ButtonGroup variant="outline">
          <Button colorScheme="linkedin" mt={5}>
            Submit
          </Button>
        </ButtonGroup>
      </FormControl>
    </Stack>
  );
}
