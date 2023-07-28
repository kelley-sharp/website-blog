import PostListItem from "src/app/components/post-list-item";
import { getPostsMeta } from "../../../lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 86400; //86400 one day in seconds;

type TagProps = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped!

  if (!posts) return [];

  const tags = new Set(posts.map((post) => post.tags).flat());

  return Array.from(tags).map((tag) => ({ tag }));
}

export function generateMetadata({ params: { tag } }: TagProps) {
  return {
    title: `Posts related to #${tag}`,
  };
}

export default async function TagPostList({ params: { tag } }: TagProps) {
  const posts = await getPostsMeta(); //deduped!

  if (!posts)
    return (
      <p className="mt-10 text-center text-slate-500 dark:text-white/70">
        Sorry, no posts available.
      </p>
    );

  const tagPosts = posts.filter((post) => post.tags?.includes(tag));

  if (!tagPosts.length) {
    return notFound();
  }
  return (
    <>
      <p className="mt-10 text-center text-slate-500 dark:text-white/70">
        Results for <span className="text-pink-500">{tag}</span>
      </p>
      {tagPosts.map((tagPost) => (
        <PostListItem post={tagPost} />
      ))}
      <Link href="/" className="mt-4 text-center text-pink-500">
        Back to home
      </Link>
    </>
  );
}
