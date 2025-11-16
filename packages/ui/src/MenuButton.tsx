import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { MouseEventHandler } from "react";

type MenuItem = {
  text: string;
  icon: IconName;
} & (
  | {
      onClick: MouseEventHandler;
      href?: never;
      download?: never;
    }
  | {
      onClick?: never;
      href: string;
      target?: string;
      download?: string;
    }
);

type MenuButtonProps = {
  text: string;
  options: MenuItem[];
};

export function MenuButton({ options, text }: MenuButtonProps) {
  return (
    <div className="ui:group/menu ui:select-none ui:w-max">
      <button
        className="ui:p-2 ui:w-full ui:bg-business-moonstone ui:text-business-black ui:rounded-md ui:text-xl ui:font-semibold"
        onClick={(e) => e.preventDefault()}
      >
        {text}
      </button>
      <div className="ui:collapse ui:group-hover/menu:visible ui:mt-1 ui:rounded-m ui:h-0 ui:transition-all">
        <ul className="ui:bg-business-black-100 ui:rounded-md ui:text-white">
          {options.map((item) => (
            <li
              key={item.text}
              onClick={item.onClick}
              className="ui:px-3 ui:py-5 ui:not-last:mb-1 ui:hover:bg-white/5 ui:rounded-md ui:cursor-pointer"
            >
              <a
                href={item.href}
                className="ui:flex ui:gap-2 ui:items-center"
                download={item.download}
              >
                <DynamicIcon
                  name={item.icon}
                  className="ui:text-business-moonstone ui:size-6 ui:inline"
                />
                <span className="ui:font-semibold">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
