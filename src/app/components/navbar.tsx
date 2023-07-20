import Link from "next/link";
import { SocialMediaIcons } from "src/app/components/social-media-icons";

export function NavBar() {
  return (
    <nav className="flex bg-gray-200 p-10">
      <div className="mx-auto flex flex-col justify-between md:flex-row md:px-6">
        <h1 className="mb-2 text-3xl font-bold md:mb-0">
          <Link
            href="/"
            className=" text-slate-500 no-underline hover:text-slate-400 dark:text-white/70 dark:hover:text-white/70"
          >
            <div className="flex flex-col text-7xl md:text-4xl">
              Kelley <br /> Sharp
              <span className="p-4 text-xl md:p-10 md:text-center md:text-sm">
                Software Engineer
              </span>
            </div>
          </Link>
        </h1>
        <SocialMediaIcons />
      </div>
    </nav>
  );
}
