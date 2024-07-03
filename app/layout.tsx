import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Carrot Challenge 6",
    default: "Carrot Challenge 6",
  },
  description: "Carrot Market Challenge 6!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-auto max-w-sm`}>{children}</body>
    </html>
  );
}
