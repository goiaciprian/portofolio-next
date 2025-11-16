import "@portofolio/ui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ClientMetadata } from "client/components/ClientMetadata";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ciprian Goia | Full-stack software engineer",
  description:
    "Full-stack software engineer specializing in React, NestJS, .NET, and cloud technologies. Experienced with AWS, PostgreSQL, and modern web development.",
  keywords: [
    "Ciprian Goia",
    "Full-stack Developer",
    "Software Engineer",
    "React Developer",
    "NextJS Developer",
    "NestJS Developer",
    "Angular Developer",
    "AWS",
    "PostgreSQL",
    "Romania Developer",
    "Web Development",
    "Backend Developer",
    "Spring Boot Developer",
    ".NET Developer",
    "NodeJS Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Cloud Developer",
    "DevOps Developer",
    "Docker Developer",
  ],
  authors: [{ name: "Ciprian Goia" }],
  creator: "Ciprian Goia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cipriang-software.work",
    siteName: "Ciprian Goia Software Engineer",
    title: "Ciprian Goia | Full-stack software engineer",
    description:
      "Full-stack software engineer specializing in React, NestJS, .NET, and cloud technologies.",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ciprian Goia | Full-stack software engineer",
    description:
      "Full-stack software engineer specializing in React, NestJS, .NET, and cloud technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "7CKOEz0WH2QSz7LOuUI8QtvEXxGcEF38XgqI5zkmPJs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ClientMetadata />
      </head>
      <body className={geist.className}>{children}</body>
    </html>
  );
}
