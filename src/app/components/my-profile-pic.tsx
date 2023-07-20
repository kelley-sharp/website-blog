"use client";
import classNames from "classnames";
import { CldImage } from "next-cloudinary";

type MyProfilePicProps = {
  className?: string;
};
export function MyProfilePic({ className }: MyProfilePicProps) {
  return (
    <section className={classNames(className)}>
      <CldImage
        src="blog/afsqeub2vc0rvfvkar56"
        className="mx-auto my-0"
        width="200"
        height="200"
        alt="Kelley Sharp"
        quality="100"
      />
    </section>
  );
}
