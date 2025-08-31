"use client";
import { Switch } from "@headlessui/react";
import classNames from "classnames";
import { useTheme } from "next-themes";
import { useEffect } from "react";

type ThemeToggleButtonProps = {
  className?: string;
};

/**
 * We should use client-side only rendering for this component
 * source: https://stackoverflow.com/a/66374800
 */
export default function ThemeToggleButton({ className }: ThemeToggleButtonProps) {
  const { systemTheme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
      } else if (systemTheme) {
        setTheme(systemTheme);
      }
    }
  }, []);

  function handleToggleTheme(value: boolean) {
    if (value === true) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else if (value === false) {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <>
      <div
        className={classNames(
          "mb-2 mt-5 flex flex-col items-center justify-start gap-2 pb-10 md:mb-0 md:mt-0 md:flex-row md:gap-4 md:pb-0",
          className,
        )}
      >
        <p className="text-md font-bold text-neutral-dark dark:text-neutral-light">
          {resolvedTheme === "dark" ? "Dark" : "Light"}
        </p>
        <Switch
          checked={resolvedTheme === "dark"}
          onChange={(e) => handleToggleTheme(e)}
          className={classNames(
            resolvedTheme === "dark" ? " bg-accent2-light" : "bg-accent2-dark",
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
              resolvedTheme === "dark"
                ? "translate-x-8 bg-dark md:translate-x-5"
                : "translate-x-0 bg-offwhite",
              "pointer-events-none inline-block transform md:h-5 md:w-5",
              "rounded-full shadow ring-0 transition duration-200",
              "h-7 w-7 ease-in-out",
            )}
          />
        </Switch>
      </div>
    </>
  );
}
