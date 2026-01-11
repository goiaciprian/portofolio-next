"use server";

import { cloneEnvironment, Environment } from "@portofolio/internal/cms";
import { revalidatePath } from "next/cache";

export const publish = async (from: string, to: string) => {
  await cloneEnvironment(from as Environment, to as Environment);
  revalidatePath("/app", "page");
};
