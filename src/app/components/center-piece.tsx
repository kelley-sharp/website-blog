import classNames from "classnames";
import { MyProfilePic } from "./my-profile-pic";

export function CenterPiece() {
  return (
    <div
      className={classNames(
        "grid grid-cols-12 flex-col items-center md:flex-row",
        "mb-12 rounded-xl border-2 border-accent1-dark text-2xl",
        "text-accent2-dark dark:text-accent2-light",
        "px-5 pt-5 md:gap-4",
        "mx-auto md:min-w-full",
      )}
    >
      <div className="col-span-12 grid grid-cols-12 flex-col gap-20 px-6 md:flex-row">
        <div className="col-span-12 flex w-full flex-col text-xl md:col-span-5 md:text-2xl">
          <p>Welcome! 👋🏻</p>
          <p>
            {`Whelp, I made a blog! 'Why not?'. It's mostly a shrine to a lonely Next.js post—but hey, it's my quiet corner of the internet. One day it'll be full of deep thoughts, tech tips, and half-finished side projects. For now, it's just comforting to know it's here.`}
          </p>
        </div>
        <MyProfilePic className="col-span-12 hidden min-w-full md:col-span-9 md:block" />
      </div>
      <MyProfilePic className="col-span-12 block md:hidden" />
    </div>
  );
}
