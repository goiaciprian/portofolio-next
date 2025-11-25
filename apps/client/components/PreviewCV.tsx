import { Button } from "@portofolio/ui/Button";
import { getCVUrl } from "@portofolio/internal/client";
import { connection } from "next/server";

export default async function PreviewCVButton() {
  "use server";
  await connection();
  const cvLink = await getCVUrl();
  return (
    <Button
      text="Preview CV"
      as="a"
      href={cvLink}
      icon="file"
      variant="secondary"
      target="_blank"
    />
  );
}
