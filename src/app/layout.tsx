import type { Metadata } from "next";
import { Libre_Franklin, Public_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageFade from "@/components/PageFade";

// Hosted portfolio font set: Libre Franklin for headings, Public Sans
// for body, JetBrains Mono for small labels.
const libreFranklin = Libre_Franklin({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const publicSans = Public_Sans({
  variable: "--font-public",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
      className={`${libreFranklin.variable} ${publicSans.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#121417] text-[#f2f1ec]">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||(t===null&&window.matchMedia('(prefers-color-scheme: light)').matches)){document.documentElement.classList.add('light');}}catch(e){}})();`,
          }}
        />
        <Navbar />
        <main className="flex-1">
          <PageFade>{children}</PageFade>
        </main>
        <Footer />
      </body>
    </html>
  );
}
