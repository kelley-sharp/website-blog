"use client";
import { CldImage } from "next-cloudinary";
import classNames from "classnames";

type MyProfilePicProps = { className?: string; size?: number };
export function MyProfilePic({ className, size }: MyProfilePicProps) {
  return (
    <section
      className={classNames(
        className,
        "border-rounded-2xl h-[370px] w-auto self-end overflow-hidden border border-transparent md:h-[235px] lg:h-[345px]",
      )}
    >
      <CldImage
        src="blog/afsqeub2vc0rvfvkar56"
        width={size ? size : 1800}
        height={size ? size : 1800}
        alt="Kelley Sharp"
        className="h-auto w-full object-cover"
      />
    </section>
  );
}
