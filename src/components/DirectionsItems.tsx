import type { FC } from "react";
import { cn } from "helpers/style";

interface DirectionsItemsProps {
  className?: string;
  item: {
    title: string;
    titleGradient: string;
    descOne: string;
    list: string[];
    descTwo: string;
    img: string;
    upcText?: string;
  };
}

const DirectionsItems: FC<DirectionsItemsProps> = ({ className, item }) => {
  return (
    <div
      className={cn(
        "grid lg:grid-cols-2 w-full bg-black lg:max-h-[680px] min-h-[680px] rounded-[28px] overflow-hidden",
        className
      )}
    >
      <div className="w-full h-[280px] bg-[#adadad] lg:hidden"></div>

      <div className="w-full px-6 py-8 md:p-10">
        <div className="inline-flex flex-col justify-start items-start gap-[22px]">
          <legend
            className="justify-center text-[55px] font-bold leading-tight"
            style={{
              background: item.titleGradient,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {item.title}
          </legend>

          <div className="lg:self-stretch lg:justify-start">
            {item.upcText && (
              <p className="text-white text-base md:text-lg leading-relaxed">
                {item.upcText}
              </p>
            )}

            <p
              className={`text-white text-base md:text-lg leading-relaxed ${
                item.upcText ? "mt-6" : ""
              }`}
            >
              {item.descOne}
            </p>

            <ul className="text-white text-base md:text-lg leading-relaxed list-disc list-inside mt-6">
              {item.list.map((el) => (
                <li key={el}>{el}</li>
              ))}
            </ul>

            <p className="text-white text-base md:text-lg leading-relaxed mt-6">
              {item.descTwo}
            </p>
          </div>
        </div>
      </div>

      <div className="h-[680px] bg-[#adadad] w-full max-lg:hidden"></div>
    </div>
  );
};

export default DirectionsItems;
