import classNames from "classnames";
import { MyProfilePic } from "src/app/components/my-profile-pic";

export function CenterPiece() {
  return (
    <div
      className={classNames(
        "invisible md:visible",
        "flex items-center",
        "mb-12 rounded-xl border-2 border-pink-500 text-3xl text-blue-300 md:flex md:min-w-full md:gap-4",
        "px-4 pt-2",
        "mx-auto",
      )}
    >
      <div className="flex flex-col pl-10 text-center">
        <p className="invisible md:visible">Welcome!</p>
        <p className="invisible md:visible">👋🏻</p>
        <p className="invisible text-center text-2xl md:visible">
          I write about projects I'm building and the tech I use along the way.
        </p>
        <p>📢</p>
        <p className="invisible text-center text-2xl md:visible">Contact me!</p>
      </div>
      <MyProfilePic />
    </div>
  );
}
