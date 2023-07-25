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
    <div className="mb-2 mt-5 flex flex-col items-center justify-center gap-2 md:mb-0 md:mt-0 md:flex-row md:gap-4">
      <p className="text-md font-bold text-slate-500">Theme</p>
      <Switch
        checked={theme === "light"}
        onChange={(e) => handleToggleTheme(e)}
        className={classNames(
          theme === "dark" ? " bg-blue-300 " : "bg-blue-400",
          "focus-none focus:ring-3 relative inline-flex md:h-6 md:w-11",
          "flex-shrink-0 cursor-pointer rounded-full border-2",
          "border-transparent transition-colors duration-200",
          "ease-in-out focus:outline-none focus:ring-offset-2",
          "h-8 w-16",
        )}
      >
        <span className="sr-only">Toggle between dark and light theme</span>
        <span
          aria-hidden="true"
          className={classNames(
            theme === "dark"
              ? "translate-x-8 bg-slate-800 md:translate-x-5"
              : "translate-x-0 bg-white",
            "pointer-events-none inline-block transform md:h-5 md:w-5",
            "rounded-full shadow ring-0 transition duration-200",
            "h-7 w-7 ease-in-out",
          )}
        />
      </Switch>
    </div>
  );
}
