import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tomokanji.app"),
  title: "Tomokanji — Learn Kanji on Your Lock Screen",
  description:
    "Add kanji to your iPhone lock screen and home screen. Study passively every time you unlock your phone. Beautiful widgets for Japanese learners.",
  openGraph: {
    title: "Tomokanji — Learn Kanji on Your Lock Screen",
    description:
      "Add kanji to your iPhone lock screen and home screen. Study passively every time you unlock your phone. Beautiful widgets for Japanese learners.",
    type: "website",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomokanji — Learn Kanji on Your Lock Screen",
    description:
      "Add kanji to your iPhone lock screen and home screen. Study passively every time you unlock your phone. Beautiful widgets for Japanese learners.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
