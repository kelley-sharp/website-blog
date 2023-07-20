"use client";
import { Switch } from "@headlessui/react";
import classNames from "classnames";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggleButton() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI as next-themes workaround for appDir bug
  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined" && window.localStorage) {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
      }
    } else {
      if (systemTheme) {
        setTheme(systemTheme);
      }
    }
  }, []);

  if (!mounted) {
    return null;
  }

  function handleToggleTheme(value: boolean) {
    if (value === true) {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else if (value === false) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <div className="flex items-center gap-4">
      <p>Theme</p>
      <Switch
        checked={theme === "light"}
        onChange={(e) => handleToggleTheme(e)}
        className={classNames(
          theme === "dark" ? "bg-blue-400 focus:ring-pink-500" : "bg-pink-500 focus:ring-blue-400",
          "focus-none focus:ring-3 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-offset-2",
        )}
      >
        <span className="sr-only">Toggle between dark and light theme</span>
        <span
          aria-hidden="true"
          className={classNames(
            theme === "dark" ? "translate-x-5 bg-slate-800" : "translate-x-0 bg-white",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out",
          )}
        />
      </Switch>
    </div>
  );
}
