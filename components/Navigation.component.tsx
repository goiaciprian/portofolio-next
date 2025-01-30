import links from "@/components/utils/links.navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {

  return (
    <div className="h-[10vh] w-full fixed top-0 left-0 z-50 bg-this_black/80 backdrop-blur-sm">
      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row items-center justify-end h-full">
        {links}
      </div>
    </div>
  );
}
