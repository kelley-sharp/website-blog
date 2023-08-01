import classNames from "classnames";
import Link from "next/link";
import { MyProfilePic } from "src/app/components/my-profile-pic";

export function CenterPiece() {
  return (
    <div
      className={classNames(
        "flex flex-col items-center md:flex-row",
        "mb-12 rounded-xl border-2 border-accent1-dark text-2xl",
        "text-accent2-dark dark:text-accent2-light",
        "px-5 pt-5 md:gap-4",
        "mx-auto md:min-w-full",
      )}
    >
      <div className="flex flex-col gap-20 px-6 md:flex-row">
        <div className="flex flex-col justify-center gap-8 text-xl md:text-2xl">
          <p>Welcome! 👋🏻</p>
          <p>
            I'm a Software Engineer. I write about projects I'm building and the tech I use along
            the way.
          </p>
          <p className="mb-5 text-accent1-light hover:text-accent1-dark">
            <Link href="mailto:hello@kelleysharp.me" passHref legacyBehavior>
              <a target="_blank">Contact me! 📢</a>
            </Link>
          </p>
        </div>
        <MyProfilePic className="hidden md:block" />
      </div>
      <MyProfilePic className="block md:hidden" />
    </div>
  );
}
