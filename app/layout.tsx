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
  title: {
    default: "Ashutosh Tripathy | Software Engineer",
    template: "%s | Ashutosh Tripathy",
  },

  description:
    "Ashutosh Tripathy – Software Engineer specializing in Backend Development, Cloud Engineering, DevOps, Automation, and AI-powered systems.",

  keywords: [
    "Ashutosh Tripathy",
    "Software Engineer",
    "Backend Developer",
    "DevOps Engineer",
    "Cloud Engineer",
    "Python Developer",
    "Automation Engineer",
    "Next.js Portfolio",
    "Django Developer",
    "Flask Developer",
    "AWS Engineer",
    "Freelancer",
    "uIPath Developer",
    "RPA Developer",
    "Power Automate Developer",
  ],

  authors: [{ name: "Ashutosh Tripathy" }],
  creator: "Ashutosh Tripathy",

  openGraph: {
    title: "Ashutosh Tripathy | Software Engineer Portfolio",
    description:
      "Backend, Cloud & DevOps Engineer building scalable systems, automation tools, and modern AI applications.",
    url: "https://ashutoshbuilds-dev.onrender.com/",
    siteName: "Ashutosh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ashutosh Tripathy | Software Engineer",
    description:
      "Backend, Cloud & DevOps Engineer building scalable systems and automation tools.",
  },

  robots: {
    index: true,
    follow: true,
  },
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
