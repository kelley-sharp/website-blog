"use-client";
import classNames from "classnames";
import "src/shared/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "./components/navbar";
import { Providers } from "./providers";
import dynamic from "next/dynamic";

const ThemeToggleButton = dynamic(() => import("./components/theme-toggle-button"), { ssr: false });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kelley's Blog",
  description: "Musings from a Software Engineer with over 5 years of experience",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
