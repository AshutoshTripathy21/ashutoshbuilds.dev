import type { Metadata } from "next";
import "../globals.css";
import CloudBackground from "@/components/CloudBackground"
import SmoothScroll from "@/components/SmoothScroll"

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
    "UiPath Developer",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <div className="noise-overlay" />
        <CloudBackground />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
