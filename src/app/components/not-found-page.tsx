import Link from "next/link";

type NotFoundPageProps = {
  message: string;
  globalNotFound?: boolean;
};

export default function NotFoundPage({ message, globalNotFound }: NotFoundPageProps) {
  return (
    <div className="m-10 flex flex-col gap-4 text-center">
      <p className="text-slate-500 dark:text-white/70">{message}</p>
      {!globalNotFound && (
        <Link href="/" className="text-pink-500 no-underline">
          Back to Home
        </Link>
      )}
    </div>
  );
}
