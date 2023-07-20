import Link from "next/link";
import { SocialMediaIcons } from "src/app/components/social-media-icons";
import { ThemeToggleButton } from "src/app/components/theme-toggle-button";

export function NavBar() {
  return (
    <nav className="min-w-md flex p-10">
      <div className="flex w-full flex-col md:flex-row md:justify-between md:px-6">
        <ThemeToggleButton />
        <h1 className="mb-2 text-3xl font-bold md:mb-0">
          <Link
            href="/"
            className=" text-slate-500 no-underline hover:text-slate-400 dark:text-white/70 dark:hover:text-white/70"
          >
            <div className="flex flex-col text-7xl md:text-center md:text-4xl">
              Kelley <br /> Sharp
              <span className="pt-4 text-xl  md:text-center md:text-sm">Software Engineer</span>
            </div>
          </Link>
        </h1>
        <SocialMediaIcons />
      </div>
    </nav>
  );
}
