"use client";
import { CldImage } from "next-cloudinary";

export function MyProfilePic() {
  return (
    <section className="border-b-2 border-b-pink-500 md:border-none">
      <CldImage
        src="blog/afsqeub2vc0rvfvkar56"
        width="400"
        height="400"
        alt="Kelley Sharp"
        quality="100"
      />
    </section>
  );
}
