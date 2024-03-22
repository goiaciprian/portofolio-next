import type { Metadata } from "next";
import { Providers } from "@/app/providers";

import '@/app/global.css'
import { Navigation } from "@/app/components/Navigation.component";
import { Footer } from "@/app/components/Footer.component";

export const metadata: Metadata = {
  title: "Potrofolio",
  description: "Hello, my name is Ciprian Goia and I am full-stack software engineer. I am confident working with React, Angular, NestJS, .NET and SprinBoot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
