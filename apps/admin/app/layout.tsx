import "@portofolio/ui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Suspense } from "react";
import { Loader } from "@portofolio/ui/Loader";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ciprian Goia Software Developer CMS",
  description: "CMS for Ciprian Goia Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Suspense
          fallback={
            <div className="grid place-items-center h-screen">
              <Loader className="size-12" />
            </div>
          }
        >
          {children}
        </Suspense>
      </body>
    </html>
  );
}
