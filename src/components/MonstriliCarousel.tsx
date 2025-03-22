import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AnimatedComponent } from "common/ui/animatedComponent";
import SwiperNavigationBtn from "common/SwiperNavigationBtn";
import { cn } from "helpers/style.ts";
import { Swiper as SwiperType } from "swiper/types";

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
        <SwiperNavigationBtn
          className="flex gap-5 mt-[40px] *:select-none"
          nextClass={nextEl}
          prevClass={prevEl}
        />
      </div>
    </div>
  );
};

export default MonstriliCarousel;
