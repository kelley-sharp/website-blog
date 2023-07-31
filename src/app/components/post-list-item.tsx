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
      <li className="my-8 pt-0 text-xl md:my-5 md:text-2xl">
        <Link
          href={`/posts/${postId}`}
          className="text-nuetralText-dark underline hover:text-nuetralText-light dark:hover:text-lightText"
        >
          {title}
        </Link>
        <br />
        <p className="text-md text-nuetralText-light dark:text-lightText">{formattedDate}</p>
      </li>
    </div>
  );
}
