import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RBased Pvt. Ltd.",
  description: "Research-Based Solutions to Real-Life Problems through Remote Sensing and GIS",
  icons: {
    icon: [
      {
        url: "/favicon_io /favicon-32x32.png",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        url: "/favicon_io /favicon-16x16.png", 
        sizes: "16x16",
        type: "image/x-icon",
      },
      {
        url: "/favicon_io /favicon-48x48.png",
        sizes: "48x48",
        type: "image/x-icon",
      }
    ],
    apple: [
      {
        url: "/favicon_io/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/jpg",
      },
    ],
    other: [
      {
        rel: "manifest",
        url: "/manifest.json",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable } antialiased`}
        suppressHydrationWarning
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
