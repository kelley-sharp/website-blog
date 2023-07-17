import { getPostsMeta } from "../../../lib/posts";
import { BlogPost, Meta } from "../../../types";
import { getFormattedDate } from "../../../shared/helpers";
import Link from "next/link";

export async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  return (
    <section className="relative mx-auto mt-6 max-w-2xl">
      <h2 className="text-4xl font-bold text-yellow-300">Blog</h2>
      <ul className="mb-10 w-full list-none p-0">
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}

type PostListItemProps = {
  post: Meta;
};

function PostListItem({ post }: PostListItemProps) {
  const { title, id, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <div>
      <li className="test-2xl my-5">
        <Link className="text-slate-500 underline hover:text-white/70" href={`/posts/${id}`}>
          {title}
        </Link>
        <br />
        <p className="text-sm text-white/70">{formattedDate}</p>
      </li>
    </div>
  );
}
