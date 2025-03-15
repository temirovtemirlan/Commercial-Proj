import { type FC } from "react";
import { cn } from "helpers/style";

interface IndicatorsLoadingProps {
  className?: string;
  title: string;
  percent: string;
}

const IndicatorsLoading: FC<IndicatorsLoadingProps> = ({
  className,
  title,
  percent,
}) => {
  return (
    <div
      className={cn(
        "w-full self-stretch inline-flex justify-start items-start gap-[30px]",
        className
      )}
    >
      <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
        <div className="self-stretch h-3.5 bg-gradient-to-r from-[#f5baff] to-[#694bff] rounded-[100px]" />
        <div className="justify-start text-white text-2xl font-semibold">
          {title}
        </div>
      </div>
      <div className="justify-start text-[#f5baff] xl:text-[45px] text-[28px] font-bold leading-[40px]">
        {percent}
      </div>
    </div>
  );
};

export default IndicatorsLoading;
