interface Props {
  title: string;
  link: string;
}

import { Box, Text } from "@chakra-ui/react";

export default function HeaderButton(props: Props) {
  const { title } = props;
  return (
    <Box as="a" px={4} href={props.link}>
      <Text as="b" fontSize="md" color="black">
        {title}
      </Text>
    </Box>
  );
}
