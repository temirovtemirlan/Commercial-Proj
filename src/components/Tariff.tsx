import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FC,
} from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { useInView } from "react-intersection-observer";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";

import { TariffEnd, TariffStart } from "./TariffBlock";
import Container from "./Container";
import { AnimatedComponent } from "common/ui/animatedComponent";
// import SwiperNavigationBtn from "common/SwiperNavigationBtn";
import { tariffData } from "data/index";
import { cn } from "helpers/style";
import type { ITariffFooter, ITariffHead } from "fusion/type";

// const anVariantsOpacity = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

const Tariff: FC = () => {
  const swiperRef = useRef<SwiperType>();
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [selectedTab, setSelectedTab] = useState(0);
  const [muchClicked, setMuchClicked] = useState(0);
  const [directionSwiper, setDirectionSwiper] = useState<
    "prev" | "next" | null
  >(null);

  const isSwipeRef = useRef(false);

  // #region
  const [animRef, animInView] = useInView({
    initialInView: true,
    threshold: 0.8,
    triggerOnce: true,
  });

  const tabPanelRef = useRef<HTMLLegendElement | null>(null);

  const uniqueCategories = Array.from(
    new Set(tariffData.map((item) => item.tabCategory))
  );

  // prettier-ignore
  const tariffFilter = useMemo(() => { return tariffData.filter((item) => item.tabCategory === uniqueCategories[selectedTab])}, [selectedTab]);
  // #endregion

  useEffect(() => {
    const interval = setInterval(() => {
      prevRef.current?.classList.remove("swiper-button-disabled");
      nextRef.current?.classList.remove("swiper-button-disabled");

      prevRef.current?.removeAttribute("disabled");
      nextRef.current?.removeAttribute("disabled");
    }, 100); // проверяем и снимаем disabled каждые 100мс

    return () => clearInterval(interval);
  }, []);

  const time = () => {
    setTimeout(() => {
      swiperRef.current?.slideTo(2);
    }, 100);
  };

  const onPrevHandler = () => {
    isSwipeRef.current = false;
    const swiperInstance = swiperRef.current;

    if (!swiperInstance) return;
    if (muchClicked === 0) {
      if (selectedTab === 0) {
        setSelectedTab(2);
        setMuchClicked(2); // или установите количество слайдов в последней вкладке минус 1, если нужно более динамично
        time();
      } else {
        setSelectedTab((prev) => prev - 1);
        setMuchClicked(2); // или установите количество слайдов в предыдущей вкладке минус 1
        time();
      }
    } else {
      setMuchClicked((prev) => prev - 1);
    }
  };

  const onNextHandler = () => {
    isSwipeRef.current = false;
    const swiperInstance = swiperRef.current;

    if (!swiperInstance) return;
    const { activeIndex } = swiperInstance;

    if (muchClicked === activeIndex) {
      if (selectedTab === 2) {
        setSelectedTab(0);
      } else {
        setSelectedTab((prev) => prev + 1);
      }
      setMuchClicked(0);
    } else {
      setMuchClicked((prev) => prev + 1);
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    if (!isSwipeRef.current) return; // обработка только при свайпе

    // 👉 NEXT свайп
    if (swiper.progressLoop === 0 && swiper.activeIndex === 2) {
      if (selectedTab === 2) {
        setSelectedTab(0);
      } else {
        setSelectedTab((prev) => prev + 1);
      }
      setMuchClicked(0);
    }

    // 👉 PREV свайп
    if (swiper.progressLoop === 1 && swiper.activeIndex === 0) {
      if (selectedTab === 0) {
        setSelectedTab(2);
        time();
      } else {
        setSelectedTab((prev) => prev - 1);
      }
      setMuchClicked(2);
      time();
    } else {
      setMuchClicked(swiper.realIndex);
    }

    isSwipeRef.current = false; // сбрасываем после обработки

    // // NEXT
    // if (swiper.progressLoop === 0 && swiper.activeIndex === 2) {
    //   if (selectedTab === 2) {
    //     setSelectedTab(0);
    //   } else {
    //     setSelectedTab((prev) => prev + 1);
    //   }
    //   setMuchClicked(0);
    // } else {
    //   setMuchClicked(swiper.realIndex);
    // }

    // // PREV
    // if (swiper.progressLoop === 1 && swiper.activeIndex === 0) {
    //   if (selectedTab === 0) {
    //     setSelectedTab(2);
    //     time();
    //   } else {
    //     setSelectedTab((prev) => prev - 1);
    //   }
    //   setMuchClicked(2);
    //   time();
    // } else {
    //   setMuchClicked(swiper.realIndex);
    // }
  };

  return (
    <Container className="relative overflow-hidden xl:pt-[100px] pt-[50px] bg-[#f5f5f7] pb-[100px]">
      <AnimatedComponent
        tag="legend"
        // initial={{ opacity: 0, y: 20 }}
        // animate={animInView ? { opacity: 1, y: 0 } : {}}
        // transition={{ duration: 0.5, delay: 0.4 }}
        className="legend-3lvl"
        ref={tabPanelRef}
      >
        Изучите тарифы.
      </AnimatedComponent>
      <div ref={animRef} />

      <Tabs
        className="Our-Indicators"
        selectedIndex={selectedTab}
        onSelect={(e) => setSelectedTab(e)}
      >
        <div className="flex justify-between items-center">
          <TabList className="inline-flex p-1.5 rounded-full bg-white">
            {uniqueCategories.map((item) => (
              <Tab
                className="tab__delivery_panels whitespace-nowrap px-6 py-2.5"
                key={item}
                onClick={() => setMuchClicked(0)}
              >
                {item}
              </Tab>
            ))}
          </TabList>

          <div className={cn("flex justify-end gap-5 w-full")}>
            <button
              ref={prevRef}
              className="prev-tariff_panel"
              onClick={onPrevHandler}
            >
              <svg
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.385864"
                  width="36"
                  height="36"
                  rx="18"
                  fill="#ECECEE"
                />
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
            </button>

            <button
              ref={nextRef}
              className="next-tariff_panel"
              onClick={onNextHandler}
            >
              <svg
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.385864"
                  width="36"
                  height="36"
                  rx="18"
                  fill="#E6E6EA"
                />
                <path
                  d="M16 11.3859L22 18.3859L16 25.3859"
                  stroke="#535354"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div>
          {uniqueCategories.map((tab, tabIndex) => (
            <TabPanel
              className={`w-full overflow-hidden ${tabIndex === selectedTab ? "mt-[30px]" : "mt-0"}`}
              key={tab}
            >
              <Swiper
                key={tabIndex}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;

                  // Отслеживаем свайп
                  swiper.on("touchStart", () => {
                    isSwipeRef.current = true;
                  });

                  swiper.on("sliderMove", () => {
                    isSwipeRef.current = true;
                  });
                }}
                // onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
                loop={true}
                className="relative"
                modules={[Navigation]}
                speed={500}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
              >
                {tariffFilter?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <TariffPanel
                      item={item}
                      index={index}
                      animInView={animInView}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </Container>
  );
};

export default Tariff;

// const handleSlideChange = (swiper: SwiperType) => {
//   if (swiper.touchesDirection) {
//     if (swiper.touchesDirection === "next") {
//       if (directionSwiper === "next") {
//         if (swiper.progressLoop === 0 && swiper.activeIndex === 2) {
//           if (selectedTab === 2) {
//             setSelectedTab(0);
//           } else {
//             setSelectedTab((prev) => prev + 1);
//           }
//           setMuchClicked(0);
//         } else {
//           setMuchClicked(swiper.realIndex);
//         }
//       }
//       setDirectionSwiper("next");
//     } else {
//       if (swiper.progressLoop === 1 && swiper.activeIndex === 0) {
//         if (selectedTab === 0) {
//           setSelectedTab(2);
//           time();
//         } else {
//           setSelectedTab((prev) => prev - 1);
//         }
//         setMuchClicked(2);
//         time();
//       } else {
//         setMuchClicked(swiper.realIndex);
//       }
//       setDirectionSwiper("prev");
//     }
//   }
// };

/* <Tabs className="Our-Indicators" onSelect={(e) => setActiveTab(e)}>
  <AnimatedComponent
    initial={{ opacity: 0, y: 20 }}
    animate={animInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: 0.6 }}
    className="flex justify-between items-center"
  >
    <TabList className="inline-flex p-1.5 rounded-full bg-white">
      {uniqueCategories.map((item) => (
        <Tab
          className="tab__delivery_panels whitespace-nowrap px-6 py-2.5"
          key={item}
        >
          {item}
        </Tab>
      ))}
    </TabList>

    <div>
      <SwiperNavigationBtn
        prevClass="prev-tariff_panel"
        nextClass="next-tariff_panel"
      />
    </div>
  </AnimatedComponent>

  <AnimatedComponent
    initial={{ opacity: 0, y: 40 }}
    animate={animInView ? { opacity: 1, y: 0 } : undefined}
    transition={{ duration: 0.5, delay: 0.8 }}
  >
    {uniqueCategories.map((tab, tabIndex) => (
      <TabPanel
        className={`w-full overflow-hidden ${tabIndex === activeTab ? "mt-[30px]" : "mt-0"}`}
        key={tab}
      >
        {false && (
          <div className="relative hidden lg:grid grid-cols-[repeat(3,minmax(0,354px))] justify-center gap-y-14 mx-auto px-5 overflow-hidden overflow-x-auto">
            {tariffFilter?.map((item, index) => (
              <TariffPanel
                key={index}
                item={item}
                index={index}
                animInView={animInView}
              />
            ))}
          </div>
        )}

        <Swiper
          className="relative"
          modules={[Navigation]}
          speed={500}
          spaceBetween={30}
          slidesPerView={1}
          // breakpoints={{
          //   768: { slidesPerView: 2 },
          //   0: { slidesPerView: 1 },
          // }}
          navigation={{
            prevEl: ".prev-tariff_panel",
            nextEl: ".next-tariff_panel",
          }}
        >
          {tariffFilter?.map((item, index) => (
            <SwiperSlide key={index}>
              <TariffPanel item={item} index={index} animInView={animInView} />
            </SwiperSlide>
          ))}
        </Swiper>
      </TabPanel>
    ))}
  </AnimatedComponent>
</Tabs> */

interface ITariffPanel {
  animInView: boolean;
  index: number;
  item: { head: ITariffHead; footer: ITariffFooter[]; tabCategory: string };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TariffPanel: FC<ITariffPanel> = ({ animInView, index, item }) => {
  return (
    <AnimatedComponent
      // initial="hidden"
      // animate={animInView ? "visible" : "hidden"}
      // variants={anVariantsOpacity}
      // transition={{ duration: 0.5, delay: index * 0.4 }}
      className={cn("relative w-full max-w-[354px]", {
        "md:col-span-2 lg:col-span-1 md:mx-auto lg:mx-0": index === 2,
      })}
      key={index}
    >
      <TariffStart item={item} index={index} />

      <hr className="border-[#d2d2d7] w-full max-md:hidden my-10" />

      {item.head.content ? (
        <div className="w-full h-10 px-2.5 mb-5">
          <div className="pt-2 w-full h-full text-2xl text-center">
            {item.head.content}
          </div>
        </div>
      ) : null}

      <Accordion
        className="w-full mt-10 md:mt-0 text-center px-2.5"
        transition
        transitionTimeout={300}
      >
        <AccordionItem
          header={({ state }) => (
            <div className="relative flex flex-col items-center w-full">
              <Arrow isEnter={state.isEnter} />

              <div className="pt-6">
                <TariffEnd
                  head={item.footer[0].title}
                  descriptions={item.footer[0].descriptions}
                  before={item.footer[0].before}
                />
              </div>
            </div>
          )}
          itemKey={`${index}-${item.tabCategory}`}
        >
          <div className="flex flex-col justify-evenly gap-10 pt-10">
            {item.footer
              .slice(1)
              ?.map((footer) => (
                <TariffEnd
                  key={footer.descriptions[0]}
                  head={footer.title}
                  className={"w-full text-center"}
                  descriptions={footer.descriptions}
                  before={footer.before}
                />
              ))}
          </div>
        </AccordionItem>
      </Accordion>
    </AnimatedComponent>
  );
};

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
