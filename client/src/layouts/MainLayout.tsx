import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";

export default function MainLayout() {
  return (
    <Flex
      direction={"column"}
      p={3}
      bgGradient="linear(to-r, #001d3d, #003566)"
      height={"100%"}
    >
      <Header />
      <AboutMe />
    </Flex>
  );
}
