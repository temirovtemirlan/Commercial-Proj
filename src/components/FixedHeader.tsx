import { type FC } from "react";
import { cn } from "helpers/style.ts";
import Container from "./Container";
import { useMediaQuery } from "usehooks-ts";

interface FixedHeaderProps {
  className?: string;
}

const FixedHeader: FC<FixedHeaderProps> = ({ className }) => {
  const matches = useMediaQuery("(min-width: 650px)");

  return (
    <div
      className={cn(
        "fixed top-0 w-full bg-white px-2.5 z-50 box-border h-[56px]",
        className
      )}
    >
      <Container className={"flex items-center h-full"}>
        {/*className="w-[130px] xs:w-[190px] md:w-[234px] md:h-[43px]"*/}
        {/*<img*/}
        {/*  src={*/}
        {/*    "https://storage.googleapis.com/mkit_monster_bucket/Logo/MONSTER-LOGO-TEXT.svg"*/}
        {/*  }*/}
        {/*  alt="monster-text"*/}
        {/*/>*/}
        {matches ? (
          <img
            className={"h-full max-h-9 py-1"}
            src={
              "https://storage.googleapis.com/mkit_monster_bucket/Logo/MONSTER-LOGO-TEXT.svg"
            }
            alt="monster-text"
          />
        ) : (
          <img
            className={"h-full py-1"}
            src={
              " https://storage.googleapis.com/mkit_monster_bucket/Logo/MONSTER-LOGO.svg"
            }
            alt="monster-text"
          />
        )}

        <a
          href={"/#contactform"}
          className={
            "bg-[#0171e3] text-white rounded-full px-5 py-2 ml-auto no-underline truncate"
          }
        >
          Заказать проект
        </a>
      </Container>
    </div>
  );
};

export default FixedHeader;
