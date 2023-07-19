import { MyProfilePic } from "src/app/components/my-profile-pic";
import { Posts } from "src/app/components/posts-list";
export default function Home() {
  return (
    <div className="mx-auto pb-6 md:relative md:top-5 md:mt-3 md:w-[800px]">
      <div className="fixed w-72 md:w-[800px]">
        <MyProfilePic />
        <div className="invisible relative mb-12 rounded-full border-2 border-pink-500 p-10 text-3xl text-blue-300 md:visible md:top-[108px] md:-mt-14 md:flex md:gap-4 md:text-left">
          <p className="invisible md:visible">Welcome!</p>
          <p className="invisible md:visible">👋🏻&nbsp;</p>
        </div>
      </div>
      <Posts />
    </div>
  );
}
