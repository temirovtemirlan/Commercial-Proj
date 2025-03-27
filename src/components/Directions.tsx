import { useMemo, type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import DirectionsItems from "components/DirectionsItems";
import { AnimatedComponent } from "common/ui/animatedComponent";
import SwiperNavigationBtn from "common/SwiperNavigationBtn";
import type { TTranslation } from "fusion/type";

const directionsData = (t: TTranslation) => [
  {
    title: "Monster Digital Marketing",
    titleGradient: "linear-gradient(240.91deg, #FEB800 10.36%, #FF8700 93.08%)",
    descOne: t("ourDirections.directionsData.one.descOne"),
    list: [
      t("ourDirections.directionsData.one.list.one"),
      t("ourDirections.directionsData.one.list.two"),
      t("ourDirections.directionsData.one.list.three"),
      t("ourDirections.directionsData.one.list.four"),
    ],
    descTwo: t("ourDirections.directionsData.one.descTwo"),
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/MONSTER_MARKETING_2/MONSTER_MARKETING_2/720p_mp4/stream.m3u8",
  },
  {
    title: "Monster Design & Branding",
    titleGradient: "blue-gradient-1lvl",
    descOne: t("ourDirections.directionsData.two.descOne"),
    list: [
      t("ourDirections.directionsData.two.list.one"),
      t("ourDirections.directionsData.two.list.two"),
      t("ourDirections.directionsData.two.list.three"),
      t("ourDirections.directionsData.two.list.four"),
    ],
    descTwo: t("ourDirections.directionsData.two.descTwo"),
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/MONSTER_BRANDING/MONSTER_BRANDING/720p_mp4/stream.m3u8",
  },
  {
    title: "Soul Media",
    titleGradient: "linear-gradient(248.03deg, #E19500 0.74%, #FFCF15 89.3%)",
    descOne: t("ourDirections.directionsData.three.descOne"),
    list: [
      t("ourDirections.directionsData.three.list.one"),
      t("ourDirections.directionsData.three.list.two"),
      t("ourDirections.directionsData.three.list.three"),
    ],
    descTwo: t("ourDirections.directionsData.three.descTwo"),
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/SOUL_MEDIA/SOUL_MEDIA/720p_mp4/stream.m3u8",
  },
  {
    title: "Monster CGI/VFX",
    titleGradient: "linear-gradient(240.51deg, #D36BF8 2.7%, #862DCD 97.64%)",
    upcText: t("ourDirections.directionsData.four.descTwo"),
    descOne: t("ourDirections.directionsData.four.upperText"),
    list: [
      t("ourDirections.directionsData.four.list.one"),
      t("ourDirections.directionsData.four.list.two"),
      t("ourDirections.directionsData.four.list.three"),
    ],
    descTwo: t("ourDirections.directionsData.four.descTwo"),
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/MONSTER_CG/MONSTER_CG/720p_mp4/stream.m3u8",
  },
  {
    title: "Monster AI Marketing",
    titleGradient: "linear-gradient(234.73deg, #2CFF50 25.35%, #009218 97.98%)",
    descOne: t("ourDirections.directionsData.five.descOne"),
    list: [
      t("ourDirections.directionsData.five.list.one"),
      t("ourDirections.directionsData.five.list.two"),
      t("ourDirections.directionsData.five.list.three"),
    ],
    descTwo: t("ourDirections.directionsData.five.descTwo"),
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/MONSTER_AI/MONSTER_AI/720p_mp4/stream.m3u8",
  },
  {
    title: "Monster DEVZ",
    titleGradient: "linear-gradient(241.54deg, #DF1733 -1.8%, #F5B715 102.39%)",
    descOne: t("ourDirections.directionsData.six.descOne"),
    list: [
      t("ourDirections.directionsData.six.list.one"),
      t("ourDirections.directionsData.six.list.two"),
      t("ourDirections.directionsData.six.list.three"),
    ],
    descTwo: t("ourDirections.directionsData.six.descTwo"),
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/MONSTER_DEVZ_2/MONSTER_DEVZ_2/720p_mp4/stream.m3u8",
  },
];

const Directions: FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const { t } = useTranslation();

  const directionsDataFunRet = useMemo(() => directionsData(t), [t]);

  return (
    <div className="Our-Directions" ref={ref}>
      <AnimatedComponent
        tag="legend"
        className="legend-3lvl text-white mb-10 md:mb-20 ml-5 lg:ml-[25%]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t("ourDirections.title")}
      </AnimatedComponent>

      <div className="w-full max-w-[3000px] mx-auto relative">
        <Swiper
          onSwiper={() => {}}
          className="px-5 relative"
          modules={[Navigation]}
          speed={500}
          spaceBetween={30} // Расстояние между слайдами
          centeredSlides
          breakpoints={{
            1081: { cssMode: true, slidesPerView: 1.5 },
            1080: { slidesPerView: 1 },
            1025: { slidesPerView: 2 },
            1: { slidesPerView: 1 },
          }}
          allowTouchMove={true}
          navigation={{
            nextEl: ".nextButton393919",
            prevEl: ".prevButton393218",
          }}
        >
          {directionsDataFunRet?.map((item, index) => (
            <SwiperSlide key={index}>
              <DirectionsItems item={item} />
            </SwiperSlide>
          ))}

          <SwiperNavigationBtn
            className="w-full max-w-[1080px] mx-auto flex gap-5 justify-end mt-5"
            nextClass="nextButton393919"
            prevClass="prevButton393218"
          />
        </Swiper>
      </div>
    </div>
  );
};

export default Directions;
