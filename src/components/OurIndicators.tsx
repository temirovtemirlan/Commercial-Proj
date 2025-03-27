import { useMemo, useRef, useState, type FC } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useInView } from "react-intersection-observer";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import IndicatorsLoading from "common/IndicatorsLoading";
import LazyLoadLayout from "./LazyLoadLayout";
import Container from "./Container";
import { indicatorsAppsLogo, indicatorsLoading } from "data/index";
import { cn } from "helpers/style";
import type { directionType } from "fusion/type";

const OurIndicators: FC = () => {
  const [tappad, setTaped] = useState<directionType>("CG");
  const [showAll, setShowAll] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const indicatorsData = useMemo(() => {
    const filterRes = indicatorsLoading.filter((el) => el.filter === tappad);

    return showAll ? filterRes : filterRes?.slice(0, 4);
  }, [showAll, tappad]);

  const scrollToTarget = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleShowMore = () => {
    setShowAll((prev) => !prev);
    scrollToTarget();
  };

  return (
    <Container className="text-center w-full" ref={containerRef}>
      <legend className="custom-legend-2lvl mt-[100px]" ref={ref}>
        Біздің көрсеткіштер
      </legend>

      <Tabs className="Our-Indicators">
        <TabList className="inline-flex p-[5px] my-[20px] rounded-full bg-white">
          <Tab
            onClick={() => setTaped("CG")}
            className="tab__delivery_panels whitespace-nowrap px-6 py-2.5"
          >
            CG
          </Tab>
          <Tab
            onClick={() => setTaped("VFX")}
            className="tab__delivery_panels whitespace-nowrap px-6 py-2.5"
          >
            VFX
          </Tab>
        </TabList>

        <LazyLoadLayout>
          <div className="flex">
            <button className="prev-igdnucejewj190418">
              <svg
                width="34"
                className={"cursor-pointer"}
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.25 7.08398L12.75 17.0007L21.25 26.9173"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <Swiper
              className="Our-Indicators w-full xl:px-[50px] flex justify-center"
              modules={[Navigation]}
              speed={1500}
              cssMode={true}
              spaceBetween={30} // Расстояние между слайдами
              slidesPerView={10} // Количество видимых слайдов за раз
              navigation={{
                nextEl: ".next-fjfh39da9fjqa",
                prevEl: ".prev-igdnucejewj190418",
              }}
              breakpoints={{
                1700: { slidesPerView: 10 },
                1500: { slidesPerView: 8 },
                768: { slidesPerView: 7 },
                0: { slidesPerView: 5 },
              }}
            >
              {indicatorsAppsLogo?.map((app, index) => (
                <SwiperSlide
                  className="max-ss:min-w-[40px] max-ss:max-h-[40px]"
                  key={index}
                >
                  <img
                    className={cn(
                      app.className,
                      "max-ss:size-[40px] pointer-events-none",
                      {
                        "opacity-20": app.filter !== tappad,
                      }
                    )}
                    key={index}
                    src={`https://storage.googleapis.com/mkit_monster_bucket/LogoProgram${app.app}`}
                    alt={app.title}
                    loading="lazy"
                    onClick={() => setTaped(app.filter)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="next-fjfh39da9fjqa">
              <svg
                width="34"
                className={"cursor-pointer"}
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.75 7.08398L21.25 17.0007L12.75 26.9173"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </LazyLoadLayout>

        {["CG", "VFX"].map((item, tabIndex) => (
          <TabPanel
            className={`w-full xl:px-[100px] flex flex-col gap-10 ${item === tappad ? "mt-10" : "mt-0"}`}
            key={tabIndex}
          >
            {inView &&
              indicatorsData?.map((el, index) => (
                <IndicatorsLoading
                  key={index}
                  title={el.title}
                  percent={el.end}
                  gradientClassName={el.gradientClass}
                  inView={inView}
                />
              ))}
          </TabPanel>
        ))}
      </Tabs>

      <button
        className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white mt-10"
        onClick={handleShowMore}
      >
        <svg
          className={`transition-all ${showAll ? "scale-y-[-1]" : "scale-y-100"}`}
          width="23"
          height="11"
          viewBox="0 0 23 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.418 1.25L11.5012 9.75L1.58465 1.25"
            stroke="#161617"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </Container>
  );
};

export default OurIndicators;
