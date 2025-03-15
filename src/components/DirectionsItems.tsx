import { type FC } from "react";
import { cn } from "helpers/style.ts";

interface DirectionsItemsProps {
  className?: string;
  title?: string;
  text?: string;
}

const DirectionsItems: FC<DirectionsItemsProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 w-full bg-black h-[680px] rounded-[28px] overflow-hidden",
        // "w-full bg-black h-[680px] rounded-[28px] overflow-hidden flex gap-[50px]",
        className
      )}
    >
      <div className="w-full px-[50px] py-16">
        <div className="inline-flex flex-col justify-start items-start gap-[22px]">
          <legend className="justify-center text-[#eeadff] text-[55px] font-bold leading-tight">
            Monster Design & Branding
          </legend>
          <div className="self-stretch justify-start">
            <span className="text-white text-lg font-normal leading-relaxed">
              Форма, которая передает смысл.
              <br />
              Мир визуального потребления требует айдентики, которая выделяется.
              Мы создаем дизайн, который становится языком бренда и говорит за
              него, даже без слов.
              <br />
              <br />
            </span>
            <ul className="text-white text-lg font-normal leading-relaxed list-disc list-inside">
              <li>Глобальные концепции</li>
              <li>Айдентика, логотип, упаковка</li>
              <li>Графический и digital-дизайн</li>
              <li>Luxury & premium брендинг</li>
            </ul>
            <span className="text-white text-lg font-normal leading-relaxed">
              <br />
              Когда ваш бренд имеет голос, он звучит громче конкурентов.
            </span>
          </div>
        </div>
      </div>

      <div className="h-[680px] bg-[#adadad] w-full" />
    </div>
  );
};

export default DirectionsItems;
