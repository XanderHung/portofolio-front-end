"use client";

interface Props {
  slice?: number;
}

import Card from "@/components/card-project";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export const data = [
  {
    title: "Bahtera Inti",
    start: "2022",
    end: "2025",
    status: "Ongoing",
    description:
      "In this project i learn abour how to make an api, learn about laravel, and refine/refactoring my code for an neat and readbly code  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa iste perferendis similique delectus ullam perspiciatis, at beatae in numquam a commodi ducimus maxime ratione! Recusandae porro illum eveniet sint. ",
    picture: "/asset/scarlet.png",
  },
  {
    title: "Sharp",
    start: "2023",
    end: "2024",
    status: "Ongoing",
    description:
      "In this project i learn abour how to make an api, learn about laravel, and refine/refactoring my code for an neat and readbly code",
    picture: "/asset/scarlet.png",
  },
  {
    title: "Xiao Mi",
    start: "2016",
    end: "2018",
    status: "Ongoing",
    description:
      "In this project i learn abour how to make an api, learn about laravel, and refine/refactoring my code for an neat and readbly code",
    picture: "/asset/scarlet.png",
  },
  {
    title: "Oppo",
    start: "2020",
    end: "2021",
    status: "Ongoing",
    description:
      "In this project i learn abour how to make an api, learn about laravel, and refine/refactoring my code for an neat and readbly code",
    picture: "/asset/scarlet.png",
  },
  {
    title: "Vivo",
    start: "2020",
    end: "2021",
    status: "Ongoing",
    description:
      "In this project i learn abour how to make an api, learn about laravel, and refine/refactoring my code for an neat and readbly code",
    picture: "/asset/scarlet.png",
  },
  {
    title: "Advance",
    start: "2020",
    end: "2021",
    status: "Ongoing",
    description:
      "In this project i learn abour how to make an api, learn about laravel, and refine/refactoring my code for an neat and readbly code",
    picture: "/asset/scarlet.png",
  },
];

export default function ProjectContent(props: Props) {
  const { slice = data.length } = props;
  return (
    <>
      {slice == data.length ? (
        <Heading
          my={2}
          fontSize="6xl"
          fontWeight="extrabold"
          bgGradient="linear(to-r, #BA89E4, #EA98DA)"
          bgClip="text"
        >
          Project
        </Heading>
      ) : (
        <Heading>Favorite Project</Heading>
      )}
      <Box
        display="flex"
        flexFlow={"row wrap"}
        justifyContent={"space-between"}
      >
        {data.slice(0, slice).map((value) => {
          return <Card data={value} />;
        })}
      </Box>
      {slice < data.length && (
        <Center>
          <Link href="/project">
            <Button fontSize="lg" rightIcon={<ChevronRightIcon />}>
              See More
            </Button>
          </Link>
        </Center>
      )}
    </>
  );
}
