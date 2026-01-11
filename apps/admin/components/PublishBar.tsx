"use client";

import { PublishMenu } from "./PublishMenu";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Environment } from "@portofolio/internal/cms";
import { api } from "~/lib/eden";

export default function PublishBar() {
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
  const env = params.get("env") ?? "PRODUCTION";

  return (
    <div
      className={`pt-10 pb-5 text-xl flex gap-2 pl-8 sticky top-0 bg-business-black mb-8`}
    >
      <select
        id="environment"
        className="bg-business-black block outline-none [direction:rtl] *:[direction:ltr] border rounded-xl text-center"
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
  );
}
