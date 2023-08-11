import { Flex, Icon, Text } from "@chakra-ui/react";
import { BiFace, BiMenu } from "react-icons/bi";
import DrawerLeft from "./Drawer";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenDrawer = () => {
    setIsOpen(true);
  };

  const onCloseDrawer = () => {
    setIsOpen(false);
  };

  const linksArr: string[] = [
    "Home",
    "About Me",
    "Projects",
    "Tech Stack",
    "Contact Me",
  ];

  return (
    <Flex
      bg={"brand.100"}
      align={"center"}
      justify={"center"}
      height={"60px"}
      position={"absolute"}
      width={"full"}
      zIndex={100}
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
        gap={5}
        grow={1}
        fontSize={"16pt"}
        display={{ base: "none", lg: "flex" }}
      >
        {linksArr.map((link) => (
          <Text
            cursor={"pointer"}
            _hover={{
              color: "white",
              bg: "link.100",
              borderRadius: 5,
            }}
            fontWeight={"500"}
            padding={"1px 5px"}
          >
            {link}
          </Text>
        ))}
      </Flex>
      <Icon
        as={BiMenu}
        boxSize={"9"}
        cursor={"pointer"}
        _hover={{
          bg: "link.100",
          color: "white",
          borderRadius: "5px",
        }}
        display={{ base: "unset", lg: "none" }}
        onClick={onOpenDrawer}
      />
      <DrawerLeft onClose={onCloseDrawer} isOpen={isOpen} />
    </Flex>
  );
}
