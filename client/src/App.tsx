import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import MainLayout from "./layouts/MainLayout";
import Navbar from "./components/Navbar";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    100: "#9EF01A",
  },
  link: {
    100: "#ff006e",
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <MainLayout />
    </ChakraProvider>
  );
}

export default App;
