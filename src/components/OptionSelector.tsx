import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface OptionSelectorProps {
  category: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

const OptionSelector = ({
  category,
  options,
  selected,
  onSelect,
}: OptionSelectorProps) => {
  return (
    <div className="space-y-3 animate-fade-up">
      <h3 className="text-lg font-medium capitalize">
        {category.replace(/([A-Z])/g, " $1").trim()}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {options.map((option) => (
          <div
            key={option}
            className={cn(
              "option-card",
              selected === option && "selected"
            )}
            onClick={() => onSelect(option)}
          >
            <p className="text-sm">{option}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionSelector;