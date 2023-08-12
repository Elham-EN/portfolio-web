import { animate, motion, isValidMotionProp } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

export const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const smoothScroll = (target: string) => {
  const element = document.getElementById(target);
  if (element) {
    // calculating the vertical position (in pixels) from the top of the
    // document where you want to scroll to.
    const top = element.getBoundingClientRect().top + window.scrollY;
    // smoothly scrolling the page to a specific position
    animate(window.scrollY, top, {
      duration: 0.5,
      onUpdate: (value) => window.scrollTo(0, value),
    });
  }
};

interface NavLink {
  id: string;
  name: string;
}

export const linksArr: NavLink[] = [
  { id: "home", name: "Home" },
  { id: "about-me", name: "About Me" },
  { id: "project", name: "Projects" },
  { id: "tech-stack", name: "Tech Stack" },
  { id: "contact-me", name: "Contact Me" },
];
