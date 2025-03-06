import { type FC } from "react";
import { cn } from "helpers/style.ts";

interface TariffStartProps {
  className?: string;
}

const TariffStart: FC<TariffStartProps> = ({ className }) => {
  return (
    <div className={"text-center w-[360px] px-5 box-border"}>
      <div
        className={cn("bg-[#f5f5f7] w-full h-[534px] rounded-2.5xl", className)}
      ></div>
      <legend className="text-black text-[28px] font-bold mt-[60px]">
        CG Video Pro
      </legend>
      <p className={"text-black text-base font-normal my-[16px]"}>
        The ultimate iPad experience with the most advanced technology.
      </p>

      <span className="text-black text-base font-semibold font-['Nunito Sans']">
        From $999 or $83.25/mo. for 12 mo.
      </span>

      {/**/}
      <button className="w-[162px] h-11 p-2.5 bg-[#0071e3] rounded-[100px] justify-center items-center gap-2.5 inline-flex mt-[40px] text-white">
        Оставить заявку
      </button>
    </div>
  );
};

const TariffEnd: FC = () => {
  return (
    <div>
      dfadsfs
      <div></div>
    </div>
  );
};

export { TariffStart, TariffEnd };
