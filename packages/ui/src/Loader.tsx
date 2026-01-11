import { LoaderCircle } from "lucide-react";

export const Loader = ({ className = "" }: { className?: string }) => {
  return (
    <LoaderCircle
      className={`ui:animate-spin ui:text-business-moonstone ${className}`}
    />
  );
};
