"use client";
import { CldImage } from "next-cloudinary";

export function MyProfilePic() {
  return (
    <section className="border-b-2 border-b-accent1-dark md:border-none">
      <CldImage src="blog/afsqeub2vc0rvfvkar56" width="500" height="500" alt="Kelley Sharp" />
    </section>
  );
}
