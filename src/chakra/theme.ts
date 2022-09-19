import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

// 2. Extend the theme to include custom colors, fonts, etc
export const Theme = extendTheme({
  colors: {
    brand: {
      100: "black",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "#F5F7F8",
      },
    }),
  },
  components: {
    // Input, // not working for some reason - come back to this
  },
});
