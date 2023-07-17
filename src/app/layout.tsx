"use-client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "src/app/components/navbar";
import { ThemeToggleButton } from "src/app/components/theme-toggle-button";
import { Providers } from "src/app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kelley's Blog",
  description: "Created by Kelley Sharp",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <NavBar />
          <ThemeToggleButton />
          <main className="prose prose-xl prose-slate mx-auto px-4 dark:prose-invert md:px-6">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
