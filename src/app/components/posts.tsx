import { getSortedPostsData } from "../../../lib/posts";
import { BlogPost } from "../../../types";

export function Posts() {
  const posts = getSortedPostsData();
  return (
    <section className="relative mx-auto mt-6 max-w-2xl">
      <h2 className="text-4xl font-bold">Blog</h2>
      <ul className="mb-10 w-full">
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}

type PostListItemProps = {
  post: BlogPost;
};

function PostListItem({ post }: PostListItemProps) {
  return (
    <div>
      <li className="my-5 flex justify-between">
        <span>{post.title}</span>
        <span>{post.date}</span>
      </li>
    </div>
  );
}
