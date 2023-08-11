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
  const linksArr: string[] = [
    "Home",
    "About Me",
    "Projects",
    "Tech Stack",
    "Contact Me",
  ];

  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg={"brand.100"}>
        <DrawerCloseButton _hover={{ bg: "link.100", color: "white" }} />
        <DrawerBody>
          <Flex direction={"column"} width={"70%"}>
            {linksArr.map((link) => (
              <Text
                cursor={"pointer"}
                _hover={{
                  color: "white",
                  bg: "link.100",
                  padding: 1,
                  borderRadius: 5,
                }}
                fontWeight={"500"}
              >
                {link}
              </Text>
            ))}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerLeft;
