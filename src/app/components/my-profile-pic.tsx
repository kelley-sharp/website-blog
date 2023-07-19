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
        classnames ? classnames : " relative top-[200px] z-10 mx-auto w-full md:top-[265px]",
      )}
    >
      <CldImage
        src="blog/afsqeub2vc0rvfvkar56
        "
        className="mx-auto my-0"
        width="200"
        height="200"
        alt="Kelley Sharp"
        quality="100"
      />
    </section>
  );
}
