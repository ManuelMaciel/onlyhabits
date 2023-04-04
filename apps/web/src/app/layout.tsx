import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { Toaster } from "@/components/config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// TODO: Update description
export const metadata: Metadata = {
  title: "OnlyHabits | Building better habits for a better you",
  description: "Generated by create next app",
  icons: [
    {
      rel: "shortcut icon",
      url: "/favicon.ico",
      type: "image/x-icon",
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-base-300 text-base-content ${inter.className}`}>
        {children}

        <Toaster />
      </body>
    </html>
  );
}
