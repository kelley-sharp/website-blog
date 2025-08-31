"use client";
import { useTheme } from "next-themes";
// import { CldImage } from "next-cloudinary";
import Image from "next/image";

type MyLogoProps = { className?: string; size?: number };
export function MyLogo({ className }: MyLogoProps) {
  return (
    <section style={{ width: 300 }} className={className}>
      <Image src="/logo-light.svg" alt="Kelley Sharp's Logo" width={600} height={339} />
    </section>
  );
}
