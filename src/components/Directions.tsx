import { FC } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DirectionsItems from "components/DirectionsItems";
import "swiper/css";
import "swiper/css/navigation";
// import { divideArray } from "helpers/array.ts";

const directionsData = [
  {
    title: "Monster Digital Marketing",
    titleGradient: "linear-gradient(240.91deg, #FEB800 10.36%, #FF8700 93.08%)",
    descOne:
      "Стратегии, которые приводят к росту. Бренды растут, когда маркетинг становится частью жизни клиентов. Мы создаем не просто рекламу, а моменты взаимодействия, которые вызывают эмоции, привязанность и доверие.",
    list: [
      "Data-driven маркетинг",
      "Performance & SMM",
      "E-commerce & retail solutions",
      "Influence & viral campaigns",
    ],
    descTwo:
      "Мы не делаем рекламу. Мы создаем реальность, в которой бренды становятся незаменимыми.",
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/DIRECTION/MONSTER_MARKETING_2.mp4",
  },
  {
    title: "Monster Design & Branding",
    titleGradient: "blue-gradient-1lvl",
    descOne:
      "Форма, которая передает смысл. Мир визуального потребления требует айдентики, которая выделяется. Мы создаем дизайн, который становится языком бренда и говорит за него, даже без слов.",
    list: [
      "Глобальные концепции",
      "Айдентика, логотип, упаковка",
      "Графический и digital-дизайн",
      "Luxury & premium брендинг",
    ],
    descTwo: "Когда ваш бренд имеет голос, он звучит громче конкурентов.",
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/DIRECTION/MONSTER_BRANDING.mp4",
  },
  {
    title: "Soul Media",
    titleGradient: "linear-gradient(248.03deg, #E19500 0.74%, #FFCF15 89.3%)",
    descOne:
      "В современном мире контент — это валюта доверия. Люди не просто покупают, они переживают опыт бренда. Мы создаем визуальные истории, которые хочется пересматривать.",
    list: [
      "Рекламные ролики, документальные истории, бренд-фильмы",
      "Фотоконтент, который продаёт без слов",
      "YouTube и видеомаркетинг нового поколения",
    ],
    descTwo:
      "Контент, который не просто рассказывает, а заставляет чувствовать.",
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/DIRECTION/SOUL_MEDIA.mp4",
  },
  {
    title: "Monster CGI/VFX",
    titleGradient: "linear-gradient(240.51deg, #D36BF8 2.7%, #862DCD 97.64%)",
    upcText: "ИСКУССТВО ДОСТУПА К НЕВОЗМОЖНОМУ",
    descOne:
      "Мы раздвигаем границы реальности. Там, где раньше были ограничения, мы создаем визуальные вселенные.",
    list: [
      "Кинематографический VFX & CGI",
      "Графика для игр, фильмов, рекламы",
      "3D-визуализация архитектуры и продуктов",
    ],
    descTwo: "Когда технология становится искусством, создаются легенды.",
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/DIRECTION/MONSTER_CG.mp4",
  },
  {
    title: "Monster AI Marketing",
    titleGradient: "linear-gradient(234.73deg, #2CFF50 25.35%, #009218 97.98%)",
    descOne: "БУДУЩЕЕ УЖЕ НАСТУПИЛО",
    list: [
      "Искусственный интеллект, который понимает клиентов лучше, чем они сами.",
      "Автоматизированные маркетинговые стратегии и AI-анализ поведения аудитории.",
      "Data-driven рекламные кампании, прогнозирование трендов, персонализация контента.",
    ],
    descTwo:
      "Будущее маркетинга — это гиперточность. Мы помогаем вам говорить с клиентами на их языке.",
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/DIRECTION/MONSTER_AI.mp4",
  },
  {
    title: "Monster DEVZ",
    titleGradient: "linear-gradient(241.54deg, #DF1733 -1.8%, #F5B715 102.39%)",
    descOne: "IT-РЕШЕНИЯ ДЛЯ ЛИДЕРОВ",
    list: [
      "От прототипа до идеального цифрового продукта.",
      "Разработка сайтов, мобильных приложений, CRM, ERP, AI-систем.",
      "Интеграция AI, UX/UI-дизайн, масштабируемые IT-решения.",
    ],
    descTwo:
      "Технологии должны работать на ваш успех. Мы знаем, как это сделать.",
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/DIRECTION/MONSTER_DEVZ_2.mp4",
  },
];

const Directions: FC = () => {
  return (
    <div className={"Our-Directions"}>
      <legend className="legend-3lvl text-white mb-10 md:mb-20 ml-5 lg:ml-[25%]">
        Наши направления
      </legend>

      <div className="w-full max-w-[3000px] mx-auto relative">
        {" "}
        {/* Container with max-width */}
        <Swiper
          onSwiper={() => {}}
          className="px-5 relative"
          modules={[Pagination, Navigation]}
          speed={500}
          spaceBetween={30} // Расстояние между слайдами
          // slidesPerView={1}
          centeredSlides
          breakpoints={{
            1081: { cssMode: true, slidesPerView: 1.5 },
            1080: { slidesPerView: 1 },
            1025: { slidesPerView: 2 },
            1: { slidesPerView: 1 },
          }}
          allowTouchMove={true}
          // centeredSlides={true}
          navigation={{
            nextEl: ".prevButton393218",
            prevEl: ".nextButton393919",
          }}
        >
          {directionsData?.map((item, index) => (
            <SwiperSlide key={index}>
              <DirectionsItems item={item} />
            </SwiperSlide>
          ))}

          <div
            className={
              "w-full max-w-[1080px] mx-auto flex gap-5 justify-end mt-5"
              // "w-full h-full pointer-events-none max-w-[1240px] flex justify-between gap-5 mt-[40px] *:cursor-pointer *:select-none mx-auto absolute top-0 z-50 left-1/2 transform -translate-x-1/2"
            }
          >
            <button className={"nextButton393919"}>
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

            <button className={"prevButton393218"}>
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
        </Swiper>
      </div>
    </div>
  );
};

export default Directions;
