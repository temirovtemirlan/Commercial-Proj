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
      "O‘sishga olib boruvchi strategiyalar. Brendlar o‘sadi, agar marketing mijozlar hayotining bir qismiga aylansa. Biz shunchaki reklama emas, balki his-tuyg‘ular, sadoqat va ishonch uyg‘otadigan o‘zaro aloqalar yaratamiz.",
    list: [
      "Data-driven marketing",
      "Performance & SMM",
      "E-commerce & retail solutions",
      "Influence & viral campaigns",
    ],
    descTwo:
      "Biz reklama qilmaymiz. Biz brendlar ajralmas bo'lib qoladigan haqiqatni yaratamiz.",
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/MONSTER_MARKETING_2/MONSTER_MARKETING_2/720p_mp4/stream.m3u8",
  },
  {
    title: "Monster Design & Branding",
    titleGradient: "blue-gradient-1lvl",
    descOne:
      "Ma'noni anglatuvchi shakl. Vizual iste'mol dunyosi ajralib turadigan o'ziga xoslikni talab qiladi. Biz brendning tiliga aylanadigan va u uchun gapiradigan dizaynni yaratamiz, hatto so'zsiz ham.",
    list: [
      "Global tushunchalar",
      "Identifikatsiya, logotip, qadoqlash",
      "Grafik va raqamli dizayn",
      "Hashamatli va premium Brendlash",
    ],
    descTwo:
      "Sizning brendingiz ovozga ega bo'lsa, u raqobatdan ko'ra balandroq eshitiladi.",
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/MONSTER_BRANDING/MONSTER_BRANDING/720p_mp4/stream.m3u8",
  },
  {
    title: "Soul Media",
    titleGradient: "linear-gradient(248.03deg, #E19500 0.74%, #FFCF15 89.3%)",
    descOne:
      "Bugungi dunyoda kontent ishonch valyutasidir. Odamlar shunchaki sotib olishmaydi, ular brend tajribasini qayta boshdan kechirishadi. Biz odamlar qayta ko'rib chiqmoqchi bo'lgan vizual hikoyalarni yaratamiz.",
    list: [
      "Reklama, hujjatli hikoyalar, brend filmlari",
      "So'zsiz sotiladigan fotosurat tarkibi",
      "YouTube va keyingi avlod video marketingi",
    ],
    descTwo: "Faqat aytmaydigan, <br/> balki sizni his qiladigan tarkib.",
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/SOUL_MEDIA/SOUL_MEDIA/720p_mp4/stream.m3u8",
  },
  {
    title: "Monster CGI/VFX",
    titleGradient: "linear-gradient(240.51deg, #D36BF8 2.7%, #862DCD 97.64%)",
    upcText: "IMKONSIZ NARSALARGA KIRISH SAN'ATI",
    descOne:
      "Biz haqiqat chegaralarini oshirmoqdamiz. Ilgari cheklovlar bo'lgan joyda biz vizual olamlarni yaratmoqdamiz.",
    list: [
      "Kinematik VFX & CGI",
      "O'yinlar, filmlar, reklama uchun grafikalar",
      "Arxitektura va mahsulotlarning 3D vizualizatsiyasi",
    ],
    descTwo: "Texnologiya san'atga aylanganda, afsonalar yaratiladi.",
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/MONSTER_CG/MONSTER_CG/720p_mp4/stream.m3u8",
  },
  {
    title: "Monster AI Marketing",
    titleGradient: "linear-gradient(234.73deg, #2CFF50 25.35%, #009218 97.98%)",
    descOne: "KELAJAK ALLAQACHON KELDI",
    list: [
      "Mijozlarni o'zlarini tushunishdan ko'ra yaxshiroq tushunadigan sun'iy intellekt.",
      "Avtomatlashtirilgan marketing strategiyalari va Ai-auditoriya xatti-harakatlarini tahlil qilish.",
      "Ma'lumotlarga asoslangan reklama kampaniyalari, tendentsiyalarni prognozlash, tarkibni shaxsiylashtirish.",
    ],
    descTwo:
      "Marketingning kelajagi giper aniqlikdir. Biz sizning mijozlaringiz bilan ularning tilida gaplashishingizga yordam beramiz.",
    video:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/MONSTER_AI/MONSTER_AI/720p_mp4/stream.m3u8",
  },
  {
    title: "Monster DEVZ",
    titleGradient: "linear-gradient(241.54deg, #DF1733 -1.8%, #F5B715 102.39%)",
    descOne: "RAHBARLAR UCHUN IT ECHIMLARI",
    list: [
      "Prototipdan mukammal raqamli mahsulotgacha.",
      "Veb-saytlar, mobil ilovalar, CRM,AI tizimlarini ishlab chiqish.",
      "AI integratsiyasi, UX/UI dizayni, kengaytiriladigan it echimlari.",
    ],
    descTwo:
      "Texnologiya sizning muvaffaqiyatingiz uchun ishlashi kerak. <br/> Biz buni qanday qilishni bilamiz.",
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
        Yo‘nalishlarimiz
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
          // centeredSlides={true}
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
          {/* <div className="w-full max-w-[1080px] mx-auto flex gap-5 justify-end mt-5">
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
          </div> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Directions;
