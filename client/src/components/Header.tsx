import { Flex, Text } from "@chakra-ui/react";
import Typed from "react-typed";

export default function Header() {
  return (
    <Flex
      direction={"column"}
      width={"95%"}
      height={"90vh"}
      m={"auto"}
      marginTop={10}
    >
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        height={"full"}
        color={"white"}
      >
        <Text
          textAlign={"center"}
          fontSize={{ base: "5xl", md: "6xl", lg: "8xl" }}
        >
          I am specialized in
        </Text>
        <Text
          textAlign={"center"}
          fontSize={{ base: "5xl", md: "6xl", lg: "8xl" }}
        >
          <Typed
            strings={[
              "frontend dev",
              "backend dev",
              "fullstack dev",
              "mobile app dev",
              "AI dev",
            ]}
            loop
            typeSpeed={20}
            backSpeed={30}
            style={{ color: "#ff006e" }}
          />{" "}
        </Text>
        <Flex
          direction={{ base: "column", xl: "row" }}
          gap={{ base: 1, xl: 5 }}
        >
          <Text
            textAlign={"center"}
            fontSize={{ base: "5xl", md: "6xl", lg: "6xl" }}
          >
            I help tech startups to
          </Text>
          <Text
            textAlign={"center"}
            fontSize={{ base: "5xl", md: "6xl", lg: "6xl" }}
          >
            <Typed
              strings={["launch", "optimize", "scale", "enhance"]}
              loop
              typeSpeed={20}
              backSpeed={30}
              style={{ color: "#9EF01A" }}
            />{" "}
          </Text>
          <Text
            textAlign={"center"}
            fontSize={{ base: "5xl", md: "6xl", lg: "6xl" }}
          >
            their product
          </Text>
        </Flex>
        <Text
          fontFamily={"sans-serif"}
          letterSpacing={1.5}
          lineHeight={1.8}
          fontSize={{ base: "14pt", md: "16pt" }}
          textAlign={"center"}
          width={{ base: "90%", md: "60%" }}
          mt={10}
        >
          I am a software engineer with more than four years of experience.
          Recognized as a practical and effective developer, experienced in
          leading cross-functional teams in a time-pressured setting to complete
          projects on schedule and within budget.
        </Text>
      </Flex>
    </Flex>
  );
}
