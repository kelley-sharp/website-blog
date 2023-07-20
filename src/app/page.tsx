import classNames from "classnames";
import { MyProfilePic } from "src/app/components/my-profile-pic";
import { PostsList } from "src/app/components/posts-list";
import { SocialMediaIcons } from "src/app/components/social-media-icons";

export default function Home() {
  return (
    <>
      <div
        className={classNames(
          "invisible md:visible",
          "flex items-center",
          "mb-12 rounded-xl border-2 border-pink-500 text-3xl text-blue-300 md:flex md:gap-4 md:text-left",
          "p-10",
          "mx-auto",
        )}
      >
        <MyProfilePic className="mx-auto w-full border-b-2 border-b-pink-500 md:border-none" />
        <p className="invisible md:visible">Welcome!</p>
        <p className="invisible md:visible">👋🏻&nbsp;</p>
      </div>
      <PostsList className="max-h-24 overflow-y-scroll" />
    </>
  );
}
