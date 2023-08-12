import { animate } from "framer-motion";

export const smoothScroll = (target: string) => {
  const element = document.getElementById(target);
  if (element) {
    // calculating the vertical position (in pixels) from the top of the
    // document where you want to scroll to.
    const top = element.getBoundingClientRect().top + window.scrollY;
    // smoothly scrolling the page to a specific position
    animate(window.scrollY, top, {
      duration: 0.9,
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
