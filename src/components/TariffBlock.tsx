import { type ReactNode, type FC, Fragment } from "react";
import { CustomScroll } from "react-custom-scroll";
import { AnimatedComponent } from "common/ui/animatedComponent";
import { cn } from "helpers/style";
import type { ITariffFooter, ITariffHead } from "fusion/type";

interface TariffStartProps {
  item: { head: ITariffHead; footer: ITariffFooter[]; tabCategory: string };
}

const TariffStart: FC<TariffStartProps> = ({ item }) => {
  return (
    <div className="text-center w-full box-border px-2.5">
      <div className="w-full max-w-[284px] rounded-2.5xl overflow-hidden h-[500px] mx-auto bg-gray-200">
        {item.head.media ? (
          <video
            className={"object-cover size-full"}
            src={`https://storage.googleapis.com/mkit_monster_bucket/Tariff/${item.head.media}`}
            loop
            autoPlay
            muted
            controls={false}
            playsInline
          />
        ) : (
          <div className="flex size-full justify-center items-center">
            <span className="text-center inline-block my-auto text-lg">
              Скоро
            </span>
          </div>
        )}
      </div>
      <legend className="text-black text-xl xl:text-[24px] font-bold mt-4 md:mt-[40px] w-full">
        {item.head.title}
      </legend>

      <div className="text-black text-lg md:text-base my-2 md:my-[16px] w-4/5 mx-auto h-auto md:h-[100px] overflow-y-auto tariff-custom_scroll_description">
        <CustomScroll heightRelativeToParent="100%">
          {item.head.description}
        </CustomScroll>
      </div>

      <p
        className="text-black text-lg md:text-base font-semibold"
        dangerouslySetInnerHTML={{ __html: item.head.price }}
      />

      {item.head.content ? (
        <p className="mt-1 w-full h-full font-semibold text-center">
          {item.head.content}
        </p>
      ) : null}

      <AnimatedComponent
        tag="button"
        whileHover={{ scale: 1.04, y: -2 }}
        className="w-[192px] h-11 p-2 md:p-2.5 bg-[#0071e3] rounded-full text-base justify-center items-center gap-2.5 inline-flex mt-[40px] text-white"
      >
        Оставить заявку
      </AnimatedComponent>
    </div>
  );
};

interface ITariffEnd {
  head: ReactNode | string;
  before?: string;
  descriptions: string[];
  className?: string;
}

const TariffEnd: FC<ITariffEnd> = ({
  head,
  before,
  descriptions,
  className,
}) => {
  const validImg = head?.toString().includes("png");

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center text-[#1d1d1f]",
        className
      )}
    >
      {before && <span className="absolute -mt-5 text-xs">{before}</span>}
      <span className="text-center text-xl xl:text-[24px] font-semibold">
        {validImg ? <img src={typeof head === "string" ? head : ""} /> : head}
      </span>

      <span className="text-base block mt-2 leading-relaxed text-center">
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
