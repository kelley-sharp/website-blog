import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MyProfilePic } from "src/app/components/my-profile-pic";
import { NavBar } from "src/app/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kelley's Blog",
  description: "Created by Kelley Sharp",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
