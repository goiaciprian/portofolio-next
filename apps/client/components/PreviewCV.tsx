import { Button } from "@portofolio/ui/Button";
import { getCVUrl } from "@portofolio/internal/client";
import { connection } from "next/server";

export const dynamic = 'force-dynamic';

export default async function PreviewCVButton() {
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
