import { DynamicIcon, IconName } from "lucide-react/dynamic";

type InfoPinProps = {
  iconName: IconName;
  text: string;
};

export function InfoPin({ iconName, text }: InfoPinProps) {
  return (
    <h4 className="ui:flex ui:gap-3 ui:items-center ui:py-1 ui:lg:py-2">
      <DynamicIcon
        name={iconName}
        className="ui:text-business-moonstone ui:size-6 ui:lg:size-8 ui:inline"
      />
      <span className="ui:lg:text-2xl">{text}</span>
    </h4>
  );
}
