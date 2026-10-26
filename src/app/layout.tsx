import type { Metadata } from "next";
import { Sora, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageFade from "@/components/PageFade";

// Font set chosen by the user (preview option 2): Sora for headings,
// Manrope for body, JetBrains Mono for small labels.
const libreFranklin = Sora({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const publicSans = Manrope({
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
  title: "Zelalem Addisu | AI Training & LLM Evaluation",
  description:
    "Portfolio of Zelalem Addisu, a Computer Science graduate working across data engineering, AI training and LLM evaluation, and data analysis — preparing and validating training data, labelling it to a clear brief, evaluating and ranking model responses, checking quality, and verifying facts against reliable sources.",
  openGraph: {
    title: "Zelalem Addisu | AI Training & LLM Evaluation",
    description:
      "Portfolio of Zelalem Addisu, a Computer Science graduate working across data engineering, AI training and LLM evaluation, and data analysis — preparing and validating training data, labelling it to a clear brief, evaluating and ranking model responses, checking quality, and verifying facts against reliable sources.",
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
