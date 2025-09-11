"use client";

import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";
import { lightTheme, darkTheme } from "./tokens.css";
import "@radix-ui/themes/styles.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      value={{ light: lightTheme, dark: darkTheme }}
    >
      <Theme appearance="inherit">{children}</Theme>
    </ThemeProvider>
  );
}
