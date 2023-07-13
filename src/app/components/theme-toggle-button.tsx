"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

let modes = ["light", "dark"];

export function ThemeToggleButton() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [currentMode, setCurrentMode] = useState<string>(systemTheme ? systemTheme : "light");

  // useEffect only runs on the client, so now we can safely show the UI as next-themes workaround for appDir bug
  useEffect(() => {
    setMounted(true);
    if (systemTheme) {
      modes.push("system");
    }
  }, []);

  if (!mounted) {
    return null;
  }

  function handleSelectModeOption(value: string) {
    if (value === "system") {
      if (systemTheme) {
        setTheme(systemTheme);
        setCurrentMode("system");
      }
    } else {
      setTheme(value);
      setCurrentMode(value);
    }
  }

  return (
    <select
      value={currentMode}
      className="fixed bottom-0 rounded-lg bg-gray-200"
      onChange={(e) => handleSelectModeOption(e.currentTarget.value)}
    >
      {modes.map((mode) => {
        return (
          <option key={mode} value={mode}>
            {mode}
          </option>
        );
      })}
    </select>
  );
}
