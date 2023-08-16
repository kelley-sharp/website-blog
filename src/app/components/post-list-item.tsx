import classNames from "classnames";
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
          className={classNames(
            "text-neutral-dark underline hover:text-neutral-light",
            "dark:text-neutral-light dark:hover:text-offwhite",
          )}
        >
          {title}
        </Link>
        <br />
        <p className="text-md text-neutral-light dark:text-offwhite">{formattedDate}</p>
      </li>
    </div>
  );
}
