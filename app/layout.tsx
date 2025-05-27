import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SpictraMind",
  description: `
    A personal blog web app.
    Spectrumic Mind is a web application built to serve as a digital home for my thoughts, insights, and intellectual explorations. It’s designed as a minimal yet powerful space where I can write, edit, and publish articles that span across philosophy, science, and everything in between.
    This isn’t just a blog—it’s a personal publishing platform tailored to help me think clearly, write deeply, and share meaningfully. Whether I'm drafting a new concept, publishing a refined essay, or keeping track of spontaneous notes, Spectrumic Mind supports the full spectrum of the writing and thinking process.
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.ico" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
