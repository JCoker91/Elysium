import { createTheme, MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = createTheme({
  fontFamily: "var(--font-geist-sans), sans-serif",
  headings: { fontFamily: "var(--font-geist-sans), sans-serif" },
  defaultRadius: "md",
  primaryShade: { light: 6, dark: 8 },
  components: {},
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em",
  },
});
