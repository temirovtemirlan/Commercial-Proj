import { type FC } from "react";
import { cn } from "helpers/style.ts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

interface OurWorksProps {
  className?: string;
}

const OurWorks: FC<OurWorksProps> = ({ className }) => {
  return (
    <Swiper
      className={cn("static z-0", className)}
      modules={[Pagination, Navigation]}
      speed={1500}
      cssMode={true}
      scrollbar={true}
      spaceBetween={30} // Расстояние между слайдами
      slidesPerView={1} // Количество видимых слайдов за раз
      navigation={
        {
          // nextEl: `.${""}`,
          // prevEl: `.${""}`,
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
    >
      <SwiperSlide className={"w-full h-[620px] bg-[#F2F2F2]"}>1</SwiperSlide>
      <SwiperSlide className={"w-full h-[620px] bg-[#F2F2F2]"}>2</SwiperSlide>
      <SwiperSlide className={"w-full h-[620px] bg-[#F2F2F2]"}>3</SwiperSlide>
    </Swiper>
  );
};

export default OurWorks;
