import { type FC } from "react";
// import { AnimatedComponent } from "common/ui/animatedComponent.tsx";
// import { useInView } from "react-intersection-observer";
import { cn } from "helpers/style.ts";
import HowWeWork from "components/HowWeWork.tsx";
import Container from "components/Container.tsx";
import CountUp from "react-countup";

interface Props {
  className?: string;
}

const WhatClientGet: FC<Props> = ({ className }) => {
  // const [ref, inView] = useInView({
  //   threshold: 0.6,
  //   triggerOnce: true,
  // });

  return (
    //ref={ref}
    <div className={cn("py-[100px]", className)}>
      {/*<AnimatedComponent*/}
      {/*  tag="legend"*/}
      {/*  initial={{ y: 60, opacity: 0 }}*/}
      {/*  animate={inView ? { y: 0, opacity: 1 } : undefined}*/}
      {/*  transition={{ duration: 0.5, delay: 0.2 }}*/}
      {/*  className="gradient-legend-1lvl"*/}
      {/*>*/}

      <legend className={"gradient-legend-1lvl"}>
        Результаты, которые <br /> становятся стандартом
      </legend>
      {/*</AnimatedComponent>*/}
      {/*<AnimatedComponent*/}
      {/*  tag="p"*/}
      {/*  initial={{ y: 60, opacity: 0 }}*/}
      {/*  animate={inView ? { y: 0, opacity: 1 } : undefined}*/}
      {/*  transition={{ duration: 0.5, delay: 0.3 }}*/}
      {/*  className="legend-2lvl text-balance"*/}
      {/*>*/}
      <p className="legend-2lvl text-balance">
        В мире, где контент не замечают,
        <br /> бренды теряются, а бюджеты сгорают <br /> без результата —
        Monster Corp. <br /> даёт измеримое влияние.
      </p>
      {/*</AnimatedComponent>*/}

      <Container
        className={
          "flex w-full gap-5 mt-[100px] *:rounded-3xl md:flex-nowrap flex-wrap"
        }
      >
        <div
          className={
            "md:w-1/2 w-full h-[610px] box-border bg-[#F7F0E9] p-5 flex justify-center items-end"
          }
        >
          <span className="w-[568px] text-center justify-center text-[#ddbc98] text-[28px] font-semibold font-['Nunito_Sans'] leading-[30.80px]">
            427+ проектов — от стартапов до международных корпораций
          </span>
        </div>

        <div
          className={
            "md:w-1/2 w-full box-border flex flex-col gap-5 *:justify-start *:items-center *:p-8 *:flex *:bg-[#f9f2eb] *:rounded-3xl *:grow-1"
          }
        >
          <div className="w-full h-[296.50px] md:text-left text-center">
            <span className="md:w-[568px] w-full text-center justify-center beige-graident-text text-[28px] font-semibold font-['Nunito_Sans'] leading-[30.80px]">
              Узнаваемость бренда растёт до x10 после наших ребрендингов и
              контент-стратегий
            </span>
          </div>
          <div className="w-full h-[296.50px]">
            <span className="md:w-[568px] w-full text-center justify-center beige-graident-text text-[28px] font-semibold font-['Nunito_Sans'] leading-[30.80px]">
              Узнаваемость бренда растёт до x10 после наших ребрендингов и
              контент-стратегий
            </span>
          </div>
        </div>
      </Container>
      <Container className={"w-full mt-5"}>
        <div
          className={
            "flex w-full gap-5 *:bg-[#f9f2eb] *:rounded-3xl xl:flex-nowrap flex-wrap "
          }
        >
          <WhatClientGetBlock
            title={"ROI в performance-маркетинге"}
            subtitle={12}
            prefix={"x"}
          />
          <WhatClientGetBlock
            title={"Вовлечённость в соцсетях"}
            subtitle={180}
            prefix={"+"}
            suffix={"%"}
          />
          <WhatClientGetBlock
            title={"Рост трафика на сайт до"}
            subtitle={240}
            prefix={"+"}
            suffix={"%"}
          />
        </div>
      </Container>

      <Container className={"my-[50px]"}>
        <legend
          className={
            "text-black md:text-[44px] text-3xl font-bold md:leading-[40px] leading-tight text-center"
          }
        >
          Это не просто метрики. Это эффект присутствия. <br /> И это только
          начало. <br /> <br /> Что получает клиент, заказывая у нас:
        </legend>
      </Container>

      <HowWeWork />

      <Container className={"mt-[50px]"}>
        <legend
          className={
            "text-black md:text-[44px] text-3xl font-bold md:leading-[50px] leading-tight text-center"
          }
        >
          В Ogilvy говорили: «Если это не продаёт — это не креатив». <br /> Мы
          говорим: если это не двигает индустрию — это не Monster Corp. <br />
          <br />
          Каждый кейс — уникален. Мы не обещаем чудо. Но мы создаём систему,
          которая приводит к росту.
        </legend>

        <div className={"w-full flex justify-center mt-[50px]"}>
          <a
            href={"#contactform"}
            className="w-[270px] h-[60px] p-2.5 bg-[#0071e3] rounded-[100px] inline-flex justify-center items-center gap-2.5"
          >
            <div className="text-center justify-start text-white text-base font-semibold font-['Nunito_Sans']">
              Оставить заявку
            </div>
          </a>
        </div>
      </Container>
    </div>
  );
};

interface WhatClientGetBlockProps {
  className?: string;
  title: string;
  subtitle: string | number;
  suffix?: string;
  prefix?: string;
}

export default WhatClientGet;

const WhatClientGetBlock: FC<WhatClientGetBlockProps> = (props) => {
  return (
    <div
      className={cn("xl:w-1/3 w-full p-12 overflow-hidden", props.className)}
    >
      <span className="w-full inline-block text-center justify-center beige-graident-text text-[28px] font-semibold font-['Nunito_Sans'] leading-[30.80px]">
        {/*Рост трафика на сайт: до:*/}
        {props.title}
      </span>
      <p
        className={
          "box-reflect w-full text-center mt-[60px] text-[#ddbc98] font-bold " +
          "text-[72px] xl:text-[126.45px]"
        }
      >
        <CountUp
          suffix={props.suffix}
          end={
            typeof props.subtitle === "number"
              ? props.subtitle
              : parseInt(props.subtitle)
          }
          prefix={props.prefix}
          scrollSpyOnce={true}
          enableScrollSpy={true}
        />
      </p>
    </div>
  );
};
