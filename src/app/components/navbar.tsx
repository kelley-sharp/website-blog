import classNames from "classnames";
import Link from "next/link";
import { SocialMediaIcons } from "src/app/components/social-media-icons";
import { ThemeToggleButton } from "src/app/components/theme-toggle-button";

export function NavBar() {
  return (
    <nav className="min-w-md flex p-5 md:p-10">
      <div className="flex w-full flex-col md:flex-row md:justify-between md:px-6">
        <h1 className="mb-2 font-bold md:mb-0">
          <Link
            href="/"
            className={classNames(
              "text-slate-500 no-underline hover:text-slate-400",
              "dark:text-white/70 dark:hover:text-white/70",
            )}
          >
            <div className="text-center text-6xl md:text-4xl">
              Kelley <br /> Sharp
            </div>
          </Link>
        </h1>
        <ThemeToggleButton />
        <SocialMediaIcons />
      </div>
    </nav>
  );
}
