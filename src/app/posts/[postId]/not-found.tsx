import Link from "next/link";

export default function notFound() {
  return (
    <div className="text-center">
      <p>Sorry, that Blog Post does not exist!</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
