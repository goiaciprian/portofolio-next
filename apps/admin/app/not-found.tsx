"use client";

import Image from "next/image";

export default function NotFound() {
  return (
    <main className="w-full h-dvh flex flex-col justify-center items-center px-20 gap-4">
      <Image
        src="https://doodleipsum.com/400x400/flat?i=092c62f68586521285e2e30f74b840c4"
        alt="not found"
        height="400"
        width="400"
      />
      <h1 className="text-4xl font-bold text-business-moonstone">Oops</h1>
      <h2 className="text-2xl">Didn&apos;t found the page</h2>
      <button
        className="underline font-bold text-2xl"
        onClick={() => {
          window.location.href = "/app";
        }}
      >
        Return Home
      </button>
    </main>
  );
}
