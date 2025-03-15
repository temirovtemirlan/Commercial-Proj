import type { FC } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DirectionsItems from "components/DirectionsItems";
import "swiper/css";
import "swiper/css/navigation";
import { divideArray } from "helpers/array.ts";

const directionsData = [
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
    img: "",
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
    img: "",
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
    img: "",
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
    img: "",
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
    img: "",
  },
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
    img: "",
  },
];

const Directions: FC = () => {
  return (
    <div>
      <legend className="legend-3lvl text-white mb-10 md:mb-20 ml-5 lg:ml-[25%]">
        Наши направления
      </legend>

      <Swiper
        onSwiper={() => {}}
        className="px-5 w-full"
        modules={[Pagination, Navigation]}
        speed={500}
        // speed={1500}

        spaceBetween={30} // Расстояние между слайдами
        loop
        // cssMode
        breakpoints={{
          1700: {
            slidesPerView: 2,
            centeredSlides: true,
          },
          1500: {
            slidesPerView: 1.4,
            centeredSlides: true,
          },
          1200: {
            slidesPerView: 1.2,
            centeredSlides: true,
          },
          0: {
            slidesPerView: 1,
            centeredSlides: false,
          },
        }}
      >
        {directionsData?.map((item, index) => (
          <SwiperSlide key={index}>
            <DirectionsItems item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Directions;
