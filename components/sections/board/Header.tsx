import { Card } from "@/components/ui/card";
import { TypographySmall } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { ClassNameValue } from "tailwind-merge";

interface HeaderProps {
  letters: Array<string>;
  words: Array<string>;
  isColumn?: boolean;
  className?: ClassNameValue;
}

const Header: FunctionComponent<HeaderProps> = ({
  isColumn,
  letters,
  words,
  className,
}) => {
  const extraItem = isColumn ? 1 : 0;
  const items = Array(5 + extraItem).fill(0);

  return (
    <div
      className={cn(
        isColumn ? "grid grid-cols-6 gap-2" : "flex-col flex gap-2 col-span-1",
        className
      )}
    >
      {items.map((item, index) => (
        <Card
          key={index}
          className={cn(
            "p-4 flex-1",
            isColumn ? "bg-purple-500" : "bg-blue-500",
            isColumn && index === 0 && "bg-gray-900"
          )}
        >
          <div className="flex gap-2">
            <TypographySmall>
              <span className="font-bold text-blue-950">
                {isColumn ? letters[index] : index + 1 - extraItem}
              </span>
            </TypographySmall>

            <TypographySmall>
              {words[index - extraItem]?.toUpperCase()}
            </TypographySmall>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Header;
