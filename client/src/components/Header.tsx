import { Button, Flex, Text } from "@chakra-ui/react";
import Typed from "react-typed";
import { smoothScroll, ChakraBox, fadeIn } from "../utils/helpers";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isInView, setIsInView] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger the animation here
          setIsInView(true);
        }
      },
      {
        threshold: 0.1, // At least 10% of the element is in view
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <ChakraBox
      id="home"
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      height={{ base: "80vh", sm: "90vh" }}
      m={"auto"}
      marginTop={8}
      variants={fadeIn}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={headerRef}
    >
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"full"}
        color={"white"}
      >
        <Text
          textAlign={"center"}
          fontSize={{ base: "4xl", md: "5xl", lg: "8xl" }}
        >
          I am specialized in
        </Text>
        <Text
          textAlign={"center"}
          fontSize={{ base: "4xl", md: "5xl", lg: "8xl" }}
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
          direction={{ base: "column", md: "row" }}
          gap={{ base: 1, xl: 5 }}
        >
          <Text
            textAlign={"center"}
            fontSize={{ base: "4xl", lg: "4xl", xl: "6xl" }}
          >
            I help businesses to
          </Text>
          <Text
            textAlign={"center"}
            fontSize={{ base: "4xl", lg: "4xl", xl: "6xl" }}
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
            fontSize={{ base: "4xl", lg: "4xl", xl: "6xl" }}
          >
            their product
          </Text>
        </Flex>
        <Text
          fontFamily={"sans-serif"}
          letterSpacing={1.5}
          lineHeight={1.8}
          fontSize={{ base: "12pt", md: "14pt", lg: "16pt" }}
          textAlign={"center"}
          width={{ base: "90%", md: "60%" }}
          mt={10}
          display={{ base: "none", md: "unset" }}
        >
          From the first sketch of an idea to its final deployment, I navigate
          both frontend landscapes and backend intricacies as a Full Stack
          Engineer. Harnessing the power of diverse technologies, I bridge gaps
          and craft comprehensive, seamless digital experiences
        </Text>
        <Text
          fontFamily={"sans-serif"}
          letterSpacing={1.5}
          lineHeight={1.8}
          fontSize={{ base: "12pt", md: "16pt" }}
          textAlign={"center"}
          width={{ base: "90%", md: "60%" }}
          mt={10}
          display={{ base: "unset", md: "none" }}
        >
          From concept to code to cloud: crafting seamless digital experiences
          as a Full Stack Engineer
        </Text>
        <Button
          // as={"a"}
          // href="#about-me"
          fontSize={{ base: "14pt", md: "16pt" }}
          size={"lg"}
          bg={"brand.100"}
          _hover={{ bg: "link.100", color: "white" }}
          mt={10}
          onClick={() => smoothScroll("about-me")}
        >
          Get to Know me
        </Button>
      </Flex>
    </ChakraBox>
  );
}
