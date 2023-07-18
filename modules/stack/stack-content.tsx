"use client";

import { Heading, Stack, Text } from "@chakra-ui/react";
import StackItemContent from "./stack-item-content";

const stack = [
  {
    title: "Languages",
    badge: [
      {
        title: "A",
        color: "green",
      },
      {
        title: "B",
        color: "blue",
      },
      {
        title: "C",
        color: "red",
      },
      {
        title: "D",
        color: "yellow",
      },
      {
        title: "E",
        color: "cyan",
      },
      {
        title: "R",
        color: "purple",
      },
      {
        title: "GO",
        color: "gray",
      },
    ],
  },
];

export default function StackContent() {
  return (
    <Stack>
      <Heading fontSize="5xl" mb={3}>
        Stack
      </Heading>
      ;
      <Stack>
        <Text textAlign="justify">
          Before we talk about stacks, I want to make sure that we have the same
          mind. A stack is a technology or language that you use to build a
          website or mobile application. Below is a list of stacks that I have
          been practicing since I learned about programming in high school.
        </Text>
      </Stack>
      {stack.map((StackItem, index) => {
        return (
          <StackItemContent data={StackItem} key={`stack-item-${index}`} />
        );
      })}
    </Stack>
  );
}
