import { getPostsMeta } from "../../lib/posts";
import PostListItem from "src/app/components/post-list-item";

type PostsListProps = {
  className?: string;
};
export async function PostsList({ className }: PostsListProps) {
  const posts = await getPostsMeta();

  if (!posts) {
    return (
      <p className="mt-10 text-center text-slate-500 dark:text-white/70">
        Sorry, no posts available.
      </p>
    );
  }

  return (
    <>
      <h2 className="text-4xl font-bold text-pink-400 dark:text-yellow-300">Blog</h2>
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
