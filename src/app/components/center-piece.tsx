import classNames from "classnames";
import Link from "next/link";
import { MyProfilePic } from "src/app/components/my-profile-pic";

export function CenterPiece() {
  return (
    <div
      className={classNames(
        "invisible md:visible",
        "flex items-center",
        "mb-12 rounded-xl border-2 border-pink-500 text-3xl",
        "text-blue-400 dark:text-blue-300 md:flex md:min-w-full",
        "px-5 pt-5 md:gap-4",
        "mx-auto",
      )}
    >
      <div className="flex flex-col gap-4 text-center">
        <p className="invisible md:visible">Welcome!</p>
        <p className="invisible md:visible">👋🏻</p>
        <p className="invisible text-center text-2xl md:visible">
          I'm a Software Engineer. I write about projects I'm building and the tech I use along the
          way.
        </p>
        <p>📢</p>
        <p className="invisible mb-5 text-center text-2xl md:visible">
          <Link href="mailto:hello@kelleysharp.me">Contact me!</Link>
        </p>
      </div>
      <MyProfilePic />
    </div>
  );
}
