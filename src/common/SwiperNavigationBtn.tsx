import type { FC } from "react";
import { cn } from "helpers/style";

interface IProps {
  className?: string;
  prevClass: string;
  nextClass: string;
}

const SwiperNavigationBtn: FC<IProps> = ({
  className,
  prevClass,
  nextClass,
}) => {
  return (
    <div className={cn("flex justify-end gap-5 w-full", className)}>
      <button className={prevClass}>
        <PrevArrow />
      </button>

      <button className={cn("rotate-180 ", nextClass)}>
        <PrevArrow />
      </button>
    </div>
  );
};

export default SwiperNavigationBtn;

const PrevArrow = () => (
  <svg
    width="36"
    height="37"
    viewBox="0 0 36 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="0.385864" width="36" height="36" rx="18" fill="#ECECEE" />
    <path
      d="M20 11.3859L14 18.3859L20 25.3859"
      stroke="#B8B8B9"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 11.3859L14 18.3859L20 25.3859"
      stroke="#535354"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
