"use client";
import Card from "@/app/components/card-project";
import { AspectRatio, Box, Heading, Text } from "@chakra-ui/react";

export default function ProjectContent() {
  return (
    <>
      <Heading m={2}>Project</Heading>
      <Box
        display="flex"
        flexFlow={"row wrap"}
        justifyContent={"space-between"}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>
    </>
  );
}
