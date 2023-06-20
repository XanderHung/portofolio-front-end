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
        <HeaderButton title="Hung" link="/" />
      </Stack>
      <HStack>
        {navLinks.map((navLink) => {
          return <HeaderButton title={navLink.title} link={navLink.url} />;
        })}
      </HStack>
    </HStack>
  );
}
