import type { Metadata } from "next";

import '@/app/global.css'
import { Navigation } from "@/components/Navigation.component";
import { Footer } from "@/components/Footer.component";
import React from "react";
import { StructuredData } from "@/components/StructuredData.component";

export const metadata: Metadata = {
  title: "Ciprian Goia | Full-stack software engineer",
  description: "Full-stack software engineer specializing in React, NextJS, Angular, and cloud technologies. Experienced with AWS, PostgreSQL, and modern web development.",
  keywords: [
    "Ciprian Goia",
    "Full-stack Developer",
    "Software Engineer",
    "React Developer",
    "NextJS Developer",
    "Angular Developer",
    "AWS",
    "PostgreSQL",
    "Romania Developer",
    "Web Development"
  ],
  authors: [{ name: "Ciprian Goia" }],
  creator: "Ciprian Goia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cipriang-software.work",
    siteName: "Ciprian Goia Portfolio",
    title: "Ciprian Goia | Full-stack software engineer",
    description: "Full-stack software engineer specializing in React, NextJS, Angular, and cloud technologies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ciprian Goia - Full-stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ciprian Goia | Full-stack software engineer",
    description: "Full-stack software engineer specializing in React, NextJS, Angular, and cloud technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="bg-this_black text-white">
          <Navigation />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
