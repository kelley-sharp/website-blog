import Image from "next/image";
import classNames from "classnames";

type MyProfilePicProps = {
  classnames?: string;
};
export function MyProfilePic({ classnames }: MyProfilePicProps) {
  return (
    <section className={classNames(classnames ? classnames : "fixed top-0 mx-auto w-full")}>
      <Image
        className="mx-auto my-0"
        src="/images/me.png"
        width={200}
        height={200}
        alt="Kelley Sharp"
        priority={true}
      />
    </section>
  );
}
