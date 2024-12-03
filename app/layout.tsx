import type { Metadata } from "next";

import '@/app/global.css'
import { Navigation } from "@/components/Navigation.component";
import { Footer } from "@/components/Footer.component";
import React from "react";

export const metadata: Metadata = {
  title: "Ciprian Goia | Full-stack software engineer",
  description: "Hello,I am full-stack software engineer. I am confident working with React, Angular, NestJS, .NET and SpringBoot.",
  keywords: ["fullstack", "full-stack", "full stack", "frontend", "backend", "software", "engineer", "good", "best", "cheap"],
  openGraph: {
    title: "Ciprian Goia | Full-stack software engineer",
    description: "Hello,I am full-stack software engineer. I am confident working with React, Angular, NestJS, .NET and SpringBoot.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-this_black text-white">
          <Navigation />
          {children}
          <Footer />
      </body>
    </html>
  );
}
