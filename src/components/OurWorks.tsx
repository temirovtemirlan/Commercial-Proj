import { type FC, useRef, useEffect, useState } from "react"; // useEffect импортируем
import { cn } from "helpers/style.ts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface OurWorksProps {
  className?: string;
}

const OurWorks: FC<OurWorksProps> = ({ className }) => {
  const swiperRef = useRef<any>();
  const [activeIndex, setActiveIndex] = useState<number>(0); // Состояние для активного индекса

  const handlePaginationClick = (index: number) => {
    // Обработчик клика на пагинацию
    swiperRef.current?.slideTo(index); // Используем API Swiper для переключения слайда
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current;
    if (!swiperInstance) return;

    const updatePagination = () => {
      setActiveIndex(swiperInstance.activeIndex); // Обновляем activeIndex при смене слайда
    };

    swiperInstance.on("slideChange", updatePagination); // Слушаем событие slideChange

    return () => {
      swiperInstance.off("slideChange", updatePagination); // Отписываемся при unmount
    };
  }, []); // Зависимость только от swiperRef (инстанс Swiper)

  return (
    <div className={cn("our-works-container", className)}>
      <Swiper
        className={cn("static z-0 swiper-works", className)}
        modules={[Navigation]}
        speed={1500}
        cssMode={true}
        scrollbar={true}
        spaceBetween={30}
        slidesPerView={1}
        navigation={
          {
            // ... навигация остается
          }
        }
        breakpoints={{
          1700: {
            slidesPerView: 1,
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
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => {
          // Можно убрать, так как useEffect уже слушает slideChange
          // console.log('slide change');
        }}
      >
        <SwiperSlide
          className={"w-full h-[620px] bg-[#F2F2F2]"}
          data-slide-index="0"
        >
          1
        </SwiperSlide>
        <SwiperSlide
          className={"w-full h-[620px] bg-[#F2F2F2]"}
          data-slide-index="1"
        >
          2
        </SwiperSlide>
        <SwiperSlide
          className={"w-full h-[620px] bg-[#F2F2F2]"}
          data-slide-index="2"
        >
          3
        </SwiperSlide>
      </Swiper>

      <div className="custom-pagination">
        <div className={"custom-pagination__wrapper"}>
          {/* Используем map для рендеринга элементов пагинации */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={cn("pagination-item", {
                "swiper-pagination-bullet-active": activeIndex === index,
              })} // Добавляем класс для активного элемента
              data-slide-index={index}
              onClick={() => handlePaginationClick(index)} // Обработчик клика
            >
              fasd
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
