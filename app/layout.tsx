import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CloudBackground from "@/components/CloudBackground"
import SmoothScroll from "@/components/SmoothScroll"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashutosh Tripathy | Portfolio",
  description: "Portfolio of Ashutosh Tripathy - Backend, Cloud, DevOps and Automation Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CloudBackground />
        <SmoothScroll />
        {children}
        
      </body>
    </html>
  );
}
