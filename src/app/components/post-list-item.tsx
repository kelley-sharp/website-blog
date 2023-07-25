import Link from "next/link";
import { getFormattedDate } from "src/shared/helpers";
import { Meta } from "src/shared/types";

type PostListItemProps = {
  post: Meta;
};

export default function PostListItem({ post }: PostListItemProps) {
  const { title, date, postId } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <div>
      <li className="text-1xl my-5 pt-0 md:text-2xl">
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
