import { Button } from "@portofolio/ui/Button";
import { getCVUrl } from "@portofolio/internal/client";

export const PreviewCVButton = async () => {
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
};
