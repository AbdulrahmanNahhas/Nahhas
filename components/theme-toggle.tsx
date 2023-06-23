"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [themeValue, setThemeValue] = useState(true);

  useEffect(() => {
    setTheme("dark");
  }, []);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setThemeValue(!themeValue);
  };

  return (
    <Switch
      checked={themeValue}
      onCheckedChange={changeTheme}
      className="!ml-2 hidden"
    />
  );
}
