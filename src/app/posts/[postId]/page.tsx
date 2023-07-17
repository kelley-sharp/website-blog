import { getPostsMeta, getPostByName } from "../../../../lib/posts";
import { notFound } from "next/navigation";
import { getFormattedDate } from "../../../../shared/helpers";
import Link from "next/link";
import { MyProfilePic } from "src/app/components/my-profile-pic";
import "./post.css";

//only for development
export const revalidate = 0;

type PostProps = {
  params: {
    postId: string;
  };
};

// export async function generateStaticParams() {
//   const posts = await getPostsMeta(); //deduped

//   if (!posts) {
//     return [];
//   }

//   return posts.map((post) => ({
//     postId: post.id,
//   }));
// }

export async function generateMetadata({ params: { postId } }: PostProps) {
  const post = await getPostByName(`${postId}.mdx`); //deduped! (request won't be sent twice)

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return { title: post.meta.title };
}

export default async function Post({ params: { postId } }: PostProps) {
  const post = await getPostByName(`${postId}.mdx`); //deduped! (request won't be sent twice)

  if (!post) notFound();

  const { meta, content } = post;

  const formattedDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, idx) => (
    <Link key={idx} href={`/tags/${tag}/`}>
      {tag}
    </Link>
  ));

  return (
    <>
      {/* <main className="prose prose-xl mx-auto my-10 px-6"> */}
      <h2 className="mb-0 mt-4 text-5xl text-white/70">{meta.title}</h2>
      <p className="mt-0 text-white/70">{formattedDate}</p>
      <article className="text-slate-500">{content}</article>

      {/* previously section had: dangerouslySetInnerHTML={{ __html: contentHtml }} */}
      <section className="post-content">
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">{tags}</div>
      </section>
      <p>
        <Link href="/">Back to home</Link>
      </p>
      <MyProfilePic classnames="fixed bottom-0 right-0" />
    </>
  );
}
