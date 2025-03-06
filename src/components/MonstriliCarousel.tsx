import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { cn } from "helpers/style.ts";

interface MonstriliCarouselProps {
  className?: string;
  coreClassName?: string;
  items: React.ReactNode[];

  nextEl: string;
  prevEl: string;
}

const MonstriliCarousel: React.FC<MonstriliCarouselProps> = ({
  items,
  className,
  coreClassName,
  nextEl,
  prevEl,
}) => {
  return (
    <div className={cn("", coreClassName)}>
      <Swiper
        className={cn("", className)}
        modules={[Pagination, Navigation]}
        speed={1500}
        spaceBetween={30} // Расстояние между слайдами
        slidesPerView={4} // Количество видимых слайдов за раз
        navigation={{
          nextEl: `.${nextEl}`, // ".cdf26213a150dc23a",
          prevEl: `.${prevEl}`, // ".d41d8cd98f00b2dee",
        }}
        breakpoints={{
          1700: {
            slidesPerView: 4,
          },
          1500: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>

      {/**/}

      <div className={"flex w-full justify-end"}>
        <div className={"gap-5 flex mt-[40px] *:cursor-pointer *:select-none"}>
          <div className={prevEl}>
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
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 11.3859L14 18.3859L20 25.3859"
                stroke="#535354"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {/*  */}

          <div className={nextEl}>
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
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonstriliCarousel;
