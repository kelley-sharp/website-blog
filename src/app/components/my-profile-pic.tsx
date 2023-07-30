"use client";
import { CldImage } from "next-cloudinary";

export function MyProfilePic() {
  return (
    <section>
      <CldImage src="blog/afsqeub2vc0rvfvkar56" width="500" height="500" alt="Kelley Sharp" />
    </section>
  );
}
