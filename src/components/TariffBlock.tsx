import { type ReactNode, type FC, Fragment } from "react";
import { cn } from "helpers/style.ts";

interface TariffStartProps {
  photo: string;
  title: string;
  description: string;
  price: string;
  className?: string;
}

const TariffStart: FC<TariffStartProps> = ({
  title,
  description,
  price,
  className,
}) => {
  return (
    <div className="text-center max-w-[240px] w-full box-border">
      <div
        className={cn("bg-[#f5f5f7] w-full h-[400px] rounded-2.5xl", className)}
      ></div>
      <legend className="text-black text-xl xl:text-[24px] font-bold mt-[60px]">
        {title}
      </legend>
      <p className={"text-black text-xs md:text-sm my-[16px]"}>{description}</p>

      <p className="text-black text-xs md:text-sm font-semibold">{price}</p>

      <button className="w-[162px] h-11 p-1.5 md:p-2.5 bg-[#0071e3] rounded-full text-sm md:text-base justify-center items-center gap-2.5 inline-flex mt-[40px] text-white">
        Оставить заявку
      </button>
    </div>
  );
};

interface ITariffEnd {
  head: ReactNode | string;
  descriptions: string[];
  className?: string;
}

const TariffEnd: FC<ITariffEnd> = ({ head, descriptions, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center text-black",
        className
      )}
    >
      <span className="text-xl xl:text-[24px] font-semibold [&_svg]:max-w-14 [&_svg]:max-h-14 [&_svg]:w-14 [&_svg]:h-14">
        {head}
      </span>

      <span className="text-xs block mt-3 leading-relaxed">
        {descriptions.map((el, index) => (
          <Fragment key={index}>
            {el}
            <br />
          </Fragment>
        ))}
      </span>
    </div>
  );
};

export { TariffStart, TariffEnd };
