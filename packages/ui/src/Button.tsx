import { DynamicIcon, IconName } from "lucide-react/dynamic";
import React, { MouseEventHandler } from "react";

type ButtonProps = {
  text: string;
  variant?: "secondary" | "primary";
  icon?: IconName;
  className?: string;
} & (
  | {
      as?: "button";
      onClick: MouseEventHandler;
      href?: never;
      target?: never;
    }
  | {
      as?: "a";
      href: string;
      onClick?: never;
      target?: React.HTMLAttributeAnchorTarget;
    }
);
export function Button({
  text,
  as = "button",
  variant = "primary",
  icon,
  className,
  target,
  href,
  onClick,
}: ButtonProps) {
  const styles = {
    secondary: {
      base: "ui:flex ui:items-center ui:justify-center ui:gap-2 ui:lg:text-2xl ui:font-semibold ui:border-2 ui:px-4 ui:py-2 ui:rounded-md ui:border-business-moonstone/50 ui:cursor-pointer ui:min-w-46 ui:hover:shadow-moonstone",
      icon: "ui:size-6 ui:lg:size-8 ui:text-business-moonstone/50",
      span: "ui:w-max",
    },
    primary: {
      base: "ui:flex ui:items-center ui:justify-center ui:gap-2 ui:lg:text-2xl ui:font-semibold ui:px-4 ui:py-2 ui:rounded-md ui:text-business-black ui:bg-business-moonstone ui:min-w-45 ui:hover:border-business-moonstone/50 ui:border-2 ui:hover:text-white ui:hover:bg-transparent ui:hover:shadow-moonstone ui:group/a-button",
      icon: "ui:size-6 ui:lg:size-8 ui:text-business-black ui:group-hover/a-button:text-business-moonstone/50",
      span: "ui:w-max",
    },
  };
  switch (as) {
    case "a":
      return (
        <a
          href={href}
          target={target}
          className={`${styles[variant].base} ${className}`}
          rel="noreferrer"
        >
          {icon && (
            <DynamicIcon
              name={icon}
              className={`${styles[variant].icon}`}
            />
          )}
          <span className={`${styles[variant].span}`}>{text}</span>
        </a>
      );
    case "button":
      return (
        <button
          onClick={onClick}
          className={`${styles[variant].base} ${className}`}
        >
          {icon && (
            <DynamicIcon
              name={icon}
              className={`${styles[variant].icon}`}
            />
          )}
          <span className={`${styles[variant].span}`}>{text}</span>
        </button>
      );
    default:
      return null;
  }
}
