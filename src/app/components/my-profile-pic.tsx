"use client";
import { CldImage } from "next-cloudinary";
// import Image from "next/image";
import classNames from "classnames";

type MyProfilePicProps = { className?: string; size?: number };
export function MyProfilePic({ className, size }: MyProfilePicProps) {
  return (
    <section
      className={classNames(
        className,
        "border-rounded-2xl overflow-hidden border border-transparent",
      )}
      style={{
        width: "auto",
        height: `${size ? size * 0.175 : 345}px`,
      }}
    >
      <CldImage
        src="blog/afsqeub2vc0rvfvkar56"
        width={size ? size : 2000}
        height={size ? size : 2000}
        alt="Kelley Sharp"
        className="h-full w-full object-cover"
      />
    </section>
  );
}
