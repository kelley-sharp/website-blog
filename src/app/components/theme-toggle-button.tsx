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
    <div className="flex min-w-fit items-center">
      <label htmlFor={currentMode} className="dark:text-white/70">
        Theme
        <select
          value={currentMode}
          className="ml-4 rounded-lg bg-gray-200 p-2 dark:bg-slate-500 dark:text-slate-900"
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
      </label>
    </div>
  );
}
