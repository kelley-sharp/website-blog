import classNames from "classnames";
import Link from "next/link";
import { SocialMediaIcons } from "src/app/components/social-media-icons";
import { ThemeToggleButton } from "src/app/components/theme-toggle-button";

export function NavBar() {
  return (
    <nav className="min-w-md mb-2 mt-5 flex md:my-10">
      <div className="grid w-full grid-cols-12 items-center">
        <ThemeToggleButton className="col-span-full hidden md:col-span-3 md:flex" />
        <LogoHeader className="col-span-full md:col-span-6" />
        <SocialMediaIcons className="col-span-full md:col-span-3" />
      </div>
    </nav>
  );
}

type LogoHeaderProps = {
  className?: string;
};
function LogoHeader({ className }: LogoHeaderProps) {
  return (
    <h1 className={classNames("mb-2 font-bold md:mx-12 md:mb-0", className)}>
      <Link
        href="/"
        className={classNames(
          "text-nuetralText-dark hover:text-nuetralText-light dark:text-nuetralText-light dark:hover:text-lightText",
        )}
      >
        <div className="text-center text-6xl md:text-4xl">
          Kelley <br /> Sharp
        </div>
      </Link>
    </h1>
  );
}
