import Link from "next/link";

export default function notFound() {
  return (
    <div className="m-10 flex flex-col gap-4 text-center">
      <p className="text-slate-500 dark:text-white/70">Sorry, that Blog Post does not exist!</p>
      <Link href="/" className="text-pink-500 no-underline">
        Back to Home
      </Link>
    </div>
  );
}
