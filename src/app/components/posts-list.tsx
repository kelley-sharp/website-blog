import { getPostsMeta } from "../../../lib/posts";
import { Meta } from "../../../types";
import { getFormattedDate } from "../../../shared/helpers";
import Link from "next/link";

type PostsListProps = {
  className?: string;
};
export async function PostsList({ className }: PostsListProps) {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  return (
    <>
      <h2 className="text-4xl font-bold text-pink-500 dark:text-yellow-300">Blog</h2>
      <section className={className}>
        <ul className="mb-10 w-full list-none p-0">
          {posts.map((post) => (
            <PostListItem key={post.postId} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}

type PostListItemProps = {
  post: Meta;
};

function PostListItem({ post }: PostListItemProps) {
  const { title, date, postId } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <div>
      <li className="my-5 text-2xl">
        <Link
          className="text-slate-500 underline hover:text-slate-400 dark:hover:text-white/70"
          href={`/posts/${postId}`}
          prefetch={false}
        >
          {title}
        </Link>
        <br />
        <p className="text-md text-slate-400 dark:text-white/70">{formattedDate}</p>
      </li>
    </div>
  );
}
