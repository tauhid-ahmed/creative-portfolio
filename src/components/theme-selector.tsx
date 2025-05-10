"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type ColorTheme =
  | "default"
  | "purple"
  | "blue"
  | "green"
  | "orange"
  | "red"
  | "rose"
  | "yellow";

const themes: { value: ColorTheme; label: string; color: string }[] = [
  { value: "default", label: "Default", color: "bg-gray-500" },
  { value: "red", label: "Red", color: "bg-red-500" },
  { value: "rose", label: "Rose", color: "bg-rose-500" },
  { value: "orange", label: "Orange", color: "bg-orange-500" },
  { value: "green", label: "Green", color: "bg-emerald-500" },
  { value: "blue", label: "Blue", color: "bg-blue-500" },
  { value: "yellow", label: "Yellow", color: "bg-yellow-500" },
  { value: "purple", label: "Purple", color: "bg-purple-500" },
];

const DEFAULT_THEME = "rose";

export function ThemeSelector() {
  const [colorTheme, setColorTheme] = useState<ColorTheme | "">("");
  const root = document.documentElement;

  useEffect(() => {
    const savedColorTheme = localStorage.getItem("color-theme") as ColorTheme;
    if (
      savedColorTheme &&
      themes.some((theme) => theme.value === savedColorTheme)
    ) {
      setColorTheme(savedColorTheme);
      root.dataset.theme = savedColorTheme;
    } else {
      setColorTheme(DEFAULT_THEME);
      root.dataset.theme = DEFAULT_THEME;
      localStorage.setItem("color-theme", DEFAULT_THEME);
    }
  }, []);

  const handleThemeChange = (theme: ColorTheme) => {
    setColorTheme(theme);
    root.dataset.theme = theme;
    localStorage.setItem("color-theme", theme);
  };

  return (
    <DropdownMenu key={colorTheme}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full size-7 p-0 border-primary/20"
        >
          <div
            className={cn(
              "size-4 rounded-full",
              themes.find((theme) => theme.value === colorTheme)?.color
            )}
          />
          <span className="sr-only">Select a color theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[100]" align="end">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => handleThemeChange(theme.value)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className={cn("size-4 rounded-full", theme.color)} />
            <span>{theme.label}</span>
            {colorTheme === theme.value && <Check className="size-4 ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
