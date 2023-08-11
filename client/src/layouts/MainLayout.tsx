import { Flex } from "@chakra-ui/react";
import { main_bg } from "../utils/variables";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <Flex p={10} bg={main_bg} height={"100vh"}>
      <Header />
    </Flex>
  );
}
