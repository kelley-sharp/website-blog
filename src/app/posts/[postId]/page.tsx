import { getPostsMeta, getPostByName } from "../../../lib/posts";
import { notFound } from "next/navigation";
import { getFormattedDate } from "../../../shared/helpers";
import Link from "next/link";
import "./post.css";
import "server-only";

//for development set = 0
export const revalidate = 0;

type PostProps = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped

  if (!posts) {
    return [];
  }

  const blogPosts = posts.map((post) => ({
    postId: post.postId,
  }));

  return blogPosts;
}

export async function generateMetadata({ params: { postId } }: PostProps) {
  const post = await getPostByName(`${postId}/index.mdx`); //deduped! (request won't be sent twice)

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return { title: post.meta.title };
}

export default async function Post({ params: { postId } }: PostProps) {
  const post = await getPostByName(`${postId}/index.mdx`); //deduped! (request won't be sent twice)

  if (!post) notFound();

  const { meta, content } = post;

  const formattedDate = getFormattedDate(meta.date);

  const tags = meta.tags?.map((tag, idx) => (
    <Link key={idx} href={`/tags/${tag}/`}>
      {tag}
    </Link>
  ));

  return (
    <div className="post-content prose prose-2xl">
      <h2 className="title">{meta.title}</h2>
      <p className="date">{formattedDate}</p>
      <article className="text-slate-500">{content}</article>
      {meta.tags && (
        <section>
          <h3>Related:</h3>
          <div className="flex flex-row gap-4">{tags}</div>
        </section>
      )}
      <p className="text-center text-pink-500">
        <Link href="/">Back to home</Link>
      </p>
    </div>
  );
}
