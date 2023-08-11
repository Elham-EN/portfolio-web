import { Flex } from "@chakra-ui/react";
import { main_bg } from "../utils/variables";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";

export default function MainLayout() {
  return (
    <Flex direction={"column"} p={10} bg={main_bg} height={"100%"}>
      <Header />
      <AboutMe />
    </Flex>
  );
}
