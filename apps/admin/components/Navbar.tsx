"use client";

import { Environment } from "@portofolio/internal/cms";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AuthButton } from "~/components/AuthButton";
import { PublishMenu } from "~/components/PublishMenu";
import useUser from "~/hooks/useUser";
import { api } from "~/lib/eden";

export default function Navbar() {
  const user = useUser();
  const params = useSearchParams();
  const router = useRouter();

  const [environments, setEnvironments] = useState<Environment[]>([
    "PRODUCTION" as Environment.PRODUCTION,
  ]);

  useEffect(() => {
    const getEnvs = async () => {
      const data = await api.environments.get();
      setEnvironments(data.data ?? ["PRODUCTION" as Environment.PRODUCTION]);
    };
    getEnvs();
  }, []);

  const tab = params.get("tab") ?? "preview";
  const env = params.get("env") ?? "PRODUCTION";

  return (
    <>
      <div className="pl-10 pt-10">
        <h1 className="text-white text-4xl">Welcome, {user.name}</h1>
      </div>
      <nav className="px-10 text-white text-3xl pt-8 sticky top-0 z-10">
        <div className="flex">
          <div className="flex gap-20 flex-1">
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
          <div>
            <AuthButton type="signOut" />
          </div>
        </div>
        <div className={`pt-4 text-xl flex gap-2`}>
          <select
            id="environment"
            className="bg-business-black block outline-none [direction:rtl] *:[direction:ltr]"
            value={env}
            onChange={(e) => {
              const searchParams = new URLSearchParams(params.toString());
              searchParams.set("env", e.target.value);

              router.push(`/app?${searchParams.toString()}`);
            }}
          >
            {environments.map((env) => (
              <option key={env} value={env}>
                {env}
              </option>
            ))}
          </select>
          <PublishMenu />
        </div>
      </nav>
    </>
  );
}
