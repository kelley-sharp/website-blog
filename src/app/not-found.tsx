import Link from "next/link";
import NotFoundPage from "src/app/components/not-found-page";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center gap-4">
      <NotFoundPage message="Hmmm...page not found." globalNotFound />
      <p className="text-slate-500">
        Try{" "}
        <Link
          className="m-2 text-center font-bold text-pink-500 no-underline"
          href="https://kelleysharp.me"
        >
          kelleysharp.me
        </Link>
      </p>
    </div>
  );
}
