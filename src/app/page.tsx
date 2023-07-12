import { MyProfilePic } from "src/app/components/my-profile-pic";
import { Posts } from "src/app/components/posts-list";
export default function Home() {
  return (
    <main className="relative top-[130px] mx-auto w-[800px] px-6 md:mt-3">
      <MyProfilePic />
      <p className="mb-12 rounded-full border-2 border-pink-500 p-10 text-left text-3xl text-blue-300">
        Welcome! 👋🏻&nbsp;
      </p>
      <Posts />
    </main>
  );
}
