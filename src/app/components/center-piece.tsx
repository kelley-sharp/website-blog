import classNames from "classnames";
import { MyProfilePic } from "./my-profile-pic";

export function CenterPiece() {
  return (
    <div
      className={classNames(
        "grid grid-cols-12 flex-col items-center md:flex-row",
        "mb-12 rounded-xl border-2 border-accent1-dark text-2xl",
        "text-accent2-dark dark:text-accent2-light",
        "md:gap-4",
        "mx-auto md:min-w-full",
      )}
    >
      <div className="col-span-12 grid grid-cols-12 flex-col px-6 md:flex-row">
        <div className="col-span-12 flex w-full flex-col justify-between gap-5 px-2 py-10 text-xl md:col-span-7 md:gap-3 md:text-2xl lg:gap-10">
          <p>Welcome! 👋🏻</p>
          <p>
            {`I’ve built a blog — a quiet, over-engineered sanctuary in the vast, enigmatic expanse of the internet. One day, may it will hold a trove of profound wisdom, insights, and unfinished side projects, as nature intended.`}
          </p>
        </div>
        <MyProfilePic className="col-span-12 hidden min-w-full py-5 md:col-span-5 md:block" />
      </div>
      <MyProfilePic className="col-span-12 block md:hidden" />
    </div>
  );
}
