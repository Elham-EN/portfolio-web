import { Flex, Text } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <Flex
      direction={"column"}
      bg={"gray.300"}
      width={"95%"}
      height={"90vh"}
      m={"auto"}
      marginTop={10}
    >
      <Text color={"white"}>Header</Text>
    </Flex>
  );
}
