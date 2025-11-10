"use client";

import { Button, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./ThemeToggleButton.module.css";

export default function ThemeToggleButton() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  return (
    <Button
      fullWidth
      variant="subtle"
      onClick={() => setColorScheme(isDark ? "light" : "dark")}
      aria-label="Toggle color scheme"
    >
      <IconSun size={20} className={cx(classes.icon, classes.light)} />
      <IconMoon size={20} className={cx(classes.icon, classes.dark)} />
    </Button>
  );
}
