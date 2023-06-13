"use client";
import { Box, Container, Flex, HStack, Spacer, Text } from "@chakra-ui/react";

export default function header() {
  return (
    <Container maxW="3xl">
      <HStack alignItems="center" m={2} maxW={720}>
        <Box m={2}>
          <Text as="b" fontSize="sm">
            Hung.
          </Text>
        </Box>
        <Spacer />
        <HStack>
          <Box m={2}>
            <Text as="b" fontSize="sm">
              Project
            </Text>
          </Box>
          <Box m={2}>
            <Text as="b" fontSize="sm">
              Blog
            </Text>
          </Box>
        </HStack>
      </HStack>
    </Container>
  );
}
