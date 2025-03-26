import { useEffect, useRef, useState, type FC } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useMediaQuery } from "usehooks-ts";
import { CustomScroll } from "react-custom-scroll";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";

import { TariffEnd } from "./TariffBlock";
import Container from "./Container";
import { AnimatedComponent } from "common/ui/animatedComponent";
import SwiperNavigationBtn from "common/SwiperNavigationBtn";
import { tariffData } from "data/index";
import { cn } from "helpers/style";

const anVariantsOpacity = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const navBtn = { p: "prev-tariff_panel", n: "next-tariff_panel" };

// prettier-ignore
const swiperProps = {
  loop: true,
  speed: 500,
  breakpoints: { 1080: { slidesPerView: 3, slidesPerGroup: 3 }, 768: { slidesPerView: 2, slidesPerGroup: 2 }, 0: { slidesPerView: 1, slidesPerGroup: 1 }},
  navigation: { prevEl: `.${navBtn.p}`, nextEl: `.${navBtn.n}` },
  modules: [Navigation],
};

const Tariff: FC = () => {
  const swiperRef = useRef<SwiperType>();
  const swiperHeadRef = useRef<SwiperType>();
  const [realIndex, setRealIndex] = useState(0);
  const [swiperIndex, seSwiperIndex] = useState(0);
  const is1080 = useMediaQuery("(min-width: 1080px)");
  const is768 = useMediaQuery("(min-width: 768px)");

  const slidesPerGroup = is1080 ? 3 : is768 ? 2 : 1;

  const [animRef, animInView] = useInView({
    initialInView: true,
    threshold: 0.8,
    triggerOnce: true,
  });

  const tabPanelRef = useRef<HTMLLegendElement | null>(null);

  const uniqueCategories = Array.from(
    new Set(tariffData.map((item) => item.tabCategory))
  );

  const tabSwiperHandler = (index: number) => {
    const targetIndex = index * slidesPerGroup; // Вычисляем индекс начала группы

    if (is1080 == false && is768) {
      if (targetIndex === 4) {
        swiperRef.current?.slideToLoop(6);
        swiperHeadRef.current?.slideToLoop(6);
      } else if (targetIndex === 2) {
        swiperRef.current?.slideToLoop(targetIndex);
        swiperHeadRef.current?.slideToLoop(targetIndex);
      } else {
        swiperRef.current?.slideToLoop(targetIndex);
        swiperHeadRef.current?.slideToLoop(targetIndex);
      }
    } else if (!is1080 && !is768) {
      if (targetIndex === 1) {
        swiperRef.current?.slideToLoop(3);
        swiperHeadRef.current?.slideToLoop(3);
      } else if (targetIndex === 2) {
        swiperRef.current?.slideToLoop(6);
        swiperHeadRef.current?.slideToLoop(6);
      } else {
        swiperRef.current?.slideToLoop(targetIndex);
        swiperHeadRef.current?.slideToLoop(targetIndex);
      }
    } else {
      swiperRef.current?.slideToLoop(targetIndex);
      swiperHeadRef.current?.slideToLoop(targetIndex);
    }
  };

  const [openAccordionKeys, setOpenAccordionKeys] = useState<string[]>([]);
  const [headViewIsAccordionOpen, setHeadViewIsAccordionOpen] = useState(false);
  const descRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (swiperHeadRef.current && swiperRef.current) {
      swiperHeadRef.current.slideToLoop(realIndex, 0);
    }
  }, [realIndex]);

  const handleAccordionStateChange = (itemKey: string, isExpanded: boolean) =>
    setOpenAccordionKeys((prev) =>
      isExpanded ? [...prev, itemKey] : prev.filter((key) => key !== itemKey)
    );

  useEffect(() => {
    const handleScroll = () => {
      if (openAccordionKeys.length === 0) {
        setHeadViewIsAccordionOpen(false);
        return;
      }

      if (descRef.current) {
        const descRect = descRef.current.getBoundingClientRect();
        if (descRect.top < 0) {
          setHeadViewIsAccordionOpen(true);

          if (swiperHeadRef.current) {
            if (swiperIndex === realIndex) {
              swiperHeadRef.current.slideToLoop(swiperIndex, 0);
            } else {
              swiperHeadRef.current.slideToLoop(realIndex, 0);
            }
          }
        } else {
          setHeadViewIsAccordionOpen(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Вызываем handleScroll при монтировании, чтобы установить начальное состояние

    return () => {
      window.removeEventListener("scroll", handleScroll); // Очистка при unmount
    };
  }, [openAccordionKeys, swiperIndex]);

  return (
    <section className="relative xl:pt-[100px] pt-[50px] bg-[#f5f5f7]">
      <>
        <Container>
          <AnimatedComponent
            tag="legend"
            initial={{ opacity: 0, y: 20 }}
            animate={animInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="legend-3lvl"
            ref={tabPanelRef}
          >
            Изучите тарифы.
          </AnimatedComponent>
        </Container>

        <div ref={animRef} />

        <Container>
          <div className="sticky top-[16rem] mt-28 z-10 h-0">
            <SwiperNavigationBtn
              className="flex justify-between w-full md:hidden"
              prevClass={`-translate-x-2 ${navBtn.p}`}
              nextClass={`translate-x-2 ${navBtn.n}`}
            />
          </div>
        </Container>
      </>

      {/* Head Swiper */}
      {headViewIsAccordionOpen ? (
        <div className="sticky top-0 w-full z-60 h-0">
          <Container
            className="bg-[#f5f5f7]"
            style={{ borderBottom: "1px solid #d2d2d7" }}
          >
            <Swiper
              className="w-full max-w-[1062px]"
              onSwiper={(swiper) => (swiperHeadRef.current = swiper)}
              onSlideChange={(swiper) => setRealIndex(swiper.realIndex)}
              autoHeight
              allowTouchMove={false}
              {...swiperProps}
            >
              {tariffData.map((item, index) => (
                <SwiperSlide className="text-center w-[354px]" key={index}>
                  <div className="w-full max-w-[354px] mx-auto px-2.5">
                    <p className="text-xl xl:text-[24px] font-bold mt-4">
                      {item.head.title}
                    </p>
                    <div className="text-lg md:text-base mt-2 md:mt-[16px] w-4/5 mx-auto h-auto md:h-[100px] overflow-y-auto tariff-custom_scroll_description">
                      <CustomScroll heightRelativeToParent="100%">
                        {item.head.description}
                      </CustomScroll>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </div>
      ) : null}

      <Container>
        <div className="Our-Indicators !-mt-20">
          <AnimatedComponent
            initial={{ opacity: 0, y: 20 }}
            animate={animInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid md:grid-cols-[441px,1fr] items-center"
          >
            <div className="flex p-1.5 w-full max-w-fit rounded-full bg-white overflow-x-auto">
              {uniqueCategories.map((item, index) =>
                // prettier-ignore
                <button
                  key={item}
                  className={cn("whitespace-nowrap px-6 py-2.5", (tariffData[realIndex]?.tabCategory || "Base") === item && "bg-[#0171e3] text-white rounded-full")}
                  onClick={() => tabSwiperHandler(index)}
                >
                  {item}
                </button>
              )}
            </div>

            <SwiperNavigationBtn
              className="hidden md:flex justify-end gap-5 w-full"
              prevClass={navBtn.p}
              nextClass={navBtn.n}
            />
          </AnimatedComponent>

          {/* Main Swiper */}
          <AnimatedComponent
            initial={{ opacity: 0, y: 40 }}
            animate={animInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="relative flex justify-center w-full"
          >
            <Swiper
              className="relative max-w-[1062px] overflow-hidden pt-8"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => {
                setRealIndex(swiper.realIndex);
                seSwiperIndex(swiper.realIndex);
              }}
              {...swiperProps}
            >
              {tariffData?.map((item, index) =>
                // prettier-ignore
                <SwiperSlide key={index} className="w-[354px] !items-start">
                  <AnimatedComponent
                    initial="hidden"
                    animate={animInView ? "visible" : "hidden"}
                    variants={anVariantsOpacity}
                    transition={{ duration: 0.5, delay: index * 0.4 }}
                    className={cn("relative w-full max-w-[354px]", { "md:col-span-2 lg:col-span-1 md:mx-auto lg:mx-0" : index === 2 })}
                    key={index}
                  >
                    <div className="text-center w-full box-border px-2.5 text-black">
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
                      <p className="text-xl xl:text-[24px] font-bold mt-4 md:mt-[40px] w-full">{item.head.title}</p>

                    {/* Description */}
                      <div className="text-lg md:text-base my-2 md:my-[16px] w-4/5 mx-auto h-auto md:h-[100px] overflow-y-auto tariff-custom_scroll_description" ref={index === realIndex ? descRef : undefined}>
                        <CustomScroll heightRelativeToParent="100%">{item.head.description}</CustomScroll>
                      </div>

                      <p className="text-lg md:text-base font-semibold" dangerouslySetInnerHTML={{ __html: item.head.price }} />

                      {item.head.content ? <p className="mt-1 w-full h-full font-semibold text-center">{item.head.content}</p> : null}

                      <AnimatedComponent tag="button" whileHover={{ scale: 1.04 }} className="w-[192px] h-11 p-2 md:p-2.5 bg-[#0071e3] rounded-full text-base justify-center items-center gap-2.5 inline-flex mt-[40px] text-white">
                        Оставить заявку
                      </AnimatedComponent>
                    </div>

                    <hr className="border-[#d2d2d7] w-full max-md:hidden my-10" />

                    <Accordion className="w-full mt-10 md:mt-0 text-center px-2.5" transition transitionTimeout={300}>
                      <AccordionItem
                        header={({ state }) => (
                          <div className="relative flex flex-col items-center w-full" onClick={() => handleAccordionStateChange(`${index}-${item.tabCategory}`, !state.isEnter)}>
                            <Arrow isEnter={state.isEnter} />

                            <div className="pt-6">
                              <TariffEnd head={item.footer[0].title} descriptions={item.footer[0].descriptions} before={item.footer[0].before} />
                            </div>
                          </div>
                        )}
                        itemKey={`${index}-${item.tabCategory}`}
                      >
                        <div className="flex flex-col justify-evenly gap-10 pt-10">
                          {item.footer.slice(1)?.map((footer) => <TariffEnd key={footer.descriptions[0]} head={footer.title} className="w-full text-center" descriptions={footer.descriptions} before={footer.before} />)}
                        </div>
                      </AccordionItem>
                    </Accordion>
                  </AnimatedComponent>
                </SwiperSlide>
              )}
            </Swiper>
          </AnimatedComponent>
        </div>
      </Container>
    </section>
  );
};

export default Tariff;

const Arrow = ({ isEnter }: { isEnter: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-transform duration-300 ${
      isEnter ? "scale-y-[1]" : "-scale-y-[1]"
    }`}
  >
    <path
      d="M9.54742 6.72513L2.90992 13.6914C2.79912 13.8076 2.7373 13.962 2.7373 14.1226C2.7373 14.2832 2.79912 14.4376 2.90992 14.5539L2.91742 14.5614C2.97114 14.6179 3.0358 14.6629 3.10746 14.6937C3.17913 14.7245 3.25631 14.7403 3.3343 14.7403C3.41229 14.7403 3.48947 14.7245 3.56113 14.6937C3.6328 14.6629 3.69746 14.6179 3.75117 14.5614L10.0012 8.00138L16.2487 14.5614C16.3024 14.6179 16.367 14.6629 16.4387 14.6937C16.5104 14.7245 16.5876 14.7403 16.6655 14.7403C16.7435 14.7403 16.8207 14.7245 16.8924 14.6937C16.964 14.6629 17.0287 14.6179 17.0824 14.5614L17.0899 14.5539C17.2007 14.4376 17.2625 14.2832 17.2625 14.1226C17.2625 13.962 17.2007 13.8076 17.0899 13.6914L10.4524 6.72513C10.3941 6.66386 10.3238 6.61509 10.2461 6.58176C10.1683 6.54843 10.0845 6.53125 9.99992 6.53125C9.9153 6.53125 9.83156 6.54843 9.75378 6.58176C9.676 6.61509 9.6058 6.66386 9.54742 6.72513Z"
      fill="black"
    />
  </svg>
);
