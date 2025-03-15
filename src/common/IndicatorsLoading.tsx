import { type FC } from "react";
import { cn } from "helpers/style";
import CountUp from "react-countup";

interface IndicatorsLoadingProps {
  className?: string;
  title: string;
  percent: number;
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
      <div className="flex-1 inline-flex flex-col justify-start items-start">
        <div className="self-stretch h-2.5 bg-gradient-to-r from-[#f5baff] to-[#694bff] rounded-[100px]" />
        <p className="justify-start text-white text-2xl mt-3 font-normal">
          {title}
        </p>
      </div>

      <CountUp
        className={
          "justify-start text-[#f5baff] xl:text-[45px] text-[28px] font-semibold leading-[20px] xl:leading-[38px]"
        }
        end={percent}
        duration={3}
        separator=","
        suffix="%"
        delay={2}
        scrollSpyOnce={true}
        enableScrollSpy={true}
      />
      {/*<div className="justify-start text-[#f5baff] xl:text-[45px] text-[28px] font-bold leading-[20px] xl:leading-normal">*/}
      {/*  {percent}%*/}
      {/*</div>*/}
    </div>
  );
};

export default IndicatorsLoading;
