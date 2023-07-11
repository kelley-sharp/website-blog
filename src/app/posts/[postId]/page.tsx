import { getPostData, getSortedPostsData } from "../../../../lib/posts";
import { notFound } from "next/navigation";
import { getFormattedDate } from "../../../../shared/helpers";
import Link from "next/link";
import { MyProfilePic } from "src/app/components/my-profile-pic";

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); //deduped! (request won't be sent twice)
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const { title, date } = post;

  return {
    title,
    date,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); //deduped! (request won't be sent twice)
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);

  const formattedDate = getFormattedDate(date);

  return (
    <main className="prose prose-xl mx-auto my-10 px-6">
      <h1 className="mb-0 mt-4 text-5xl">{title}</h1>
      <p className="mt-0">{formattedDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">Back to home</Link>
        </p>
      </article>
      <MyProfilePic classnames="fixed bottom-0 right-0" />
    </main>
  );
}
