import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Yousif Alkhayyat - Portfolio",
  description: "My projects",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body
        className={`${spaceGrotesk.className} bg-[radial-gradient(circle_at_50%_75%,#1e3330,#000000)] text-white min-h-screen flex flex-col items-center justify-center scrollbarmain`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
