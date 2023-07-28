"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service potentially
    console.error({ error: error.message });
  }, [error]);

  return (
    <div className="align-center m-10 flex flex-col items-center gap-4">
      <h2 className="text-center text-slate-500 dark:text-white/70">
        Whoops! Something went wrong!
      </h2>
      <button
        className="w-[150px] rounded-lg border-2 border-blue-300 px-4 py-2 font-bold text-slate-500 hover:text-slate-400 dark:text-white/70"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <Link href="/" className="font-bold text-pink-500 no-underline">
        Back to Home
      </Link>
    </div>
  );
}
