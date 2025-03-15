import type { FC } from "react";
import CountUp from "react-countup";
import { cn } from "helpers/style";

interface IndicatorsLoadingProps {
  className?: string;
  title: string;
  percent: number;
  gradientClassName?: string;
  indicatorClassName?: string;
  inView: boolean;
}

const IndicatorsLoading: FC<IndicatorsLoadingProps> = ({
  className,
  title,
  percent,
  gradientClassName,
  inView,
}) => {
  return (
    <div
      className={cn(
        "w-full self-stretch inline-flex justify-start items-start gap-[30px]",
        className
      )}
    >
      <div className="flex-1 inline-flex flex-col justify-start items-start">
        <div
          className={cn("self-stretch h-2.5 animate-expand", gradientClassName)}
        />
        <p className="justify-start text-white text-2xl mt-3 font-normal">
          {title}
        </p>
      </div>

      <CountUp
        className={cn(
          "justify-start xl:text-[45px] text-[28px] font-semibold leading-[23px] xl:leading-[40px]",
          gradientClassName
        )}
        end={percent}
        duration={3}
        separator=","
        suffix="%"
        scrollSpyOnce={true}
        startOnMount={inView}
      />
    </div>
  );
};

export default IndicatorsLoading;
