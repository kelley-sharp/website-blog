import classNames from "classnames";
import Link from "next/link";
import { SocialMediaIcons } from "./social-media-icons";
import { MyLogo } from "src/app/components/my-logo";
import dynamic from "next/dynamic";

const ThemeToggleButton = dynamic(() => import("src/app/components/theme-toggle-button"), {
  ssr: false,
});

export function NavBar() {
  return (
    <nav className="min-w-md mb-2 mt-5 flex md:my-10">
      <div className="grid w-full grid-cols-12 items-center">
        <div className="col-span-full hidden md:col-span-3 md:flex">
          <ThemeToggleButton />
        </div>
        <LogoHeader className="col-span-full flex justify-center md:col-span-6" />
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
    <div className={classNames(className)}>
      <Link href="/">
        <MyLogo />
      </Link>
    </div>
  );
}
