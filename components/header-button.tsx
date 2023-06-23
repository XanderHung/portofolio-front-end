interface Props {
  title: string;
  link: string;
}

import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function HeaderButton(props: Props) {
  const { title } = props;
  return (
    <Link href={props.link}>
      <Text as="b" p={{ base: 1, md: 4 }} fontSize="md" color="black">
        {title}
      </Text>
    </Link>
  );
}
