import type { Metadata } from "next";
import { Amiri, Montserrat } from "next/font/google";
import "./globals.css";
import { weddingConfig } from "@/config/weddingConfig";

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
  variable: "--font-amiri",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: weddingConfig.social.title,
  description: weddingConfig.social.description,
  openGraph: {
    title: weddingConfig.social.title,
    description: weddingConfig.social.description,
    images: weddingConfig.social.images,
  },
  twitter: {
    card: "summary_large_image",
    title: weddingConfig.social.title,
    description: weddingConfig.social.description,
    images: weddingConfig.social.images,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${amiri.variable} ${montserrat.variable} font-serif antialiased bg-[#FDFBF7] text-[#1A1A1A]`}
      >
        {children}
      </body>
    </html>
  );
}
