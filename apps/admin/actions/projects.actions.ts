"use server";

import z from "zod";
import {
  createProject as createProjectInternal,
  Environment,
  uploadImage as uploadImageInternal,
} from "@portofolio/internal/cms";
import { revalidatePath } from "next/cache";

export type ProjectFromState = {
  description_left?: string;
  image_left?: File;
  image_url_left?: string;
  description_right?: string;
  image_right?: File;
  image_url_right?: string;
  errors?: {
    description_left?: string[];
    description_right?: string[];
    image_left?: string[];
    image_right?: string[];
    image_url_left?: string[];
    image_url_right?: string[];
    general?: string[];
  };
};

const projectSide = z.object({
  description: z.string().nonempty(),
  image: z.file().refine((f) => f.size !== 0, { error: "File Required" }),
  image_url: z.url(),
});

export const createProject = async (
  _prevState: ProjectFromState,
  input: FormData,
): Promise<ProjectFromState> => {
  const environment = input.get("environment"),
    description_left = input.get("description_left"),
    description_right = input.get("description_right"),
    image_left = input.get("image_left"),
    image_right = input.get("image_right"),
    image_url_left = input.get("image_url_left"),
    image_url_right = input.get("image_url_right");

  const parseLeft = await projectSide.safeParseAsync({
    description: description_left,
    image: image_left,
    image_url: image_url_left,
  });

  const parseRight = await projectSide.safeParseAsync({
    description: description_right,
    image: image_right,
    image_url: image_url_right,
  });

  const errors: Record<string, string[] | undefined> = {};
  if (!parseLeft.success) {
    const leftErrors = parseLeft.error.flatten().fieldErrors;
    errors["description_left"] = leftErrors?.description;
    errors["image_left"] = leftErrors?.image;
    errors["image_url_left"] = leftErrors?.image_url;
  }
  if (!parseRight.success) {
    const rightErrors = parseRight.error.flatten().fieldErrors;
    errors["description_right"] = rightErrors?.description;
    errors["image_right"] = rightErrors?.image;
    errors["image_url_right"] = rightErrors?.image_url;
  }

  await createProjectInternal(
    {
      left: parseLeft.success
        ? {
            description: parseLeft.data.description,
            imageURL: parseLeft.data.image_url,
            image: await uploadImageInternal(parseLeft.data.image),
          }
        : undefined,
      right: parseRight.success
        ? {
            description: parseRight.data.description,
            imageURL: parseRight.data.image_url,
            image: await uploadImageInternal(parseRight.data.image),
          }
        : undefined,
    },
    environment! as Environment,
  );

  revalidatePath("/app", "page");

  return {
    description_left: undefined,
    description_right: undefined,
    image_left: undefined,
    image_right: undefined,
    image_url_left: undefined,
    image_url_right: undefined,
    errors: parseLeft.error && parseRight.error ? errors : undefined,
  };
};
