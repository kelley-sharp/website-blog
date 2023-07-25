"use client";
import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MyProfilePic } from "src/app/components/my-profile-pic";

export function CenterPiece() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);
  return (
    <div
      className={classNames(
        "flex items-center",
        "mb-12 rounded-xl border-2 border-pink-500 text-3xl",
        "text-blue-400 dark:text-blue-300 md:flex md:min-w-full",
        "px-5 pt-5 md:gap-4",
        "mx-auto",
      )}
    >
      <div className="flex flex-col gap-4 text-center">
        <p>Welcome!</p>
        <p>👋🏻</p>
        <p className="text-center text-2xl">
          I'm a Software Engineer. I write about projects I'm building and the tech I use along the
          way.
        </p>

        <p>📢</p>
        <p className="mb-5 text-center text-2xl">
          <Link href="mailto:hello@kelleysharp.me">Contact me!</Link>
        </p>
        {isMobile && <MyProfilePic />}
      </div>
      {!isMobile && <MyProfilePic />}
    </div>
  );
}
