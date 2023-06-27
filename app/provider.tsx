"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Container, Spacer, Stack } from "@chakra-ui/react";
import { Footer, Header } from "@/components";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}
