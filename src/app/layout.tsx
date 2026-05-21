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
  title: "KISAS x nextLMS AI K-Pop Incubating Dashboard",
  description: "World's 1st AI-based K-Pop Camp Hybrid Platform - 전 세계 지망생들을 위한 상시 트레이닝 및 아티스트 케어 시스템",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0f172a] text-slate-100 selection:bg-neon-pink selection:text-white">
        {children}
      </body>
    </html>
  );
}
