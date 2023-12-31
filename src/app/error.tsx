"use client";
import classNames from "classnames";
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
      <h2 className="text-center text-neutral-dark dark:text-neutral-light">
        Whoops! Something went wrong!
      </h2>
      <button
        className={classNames(
          "w-[150px] rounded-lg border-2 border-accent2-light",
          "px-4 py-2 font-bold text-neutral-dark",
          "hover:text-neutral-light dark:text-neutral-light",
          "dark:hover:text-offwhite",
        )}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
