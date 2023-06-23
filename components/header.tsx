"use client";
import {
  Box,
  Container,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import HeaderButton from "./header-button";
import { useEffect, useState } from "react";
import { url } from "inspector";
import Link from "next/link";

export const navLinks = [
  {
    title: "Project",
    url: "/project",
  },
  {
    title: "Stack",
    url: "/stack",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export default function header() {
  return (
    <HStack alignItems="center" mt={5} maxW="4xl">
      <Stack flex={1}>
        <Stack width={"fit-content"}>
          <Link href="/">
            <Text as="b" fontSize="md" color="black">
              Hung
            </Text>
          </Link>
        </Stack>
      </Stack>
      <HStack>
        {navLinks.map((navLink, index) => {
          return (
            <HeaderButton
              key={`navbar-${index}`}
              title={navLink.title}
              link={navLink.url}
            />
          );
        })}
      </HStack>
    </HStack>
  );
}
