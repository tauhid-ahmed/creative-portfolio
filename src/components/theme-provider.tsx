"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

type ProviderProps = ThemeProviderProps & {
  children: React.ReactNode;
};

export function ThemeProvider({ children, ...props }: ProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme=""
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
