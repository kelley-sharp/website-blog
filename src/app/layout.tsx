"use-client";
import classNames from "classnames";
import "src/shared/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "./components/navbar";
import { Providers } from "./providers";
import { ThemeToggleButton } from "./components/theme-toggle-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kelley's Blog",
  description: "Musings from a Software Engineer with over 5 years of experience",
  openGraph: { images: "/images/profile-pic.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className={inter.className}>
        <Providers>
          <main
            className={classNames(
              "mx-4 flex flex-col",
              "max-w-screen-lg md:mx-auto",
              "pb-6 md:mt-3",
            )}
          >
            <NavBar />
            {children}
          </main>
          <ThemeToggleButton className="block md:hidden" />
        </Providers>
      </body>
    </html>
  );
}
