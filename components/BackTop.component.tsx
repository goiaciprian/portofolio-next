import {ChevronUpIcon} from "lucide-react";
import {Button} from "@/components/ui/button";

export function BackTop() {
  return (
    <Button
      className="fixed bottom-[50px] right-[50px] bg-moonstone text-this_black hover:bg-this_black hover:text-moonstone hover:shadow-topButton"
    >
        <ChevronUpIcon />
    </Button>
  );
}
