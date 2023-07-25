"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="m-10 flex flex-col gap-4 text-center">
      <h2 className="text-slate-500 dark:text-white/70">Something went wrong!</h2>
      <button
        className="w=[100px] rounded-xl border-2 border-blue-300 px-4 py-2 text-black hover:text-slate-400"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <Link href="/" className="text-pink-500 no-underline">
        Back to Home
      </Link>
    </div>
  );
}
