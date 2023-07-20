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
      <p className="invisible md:visible">Welcome!</p>
      <p className="invisible md:visible">👋🏻&nbsp;</p>
      <p className="invisible text-2xl md:visible">
        I blog about projects I'm building and the tech I'm using along the way.
      </p>
      <p className="invisible md:visible">🔉&nbsp;</p>
      <p className="invisible text-2xl md:visible">I would love to hear from you!</p>
      <MyProfilePic className="mx-auto w-full border-b-2 border-b-pink-500 md:border-none" />
    </div>
  );
}
