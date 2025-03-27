import type { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useInView } from "react-intersection-observer";

import "swiper/css";
import "swiper/css/navigation";
import DirectionsItems from "components/DirectionsItems";
import { AnimatedComponent } from "common/ui/animatedComponent";
import SwiperNavigationBtn from "common/SwiperNavigationBtn";

const directionsData = [
  {
    title: "Monster Digital Marketing",
    titleGradient: "linear-gradient(240.91deg, #FEB800 10.36%, #FF8700 93.08%)",
    descOne:
      "Өсуге әкелетін стратегиялар. Маркетинг клиенттердің өмірінің бір бөлігіне айналған кезде брендтер өседі. Біз тек жарнамаларды ғана емес, эмоцияны, сүйіспеншілікті және сенімді тудыратын өзара әрекеттесу сәттерін де жасаймыз.",
    list: [
      "Data-driven маркетинг",
      "Performance & SMM",
      "E-commerce & retail solutions",
      "Influence & viral campaigns",
    ],
    descTwo:
      "Біз жарнамамен айналыспаймыз. Біз брендтер таптырмас нәрсеге айналатын шындықты жасаймыз.",
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/MONSTER_MARKETING_2/MONSTER_MARKETING_2/720p_mp4/stream.m3u8",
  },
  {
    title: "Monster Design & Branding",
    titleGradient: "blue-gradient-1lvl",
    descOne:
      "Мағынаны білдіретін форма. Көрнекі тұтыну әлемі ерекшеленетін сәйкестікті талап етеді. Біз брендтің тіліне айналатын және ол үшін сөзсіз сөйлейтін дизайн жасаймыз.",
    list: [
      "Жаһандық тұжырымдамалар",
      "Сәйкестендіру, логотип, қаптама",
      "Графикалық және сандық дизайн",
      "Сәнді және премиум брендинг",
    ],
    descTwo:
      "Сіздің брендіңіздің дауысы болған кезде, ол бәсекелестікке қарағанда қаттырақ естіледі.",
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/MONSTER_BRANDING/MONSTER_BRANDING/720p_mp4/stream.m3u8",
  },
  {
    title: "Soul Media",
    titleGradient: "linear-gradient(248.03deg, #E19500 0.74%, #FFCF15 89.3%)",
    descOne:
      "Қазіргі әлемде мазмұн сенім валютасы болып табылады. Адамдар жай ғана сатып алып қана қоймайды, олар бренд тәжірибесін қайта бастан кешіреді. Біз адамдар қайта оралғысы келетін көрнекі әңгімелер жасаймыз.",
    list: [
      "Жарнамалық роликтер, деректі фильмдер, брендтік фильмдер",
      "Сөзсіз сатылатын фотосурет мазмұны",
      "YouTube және келесі ұрпақтың бейне маркетингі",
    ],
    descTwo: "Тек айтып қана қоймай, сезім тудыратын мазмұн.",
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/SOUL_MEDIA/SOUL_MEDIA/720p_mp4/stream.m3u8",
  },
  {
    title: "Monster CGI/VFX",
    titleGradient: "linear-gradient(240.51deg, #D36BF8 2.7%, #862DCD 97.64%)",
    upcText: "МҮМКІН ЕМЕС НӘРСЕГЕ ҚОЛ ЖЕТКІЗУ ӨНЕРІ",
    descOne:
      "Біз шындықтың шекарасын итермелеп жатырмыз. Бұрын шектеулер болған жерде біз визуалды ғаламдарды жасаймыз.",
    list: [
      "КИНЕМАТОГРАФИЯЛЫҚ VFX ЖӘНЕ CGI",
      "Ойындарға, фильмдерге, жарнамаға арналған графика",
      "Сәулет пен бұйымдардың 3D визуализациясы",
    ],
    descTwo: "Технология өнерге айналғанда аңыздар пайда болады.",
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/MONSTER_CG/MONSTER_CG/720p_mp4/stream.m3u8",
  },
  {
    title: "Monster AI Marketing",
    titleGradient: "linear-gradient(234.73deg, #2CFF50 25.35%, #009218 97.98%)",
    descOne: "БОЛАШАҚ ҚАЗІРДІҢ ӨЗІНДЕ КЕЛДІ",
    list: [
      "Клиенттерді өздері түсінгеннен гөрі жақсы түсінетін жасанды интеллект.",
      "Автоматтандырылған маркетингтік стратегиялар және аудиторияның мінез-құлқын AI-талдау.",
      "Деректерге негізделген жарнамалық науқандар, трендтерді болжау, мазмұнды жекелендіру.",
    ],
    descTwo:
      "Маркетингтің болашағы-гипер дәлдік. Біз сіздің клиенттеріңізбен олардың тілінде сөйлесуге көмектесеміз.",
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/MONSTER_AI/MONSTER_AI/720p_mp4/stream.m3u8",
  },
  {
    title: "Monster DEVZ",
    titleGradient: "linear-gradient(241.54deg, #DF1733 -1.8%, #F5B715 102.39%)",
    descOne: "КӨШБАСШЫЛАРҒА АРНАЛҒАН АТ ШЕШІМДЕРІ",
    list: [
      "Прототиптен мінсіз цифрлық өнімге дейін.",
      "Веб-сайттарды, мобильді қосымшаларды, CRM, ERP, AI-жүйелерді әзірлеу.",
      "AI интеграциясы, UX / UI дизайны, масштабталатын АТ шешімдері.",
    ],
    descTwo:
      "Технология сіздің жетістігіңіз үшін жұмыс істеуі керек. Біз оны қалай жұмыс істеуге болатынын білеміз.",
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/MONSTER_DEVZ_2/MONSTER_DEVZ_2/720p_mp4/stream.m3u8",
  },
];

const Directions: FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="Our-Directions" ref={ref}>
      <AnimatedComponent
        tag="legend"
        className="legend-3lvl text-white mb-10 md:mb-20 ml-5 lg:ml-[25%]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Біздің бағыттар
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
          {directionsData?.map((item, index) => (
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
