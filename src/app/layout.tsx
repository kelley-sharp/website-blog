"use-client";
import classNames from "classnames";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "src/app/components/navbar";
import { Providers } from "src/app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kelley's Blog",
  description: "Created by Kelley Sharp",
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
              "flex flex-col",
              "mx-5 max-w-screen-lg md:mx-auto",
              "pb-6 md:mt-3",
            )}
          >
            <NavBar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
