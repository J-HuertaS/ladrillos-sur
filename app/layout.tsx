import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
