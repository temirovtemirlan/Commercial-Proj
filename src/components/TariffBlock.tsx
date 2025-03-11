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
    <div className={"text-center w-[360px] px-5 box-border"}>
      <div
        className={cn("bg-[#f5f5f7] w-full h-[534px] rounded-2.5xl", className)}
      ></div>
      <legend className="text-black text-[28px] font-bold mt-[60px]">
        {title}
      </legend>
      <p className={"text-black text-base font-normal my-[16px]"}>
        {description}
      </p>

      <span className="text-black text-base font-semibold">{price}</span>

      <button className="w-[162px] h-11 p-2.5 bg-[#0071e3] rounded-[100px] justify-center items-center gap-2.5 inline-flex mt-[40px] text-white">
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
      <span className="text-[28px] font-semibold [&_svg]:max-w-14 [&_svg]:max-h-14 [&_svg]:w-14 [&_svg]:h-14">
        {head}
      </span>

      <span className="text-xs block mt-3 font-normal leading-relaxed">
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
