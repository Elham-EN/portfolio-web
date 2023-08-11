import { Flex, Icon, Text } from "@chakra-ui/react";
import { BiFace, BiMenu } from "react-icons/bi";

export default function Navbar() {
  return (
    <Flex
      bg={"brand.100"}
      align={"center"}
      justify={"center"}
      height={"60px"}
      px={10}
    >
      <Flex align={"center"} grow={1} gap={3}>
        <Icon as={BiFace} boxSize={"14"} />
        <Text fontSize={"16pt"} fontFamily={"monospace"} fontWeight={700}>
          Elham's Portfolio
        </Text>
      </Flex>
      <Flex
        justify={"flex-end"}
        gap={10}
        grow={1}
        fontSize={"16pt"}
        display={{ base: "none", lg: "flex" }}
      >
        <Text
          cursor={"pointer"}
          _hover={{
            color: "white",
            bg: "link.100",
            padding: 1,
            borderRadius: 5,
          }}
        >
          Home
        </Text>
        <Text
          cursor={"pointer"}
          _hover={{
            color: "white",
            bg: "link.100",
            padding: 1,
            borderRadius: 5,
          }}
        >
          About Me
        </Text>
        <Text
          cursor={"pointer"}
          _hover={{
            color: "white",
            bg: "link.100",
            padding: 1,
            borderRadius: 5,
          }}
        >
          Projects
        </Text>
        <Text
          cursor={"pointer"}
          _hover={{
            color: "white",
            bg: "link.100",
            padding: 1,
            borderRadius: 5,
          }}
        >
          Tech Stack
        </Text>
        <Text
          cursor={"pointer"}
          _hover={{
            color: "white",
            bg: "link.100",
            padding: 1,
            borderRadius: 5,
          }}
        >
          Blog
        </Text>
      </Flex>
      <Icon
        as={BiMenu}
        boxSize={"9"}
        cursor={"pointer"}
        _hover={{
          color: "link.100",
        }}
        display={{ base: "unset", lg: "none" }}
      />
    </Flex>
  );
}
