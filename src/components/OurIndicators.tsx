import { useState, type FC } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useInView } from "react-intersection-observer";
import Container from "./Container";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import IndicatorsLoading from "common/IndicatorsLoading";
import LazyLoadLayout from "./LazyLoadLayout";
import type { directionType } from "fusion/type";
import { indicatorsAppsLogo, indicatorsLoading } from "data/index";
import { cn } from "helpers/style";

const OurIndicators: FC = () => {
  const [tappad, setTaped] = useState<directionType>("CG");

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <Container className="text-center w-full">
      <legend className="custom-legend-2lvl mt-[100px]" ref={ref}>
        Наши показатели
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
          <div className={"flex"}>
            <button className={"prev-igdnucejewj190418"}>
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
                <SwiperSlide key={index}>
                  <img
                    className={cn(app.className, "pointer-events-none", {
                      "opacity-20": app.filter !== tappad,
                    })}
                    key={index}
                    src={`https://storage.googleapis.com/mkit_monster_bucket/LogoProgram${app.app}`}
                    alt={app.title}
                    loading="lazy"
                    onClick={() => setTaped(app.filter)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <button className={"next-fjfh39da9fjqa"}>
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

        {[1, 2].map((_, index) => (
          <TabPanel
            className="w-full xl:px-[100px] mt-10 flex flex-col gap-10"
            key={index}
          >
            {indicatorsLoading?.map((el, index) =>
              el.filter === tappad ? (
                <IndicatorsLoading
                  key={index}
                  title={el.title}
                  percent={el.end}
                  gradientClassName={el.gradientClass}
                  inView={inView}
                />
              ) : null
            )}
          </TabPanel>
        ))}
      </Tabs>
    </Container>
  );
};

export default OurIndicators;
