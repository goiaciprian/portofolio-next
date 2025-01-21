import React from "react"

type StyledTypeAnimationProps = {
  text: string;
  className?: string;
}

export const StyledTypeAnimation = ({
  text,
  className = ''
}: StyledTypeAnimationProps) => {
  return <h1 className={`relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-this_black after:absolute after:inset-0 after:w-[0.075em] before:h-[55px] after:animate-caret after:bg-white ${className}`}>{text}</h1>
}
