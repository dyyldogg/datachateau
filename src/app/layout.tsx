import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Favicon from "@/components/Favicon";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Data Chateau — Cost-effective human labor for AI labs",
  description:
    "Data Chateau provides skilled human labor at competitive rates to AI labs, helping scale operations without breaking the budget.",
  icons: {
    icon: [
      { url: '/icon.svg', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark.svg', media: '(prefers-color-scheme: dark)' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased font-serif`}>
        <Favicon />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
