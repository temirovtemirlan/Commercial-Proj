import { type FC } from "react";
import DirectionsItems from "components/DirectionsItems.tsx";
import { cn } from "helpers/style.ts";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface DirectionsProps {
  className?: string;
}

const Directions: FC<DirectionsProps> = ({ className }) => {
  return (
    <Swiper
      onSwiper={() => {}}
      className={cn("w-full", className)}
      modules={[Pagination, Navigation]}
      speed={1500}
      cssMode={true}
      spaceBetween={30} // Расстояние между слайдами
      slidesPerView={4} // Количество видимых слайдов за раз
      // navigation={
      // {
      // nextEl: "",
      // prevEl: "",
      // }
      breakpoints={{
        1700: {
          // slidesPerView: slidesPerView === 3 ? 3 : 4,
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
      {/*{items?.map((item, index) => (*/}
      {/*  <SwiperSlide key={index}>*/}
      {/*    <div>{item}</div>*/}
      {/*  </SwiperSlide>*/}
      {/*))}*/}
      <SwiperSlide
        style={{
          width: "100%",
        }}
        className={"w-full"}
      >
        <DirectionsItems />
      </SwiperSlide>{" "}
      <SwiperSlide style={{ width: "100%" }} className={"w-full"}>
        <DirectionsItems />
      </SwiperSlide>
    </Swiper>
  );
};

export default Directions;
