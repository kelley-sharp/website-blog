"use client";
import { CldImage } from "next-cloudinary";

type MyProfilePicProps = { className?: string };
export function MyProfilePic({ className }: MyProfilePicProps) {
  return (
    <section className={className}>
      <CldImage src="blog/afsqeub2vc0rvfvkar56" width={450} height={450} alt="Kelley Sharp" />
    </section>
  );
}
