import type { Metadata } from "next";
import { Amiri, Montserrat } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://wedding-invite-kankroliwala.netlify.app"),
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
