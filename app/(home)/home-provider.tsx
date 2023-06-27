"use client";

import { ChakraProvider, Container, Spacer, Stack } from "@chakra-ui/react";
import { Footer, Header } from "@/components";

export function HomeProviders({ children }: { children: React.ReactNode }) {
  return (
    <Container maxW="4xl">
      <Stack flexDir="column" minH="99vh" alignItems="stretch">
        <Header />
        <Stack as="section" width="full" mt="16" flex={1}>
          {children}
        </Stack>
        <Footer />
      </Stack>
    </Container>
  );
}
