import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageFade from "@/components/PageFade";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zelalem Addisu | Data Engineering, AI Training & LLM Evaluation",
  description:
    "Portfolio of Zelalem Addisu, a Computer Science graduate from Ethiopia living in the United Kingdom, working in data engineering, AI data training, and LLM evaluation.",
  openGraph: {
    title: "Zelalem Addisu | Data Engineering, AI Training & LLM Evaluation",
    description:
      "Portfolio of Zelalem Addisu, a Computer Science graduate from Ethiopia living in the United Kingdom, working in data engineering, AI data training, and LLM evaluation.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#121417] text-[#f2f1ec]">
        <Navbar />
        <main className="flex-1">
          <PageFade>{children}</PageFade>
        </main>
        <Footer />
      </body>
    </html>
  );
}
