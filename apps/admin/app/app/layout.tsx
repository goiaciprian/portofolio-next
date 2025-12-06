import React from "react";
import { auth } from "~/auth";
import { redirect } from "next/navigation";
import Providers from "~/components/Providers";
import Navbar from "~/components/Navbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <>
      <Providers user={session.user}>
        <Navbar />
        <main>{children}</main>
      </Providers>
    </>
  );
}
