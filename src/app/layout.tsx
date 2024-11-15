import { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Noah M. Kim",
  description: "Project portfolio of Noah M. Kim.",
};

const jb = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jb.className} antialiased`}>{children}</body>
    </html>
  );
}
