import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { hennyPenny } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hennyPenny.className} antialiased`}>{children}</body>
    </html>
  );
}
