"use client";
import classNames from "classnames";
import { CldImage } from "next-cloudinary";

type MyProfilePicProps = {
  classnames?: string;
};
export function MyProfilePic({ classnames }: MyProfilePicProps) {
  return (
    <section
      className={classNames(
        classnames ? classnames : "fixed right-0 top-0 z-10 mx-auto w-full md:mt-32",
      )}
    >
      <CldImage
        src="blog/kcsome4jtteixh7zgxyc"
        className="mx-auto my-0"
        width="200"
        height="200"
        alt="Kelley Sharp"
        quality="100"
      />
    </section>
  );
}
