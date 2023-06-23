"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Container, Spacer, Stack } from "@chakra-ui/react";
import { Footer, Header } from "@/components";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Container maxW="4xl">
          
          <Stack flexDir="column" minH="99vh" alignItems="stretch">
            <Header />
            <Stack as="section" width="full" mt="16" flex={1}>
              {children}
            </Stack>
            <Footer />
          </Stack>
        </Container>
      </ChakraProvider>
    </CacheProvider>
  );
}
