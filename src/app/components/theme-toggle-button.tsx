"use client";
import { Switch } from "@headlessui/react";
import classNames from "classnames";
import { useTheme } from "next-themes";
import { useEffect, useState, lazy, Suspense } from "react";

//lazy here means don't import the file until rendered
const LightThemeLazy = lazy(() => import("src/shared/styles/light-theme"));
const DarkThemeLazy = lazy(() => import("src/shared/styles/dark-theme"));

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
    <>
      <Suspense fallback={<></>}>
        {theme === "light" ? <LightThemeLazy /> : null}
        {theme === "dark" ? <DarkThemeLazy /> : null}
      </Suspense>
      <div className="mb-2 mt-5 flex flex-col items-center justify-center gap-2 md:mx-12 md:mb-0 md:mt-0 md:flex-row md:gap-4">
        <p className="text-md font-bold text-nuetralText-dark">Theme</p>
        <Switch
          checked={theme === "light"}
          onChange={(e) => handleToggleTheme(e)}
          className={classNames(
            theme === "dark" ? " bg-accent2-light" : "bg-accent2-dark",
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
                ? "translate-x-8 bg-darkBg md:translate-x-5"
                : "translate-x-0 bg-lightBg",
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
