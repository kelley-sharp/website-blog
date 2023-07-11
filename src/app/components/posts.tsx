import { getSortedPostsData } from "../../../lib/posts";
import { BlogPost } from "../../../types";
import { getFormattedDate } from "../../../shared/helpers";
import Link from "next/link";

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
  const { title, id, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <div>
      <li className="test-2xl my-5">
        <Link className="underline hover:text-black/70" href={`/posts/${id}`}>
          {title}
        </Link>
        <br />
        <p className="text-sm">{formattedDate}</p>
      </li>
    </div>
  );
}
