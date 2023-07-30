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
        "flex flex-col items-center",
        "mb-12 rounded-xl border-2 border-accent1-dark text-2xl",
        "text-accent2-dark dark:text-accent2-light md:min-w-full md:flex-row",
        "px-5 pt-5 md:gap-4",
        "mx-auto",
      )}
    >
      <div className="flex flex-col gap-4 text-center">
        <p>Welcome!</p>
        <p>👋🏻</p>
        <p className="text-center">
          I'm a Software Engineer. I write about projects I'm building and the tech I use along the
          way.
        </p>

        <p>📢</p>
        <p className="mb-5">
          <Link href="mailto:hello@kelleysharp.me" passHref legacyBehavior>
            <a target="_blank">Contact me!</a>
          </Link>
        </p>
        {isMobile && <MyProfilePic />}
      </div>
      {!isMobile && <MyProfilePic />}
    </div>
  );
}
