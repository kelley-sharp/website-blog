import { Posts } from "src/app/components/posts";
export default function Home() {
  return (
    <main className="relative top-[130px] mx-auto px-6">
      <p className="mb-12 border-2 p-10 text-center text-3xl text-blue-800">
        Ahoy and Welcome! 👋🏻&nbsp;
      </p>
      <span className="flex justify-center text-red-600">
        I&apos;m <span className="pl-1 font-bold text-black">Kelley</span>
      </span>
      <Posts />
    </main>
  );
}
