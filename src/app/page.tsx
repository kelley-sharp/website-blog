import { Posts } from "src/app/components/posts";
export default function Home() {
  return (
    <main className="relative top-[100px] mx-auto px-6 md:top-[500px]">
      <p className="mb-12 mt-20 text-center text-3xl text-blue-800 md:mt-12">
        Ahoy and Welcome! 👋🏻&nbsp;
      </p>
      <span className="flex justify-center text-red-600">
        I'm <span className="pl-1 font-bold text-black">Kelley</span>
      </span>
      <Posts />
    </main>
  );
}
