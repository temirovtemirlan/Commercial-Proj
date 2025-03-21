import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { cn } from "helpers/style.ts";
import { Swiper as SwiperType } from "swiper/types";
import { AnimatedComponent } from "common/ui/animatedComponent";

interface MonstriliCarouselProps {
  className?: string;
  coreClassName?: string;
  items: React.ReactNode[];
  slidesPerView?: number;

  nextEl: string;
  prevEl: string;

  inView?: boolean;
}

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const MonstriliCarousel: React.FC<MonstriliCarouselProps> = ({
  items,
  className,
  coreClassName,
  slidesPerView,
  nextEl,
  prevEl,
  inView,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className={cn("", coreClassName)}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className={cn("static z-0", className)}
        modules={[Pagination, Navigation]}
        speed={1500}
        cssMode={true}
        spaceBetween={30}
        slidesPerView={slidesPerView || 4}
        navigation={{
          nextEl: `.${nextEl}`,
          prevEl: `.${prevEl}`,
        }}
        breakpoints={{
          1700: { slidesPerView: slidesPerView === 3 ? 3 : 4 },
          1500: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {items?.map((item, index) => (
          <SwiperSlide key={index}>
            {inView === undefined || index >= 4 ? (
              // Если inView undefined или это элементы после первых 4 — показываем без анимации
              <div>{item}</div>
            ) : (
              <AnimatedComponent
                initial="hidden"
                animate={inView && index < 4 ? "visible" : "hidden"} // Анимация только для первых 4 элементов и если inView true
                variants={animationVariants}
                transition={{ duration: 0.5, delay: index * 0.2 }} // Задержка для анимации
              >
                {item}
              </AnimatedComponent>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/**/}

      <div className={"flex w-full justify-end"}>
        <div className={"gap-5 flex mt-[40px] *:cursor-pointer *:select-none"}>
          <button className={prevEl}>
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
          {/*  */}

          <button className={nextEl}>
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
    </div>
  );
};

export default MonstriliCarousel;
