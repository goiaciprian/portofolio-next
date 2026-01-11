"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AuthButton } from "~/components/AuthButton";
import useUser from "~/hooks/useUser";

export default function Navbar() {
  const user = useUser();
  const params = useSearchParams();

  const tab = params.get("tab") ?? "preview";
  const env = params.get("env") ?? "PRODUCTION";

  return (
    <aside className="sticky top-0 inline-block">
      <div className="pl-10 pt-10">
        <h1 className="text-white text-4xl">
          Welcome,
          <br />
          {user.name}
        </h1>
      </div>
      <div className="px-10 text-white text-3xl pt-8 h-full sticky top-0">
        <div className="flex flex-col h-full flex-1">
          <div className="flex flex-col gap-8">
            <Link href={`?tab=preview&env=${env}`}>
              <button
                className={`hover:text-business-moonstone cursor-pointer underline-offset-4 ${tab === "preview" ? "text-business-moonstone underline" : ""}`}
              >
                Preview
              </button>
            </Link>
            <Link href={`?tab=projects&env=${env}`}>
              <button
                className={`hover:text-business-moonstone cursor-pointer underline-offset-4 ${tab === "projects" ? "text-business-moonstone underline" : ""}`}
              >
                Projects
              </button>
            </Link>
            <Link href={`?tab=skills&env=${env}`}>
              <button
                className={`hover:text-business-moonstone cursor-pointer underline-offset-4 ${tab === "skills" ? "text-business-moonstone underline" : ""}`}
              >
                Skills
              </button>
            </Link>
          </div>
          <div className="pt-8">
            <AuthButton type="signOut" />
          </div>
        </div>
      </div>
    </aside>
  );
}
