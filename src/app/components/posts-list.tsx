import { getPostsMeta } from "../../lib/posts";
import PostListItem from "src/app/components/post-list-item";

type PostsListProps = {
  className?: string;
};
export async function PostsList({ className }: PostsListProps) {
  const posts = await getPostsMeta();

  if (!posts) {
    return (
      <p className="mt-10 text-center text-nuetralText-dark dark:text-lightText">
        Sorry, no posts available.
      </p>
    );
  }

  return (
    <>
      <h2 className="text-3xl font-bold text-accent1-light dark:text-accent3 md:text-4xl">Blog</h2>
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
