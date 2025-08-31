"use client";
import { CldImage } from "next-cloudinary";

type MyProfilePicProps = { className?: string; size?: number };
export function MyProfilePic({ className, size }: MyProfilePicProps) {
  return (
    <section className={className}>
      <CldImage
        src="blog/afsqeub2vc0rvfvkar56"
        width={size ? size : 2000}
        height={size ? size : 2000}
        alt="Kelley Sharp"
      />
    </section>
  );
}
