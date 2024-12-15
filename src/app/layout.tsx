import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const font = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noah M. Kim",
  description: "Personal portfolio of Noah M. Kim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
