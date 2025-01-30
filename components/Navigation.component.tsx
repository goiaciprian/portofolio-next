'use client'

import links from "@/components/utils/links.navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-[10vh] w-full fixed top-0 left-0 z-50 bg-this_black/80 backdrop-blur-sm">
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden absolute right-4 top-4 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'flex' : 'hidden'} md:hidden flex-col items-center justify-center h-screen bg-this_black fixed top-0 left-0 w-full`}>
        {links}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row items-center justify-end h-full">
        {links}
      </div>
    </div>
  );
}
