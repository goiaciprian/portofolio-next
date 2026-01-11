import React from "react";
import { auth } from "~/auth";
import { redirect } from "next/navigation";
import Providers from "~/components/Providers";
import Navbar from "~/components/Navbar";
import PublishBarServer from "~/components/PublishBar.server";

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
        <div className="w-full">
          <Navbar />
          <main className="inline-flex flex-col align-top">
            <PublishBarServer />
            <div>{children}</div>
          </main>
        </div>
      </Providers>
    </>
  );
}
