"use server";

import { revalidatePath } from "next/cache";
import {
  createSkill as createSkillCms,
  deleteSkillById as deleteProjectByIdCms,
  Environment,
} from "@portofolio/internal/cms";
import z from "zod";

export type SkillFormState = {
  name?: string;
  type?: string;
  errors?: {
    name?: string[];
    type?: string[];
    general?: string[];
  };
};

const skillCreateInput = z.object({
  name: z.string().nonempty(),
  type: z.enum(["OTHER", "MAIN"]),
});

export const createSkill = async (
  _prevState: SkillFormState,
  input: FormData
): Promise<SkillFormState> => {
  const name = input.get("name");
  const type = input.get("type");
  const environment = input.get("environment") as Environment;

  const parsed = await skillCreateInput.safeParseAsync({
    name,
    type,
  });

  if (!parsed.success) {
    return {
      name: name?.toString() ?? "",
      type: type?.toString() ?? "",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await createSkillCms(
      { name: parsed.data.name, type: parsed.data.type },
      environment
    );
  } catch (e) {
    return {
      name: parsed.data.name,
      type: parsed.data.type,
      errors: {
        general: [(e as Error).message],
      },
    };
  }
  revalidatePath("/app", "page");

  return {
    name: "",
    type: "",
  };
};

export const deleteSkillById = async (id: string) => {
  await deleteProjectByIdCms(id);
};
