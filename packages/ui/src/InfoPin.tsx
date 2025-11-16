import { DynamicIcon, IconName } from "lucide-react/dynamic";

type InfoPinProps = {
  iconName: IconName;
  text: string;
};

export function InfoPin({ iconName, text }: InfoPinProps) {
  return (
    <h4 className="ui:flex ui:gap-3 ui:items-center ui:py-2">
      <DynamicIcon
        name={iconName}
        className="ui:text-business-moonstone ui:size-8 ui:inline"
      />
      <span className="ui:text-2xl">{text}</span>
    </h4>
  );
}
