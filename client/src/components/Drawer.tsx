import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Flex,
  Text,
} from "@chakra-ui/react";
import { ReactElement } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function DrawerLeft({ isOpen, onClose }: DrawerProps): ReactElement {
  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg={"brand.100"}>
        <DrawerCloseButton />
        <DrawerBody>
          <Flex direction={"column"}>
            <Text
              padding={"2px 15px"}
              cursor={"pointer"}
              _hover={{
                color: "white",
                bg: "link.100",
                borderRadius: 5,
              }}
              fontWeight={"500"}
            >
              Home
            </Text>
            <Text
              padding={"2px 15px"}
              cursor={"pointer"}
              _hover={{
                color: "white",
                bg: "link.100",
                borderRadius: 5,
              }}
              fontWeight={"500"}
            >
              About Me
            </Text>
            <Text
              padding={"2px 15px"}
              cursor={"pointer"}
              _hover={{
                color: "white",
                bg: "link.100",
                borderRadius: 5,
              }}
              fontWeight={"500"}
            >
              Projects
            </Text>
            <Text
              padding={"2px 15px"}
              cursor={"pointer"}
              _hover={{
                color: "white",
                bg: "link.100",
                borderRadius: 5,
              }}
              fontWeight={"500"}
            >
              Tech Stack
            </Text>
            <Text
              padding={"2px 15px"}
              cursor={"pointer"}
              _hover={{
                color: "white",
                bg: "link.100",
                borderRadius: 5,
              }}
              fontWeight={"500"}
            >
              Blog
            </Text>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerLeft;
