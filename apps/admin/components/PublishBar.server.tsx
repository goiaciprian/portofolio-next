"use server";

import { getEnvironments } from "@portofolio/internal/cms";
import PublishBarClient from "./PublishBar.client";

export default async function PublishBarServer() {
  const envs = await getEnvironments();
  return <PublishBarClient environments={envs.map((e) => e.name)} />;
}
