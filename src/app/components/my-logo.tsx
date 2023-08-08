"use client";
import { CldImage } from "next-cloudinary";

type MyLogoProps = { className?: string; size?: number };
export function MyLogo({ className, size }: MyLogoProps) {
  return (
    <section className={className}>
      <CldImage
        src="blog/oqdshwtaox54akkevzjw"
        width={size ? size : 300}
        height={size ? size : 300}
        alt="Kelley Sharp's Logo"
      />
    </section>
  );
}
