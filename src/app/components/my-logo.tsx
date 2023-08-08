"use client";
import { CldImage } from "next-cloudinary";

type MyLogoProps = { className?: string; size?: number };
export function MyLogo({ className, size }: MyLogoProps) {
  return (
    <section style={{ width: 300 }} className={className}>
      <CldImage
        src="blog/oqdshwtaox54akkevzjw"
        width={size ? size : 600}
        height={size ? size : 339}
        alt="Kelley Sharp's Logo"
        quality={100}
      />
    </section>
  );
}
