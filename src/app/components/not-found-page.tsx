import Link from "next/link";

type NotFoundPageProps = {
  message: string;
  globalNotFound?: boolean;
};

export default function NotFoundPage({ message, globalNotFound }: NotFoundPageProps) {
  return (
    <div className="m-10 flex flex-col gap-4 text-center">
      <p className="text-neutral-dark dark:text-neutral-light">{message}</p>
      {!globalNotFound && (
        <Link href="/" className="text-accent1-dark no-underline hover:text-accent1-light">
          Back to Home
        </Link>
      )}
    </div>
  );
}
