import { type FC } from "react";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import { domAnimation, LazyMotion } from "motion/react";

import Container from "components/Container.tsx";
import { cn } from "helpers/style.ts";
// import HowWeWork from "components/HowWeWork.tsx";
// import { TariffStart } from "components/TariffBlock.tsx";

import MonsReels from "components/MonsReels.tsx";
import Footer from "components/Footer";
// import VimeoEmbed from "components/VimeoEmbed";
import LazyVideoFrame from "components/LazyVideoFrame.tsx";
import { motion } from "framer-motion";
// import DirectionsItems from "components/DirectionsItems.tsx";
import Directions from "components/Directions.tsx";
import IndicatorsLoading from "common/IndicatorsLoading.tsx";
import Tariff from "components/Tariff.tsx";
import BenefitsItem from "common/BenefitsItem.tsx";
import { useInView } from "react-intersection-observer";
import LogoCubeAnimation from "common/LogoCubeAnimation";

// import FrameAnimationProps from "components/FrameAnimation.tsx";

interface HeaderProps {
  title: string;
  className?: string;
}
export const Header: FC<HeaderProps> = (props) => (
  <h1 className={cn("text-[80px] font-semibold", props.className)}>
    {props.title}
  </h1>
);

const App: FC = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <LazyMotion features={domAnimation}>
      <div>
        <>
          <Container className={"py-[70px]"}>
            <div className={"flex justify-between xl:flex-row flex-col"}>
              <Header title={"Monster"} />
              <p className={"text-black text-2xl grow-1 xl:max-w-[700px]"}>
                Мы – не просто digital-агентство. «Монстр» – это экосистема
                креативных и технологичных решений, созданная для того, чтобы
                выводить бренды на новый уровень. Мы – ваш сокрушительный
                аргумент в борьбе за лидерство.
              </p>
            </div>
          </Container>
          {/* Showreel */}
          <div className={"text-center"}>
            <Tabs className={cn("Monstr-Showreel")}>
              <TabPanel>
                <LazyVideoFrame
                  videoSrc={
                    "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/CG_REEL_HORIZONTAL_2.mp4"
                  }
                  posterSrc={""}
                />
              </TabPanel>
              <TabPanel>
                <LazyVideoFrame
                  videoSrc={
                    "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/AI_REEL_HORIZONTAL_NEW.mp4"
                  }
                  posterSrc={""}
                />
              </TabPanel>
              <motion.div
                className={"switcher sticky bottom-5 pt-5 inline-block"}
                initial={{ y: 100, scale: 0 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 0.9, ease: "backOut", delay: 0.2 }}
              >
                <TabList className="flex p-[5px] bg-white rounded-full">
                  <Tab className="tab__delivery_panels whitespace-nowrap px-6 py-2.5">
                    CG REEL
                  </Tab>
                  <Tab className="tab__delivery_panels whitespace-nowrap px-6 py-2.5">
                    AI REEL
                  </Tab>
                </TabList>
              </motion.div>
            </Tabs>
          </div>

          <Container
            className={"bg-[#f5f5f7] xl:pt-[100px] pt-[50px] text-center"}
          >
            <div className="w-full text-center">
              <legend className={"gradient-legend-1lvl"}>Monster Corp.</legend>
              <span className="legend-2lvl">Исскуство создавать будущее.</span>

              <p
                className={"text-1lvl"}
                // "w-full xl:text-2xl text-xl inline-block mt-[30px] text-balance"
              >
                Мы не просто создаем бренды, контент и технологии. <br /> Мы
                строим реальность, которой хочется быть частью. <br /> <br />В
                мире, где каждый борется за внимание, выигрывают те, кто умеет{" "}
                <br />
                захватывать воображение. Monster Corp. — это экосистема,
                <br /> где данные превращаются в стратегию, технологии — в
                эмоции,
                <br /> а идеи — в культуру.
              </p>
            </div>
          </Container>

          <div></div>
          <Container className="bg-[#f5f5f7] xl:pt-[150px] pt-[80px] pb-[100px] overflow-hidden">
            <legend className={"legend-3lvl"}>Monsreels</legend>
            <MonsReels />
          </Container>
          {/*  How we work */}
          {/*<HowWeWork />*/}
        </>
        <Container className={"text-center py-[100px]"}>
          <legend className={"gradient-legend-1lvl"}>
            Почему Monster Corp?
          </legend>
          <p className="legend-2lvl">
            Бренды, которые вдохновляют. Контент, который цепляет. Решения,
            которые работают.{" "}
          </p>

          <div className="text-1lvl">
            В основе каждого успешного бизнеса — история. <br /> Мы рассказываем
            её так, чтобы в неё верили. <br /> В мире хаоса и информационного
            шума мы создаём смысл.
            <br />
            <br />
            Monster Corp. — это не просто агентство. <br /> Это инновационный
            центр, где креатив
            <br />и технологии работают на бизнес.
          </div>

          <div className={"flex"}>
            <BenefitsItem />
          </div>

          {/*<div*/}
          {/*  className={*/}
          {/*    "w-full max-w-[1200px] mx-auto flex gap-x-[100px] justify-between text-left text-2xl font-semibold leading-tight mt-[70px] *:flex *:flex-col *:gap-5"*/}
          {/*  }*/}
          {/*>*/}
          {/*  <div className="">*/}
          {/*    <svg*/}
          {/*      width="31"*/}
          {/*      height="30"*/}
          {/*      viewBox="0 0 31 30"*/}
          {/*      fill="none"*/}
          {/*      xmlns="http://www.w3.org/2000/svg"*/}
          {/*    >*/}
          {/*      <path*/}
          {/*        d="M27.7988 11.8569C27.3841 11.3531 26.9933 10.8776 26.8062 10.4268C26.6051 9.9424 26.5415 9.30541 26.4692 8.63224C26.3545 7.51706 26.223 6.25013 25.3672 5.39698C24.5114 4.54383 23.2497 4.40972 22.1318 4.29415C21.4578 4.22445 20.8216 4.15828 20.3364 3.95801C19.8864 3.77097 19.41 3.37924 18.9062 2.96458C18.0239 2.23936 17.0269 1.41797 15.7626 1.41797C14.4983 1.41797 13.4995 2.23936 12.6181 2.96458C12.1143 3.37924 11.6387 3.77097 11.1879 3.95801C10.7035 4.15828 10.0665 4.22268 9.39331 4.29415C8.27809 4.40972 7.01112 4.5403 6.15794 5.3961C5.30477 6.25189 5.17066 7.51353 5.05508 8.63224C4.98538 9.30541 4.91921 9.9424 4.71893 10.4268C4.53188 10.8776 4.14014 11.3531 3.72546 11.8569C3.0011 12.7392 2.17969 13.7361 2.17969 15.0013C2.17969 16.2665 3.0011 17.2643 3.72546 18.1448C4.14014 18.6486 4.53188 19.125 4.71893 19.575C4.91921 20.0593 4.98361 20.6963 5.05508 21.3704C5.17066 22.4855 5.30124 23.7525 6.15794 24.6056C7.01465 25.4588 8.27545 25.592 9.39331 25.7076C10.0665 25.7773 10.7035 25.8434 11.1879 26.0446C11.6387 26.2308 12.1143 26.6225 12.6181 27.0371C13.5004 27.7624 14.4983 28.5838 15.7626 28.5838C17.0269 28.5838 18.0257 27.7624 18.9062 27.0371C19.41 26.6225 19.8864 26.2308 20.3364 26.0446C20.8216 25.8434 21.4578 25.7799 22.1318 25.7076C23.2471 25.5929 24.514 25.4614 25.3672 24.6056C26.2204 23.7498 26.3545 22.4882 26.4692 21.3704C26.5389 20.6963 26.6051 20.0602 26.8062 19.575C26.9933 19.125 27.3841 18.6486 27.7988 18.1448C28.5241 17.2625 29.3455 16.2656 29.3455 15.0013C29.3455 13.737 28.5241 12.7383 27.7988 11.8569ZM26.5724 17.1355C26.1022 17.7072 25.616 18.2983 25.3372 18.9671C25.0478 19.6658 24.9667 20.4493 24.8881 21.2063C24.7911 22.1415 24.7002 23.0246 24.2423 23.4825C23.7844 23.9404 22.9012 24.0313 21.966 24.1283C21.209 24.2068 20.4255 24.288 19.7267 24.5774C19.0579 24.8544 18.4668 25.3405 17.896 25.8126C17.1548 26.4222 16.4561 26.9974 15.7608 26.9974C15.0656 26.9974 14.3659 26.4222 13.6257 25.8126C13.0539 25.3423 12.4628 24.8562 11.7949 24.5774C11.0961 24.288 10.3127 24.2068 9.55477 24.1283C8.61954 24.0313 7.73636 23.9404 7.27846 23.4825C6.82055 23.0246 6.72967 22.1415 6.6335 21.2063C6.55498 20.4493 6.4738 19.6658 6.18353 18.9671C5.90649 18.2983 5.42035 17.7072 4.94832 17.1355C4.34307 16.3953 3.77134 15.6965 3.77134 15.0013C3.77134 14.3061 4.3466 13.6064 4.95538 12.8662C5.42564 12.2945 5.91178 11.7034 6.19059 11.0346C6.48086 10.3368 6.56203 9.55332 6.64056 8.79546C6.73673 7.86026 6.82849 6.97711 7.2864 6.51922C7.74431 6.06132 8.62395 5.97045 9.55653 5.86987C10.3144 5.79576 11.0944 5.71459 11.8002 5.42874C12.4681 5.15171 13.0592 4.66558 13.631 4.19357C14.3712 3.58481 15.0709 3.00869 15.7661 3.00869C16.4614 3.00869 17.1601 3.58481 17.9013 4.19357C18.4721 4.66382 19.0632 5.14994 19.732 5.42874C20.4308 5.719 21.2143 5.80017 21.9713 5.87781C22.9065 5.97486 23.7897 6.06662 24.2476 6.52363C24.7055 6.98064 24.7964 7.86467 24.8934 8.79987C24.9719 9.55773 25.0531 10.3412 25.3425 11.0391C25.6195 11.7078 26.1057 12.2989 26.5777 12.8706C27.1874 13.6109 27.7626 14.3105 27.7626 15.0057C27.7626 15.7009 27.1821 16.3953 26.5724 17.1355Z"*/}
          {/*        fill="#0171E3"*/}
          {/*      />*/}
          {/*      <path*/}
          {/*        d="M15.9438 7.70117C14.4624 7.701 13.0143 8.1401 11.7825 8.96296C10.5506 9.78581 9.59053 10.9555 9.02351 12.324C8.45649 13.6925 8.30804 15.1984 8.59693 16.6513C8.88583 18.1042 9.59909 19.4388 10.6465 20.4863C11.694 21.5338 13.0285 22.2472 14.4814 22.5363C15.9343 22.8253 17.4403 22.6771 18.8089 22.1102C20.1776 21.5434 21.3473 20.5834 22.1704 19.3518C22.9934 18.1201 23.4327 16.672 23.4327 15.1907C23.4327 13.2045 22.6437 11.2997 21.2393 9.89512C19.8349 8.49058 17.9301 7.70141 15.9438 7.70117ZM19.9838 13.6715C17.1402 15.1263 15.3156 18.1939 15.2971 18.2248C15.2246 18.3483 15.1245 18.4532 15.0047 18.5315C14.8848 18.6097 14.7484 18.659 14.6062 18.6757C14.5705 18.6799 14.5346 18.6819 14.4986 18.6818C14.3736 18.6818 14.2499 18.6565 14.135 18.6073C14.02 18.5582 13.9162 18.4863 13.8298 18.396L11.7626 16.2371C11.6785 16.149 11.6125 16.0453 11.5685 15.9317C11.5245 15.8182 11.5033 15.6971 11.5061 15.5753C11.5089 15.4536 11.5356 15.3336 11.5848 15.2222C11.6339 15.1108 11.7045 15.0101 11.7926 14.926C11.8807 14.8419 11.9844 14.776 12.098 14.732C12.2115 14.6879 12.3326 14.6667 12.4544 14.6695C12.5761 14.6723 12.6961 14.699 12.8075 14.7482C12.9189 14.7973 13.0196 14.868 13.1037 14.956L14.376 16.2847C15.2406 15.106 16.8984 13.1703 19.1403 12.0216C19.2487 11.9662 19.3669 11.9326 19.4882 11.9229C19.6095 11.9131 19.7315 11.9273 19.8473 11.9647C19.9631 12.0021 20.0704 12.062 20.1631 12.1408C20.2558 12.2197 20.332 12.316 20.3875 12.4244C20.4429 12.5327 20.4765 12.6509 20.4862 12.7722C20.496 12.8935 20.4818 13.0155 20.4444 13.1313C20.407 13.2471 20.3471 13.3544 20.2682 13.4471C20.1894 13.5398 20.093 13.616 19.9847 13.6715H19.9838Z"*/}
          {/*        fill="#0171E3"*/}
          {/*      />*/}
          {/*    </svg>*/}
          {/*    <p>*/}
          {/*      Мы помогаем брендам <br />{" "}*/}
          {/*      <span className="text-blue-1000">становиться иконами.</span>*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*  <div className="">*/}
          {/*    <svg*/}
          {/*      width="37"*/}
          {/*      height="30"*/}
          {/*      viewBox="0 0 37 30"*/}
          {/*      fill="none"*/}
          {/*      xmlns="http://www.w3.org/2000/svg"*/}
          {/*    >*/}
          {/*      <path*/}
          {/*        d="M27.9087 9.91146C27.8107 12.4682 26.849 14.9149 25.1822 16.8479C24.6886 17.4011 24.3122 18.0494 24.0757 18.7536V20.7297C24.0757 21.2098 23.886 21.6703 23.5485 22.0098C23.2109 22.3493 22.7531 22.54 22.2757 22.54H15.2462C14.7688 22.54 14.311 22.3493 13.9734 22.0098C13.6359 21.6703 13.4462 21.2098 13.4462 20.7297V18.7536C13.2097 18.0495 12.8332 17.4011 12.3397 16.8479C10.6716 14.9155 9.70846 12.4687 9.60938 9.91146C9.60932 7.78724 10.3398 5.72839 11.677 4.08408C13.0141 2.43978 14.8756 1.31126 16.9457 0.88992C19.0159 0.468581 21.1672 0.780362 23.0348 1.77238C24.9024 2.76441 26.3714 4.3756 27.1925 6.3327C27.6699 7.46595 27.9148 8.68451 27.9125 9.91527L27.9087 9.91146ZM26.1087 9.91146C26.1087 7.95151 25.3346 6.07183 23.9566 4.68593C22.5786 3.30004 20.7097 2.52145 18.761 2.52145C16.8122 2.52145 14.9433 3.30004 13.5653 4.68593C12.1873 6.07183 11.4132 7.95151 11.4132 9.91146C11.4132 14.4145 15.2462 16.4077 15.2462 18.7536V20.7297H22.2757V18.7536C22.2757 16.4077 26.1087 14.4145 26.1087 9.91146ZM23.1757 24.6648C23.1759 24.7838 23.1528 24.9018 23.1077 25.0118C23.0626 25.1218 22.9964 25.2219 22.9128 25.3061C22.8292 25.3904 22.7299 25.4572 22.6205 25.5028C22.5112 25.5484 22.394 25.5719 22.2757 25.5719H15.2462C15.0075 25.5719 14.7786 25.4765 14.6098 25.3068C14.441 25.137 14.3462 24.9068 14.3462 24.6667C14.3462 24.4267 14.441 24.1964 14.6098 24.0267C14.7786 23.8569 15.0075 23.7616 15.2462 23.7616H22.2757C22.5141 23.7616 22.7427 23.8567 22.9114 24.026C23.0801 24.1953 23.1752 24.4251 23.1757 24.6648ZM21.9631 27.0697C21.9937 27.1589 21.996 27.2555 21.9695 27.346C21.943 27.4365 21.8891 27.5165 21.8153 27.5747C20.9281 28.2676 19.8368 28.6437 18.7136 28.6437C17.5903 28.6437 16.4991 28.2676 15.6119 27.5747C15.5374 27.5172 15.4827 27.4376 15.4555 27.3472C15.4283 27.2568 15.43 27.16 15.4603 27.0706C15.4907 26.9812 15.5481 26.9036 15.6246 26.8488C15.7011 26.7939 15.7927 26.7645 15.8866 26.7648H21.5386C21.6324 26.7648 21.7238 26.7941 21.8002 26.8487C21.8767 26.9034 21.9323 26.9806 21.9631 27.0697Z"*/}
          {/*        fill="#0171E3"*/}
          {/*      />*/}
          {/*    </svg>*/}
          {/*    <p>*/}
          {/*      Мы превращаем <br />{" "}*/}
          {/*      <span className={"text-blue-1000"}> идеи в влияние.</span>*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*  <div className="">*/}
          {/*    <svg*/}
          {/*      width="31"*/}
          {/*      height="30"*/}
          {/*      viewBox="0 0 31 30"*/}
          {/*      fill="none"*/}
          {/*      xmlns="http://www.w3.org/2000/svg"*/}
          {/*    >*/}
          {/*      <g clip-path="url(#clip0_1885_11328)">*/}
          {/*        <path*/}
          {/*          d="M20.6172 7.5H29.1886V16.0714"*/}
          {/*          stroke="#0171E3"*/}
          {/*          strokeWidth="2.5"*/}
          {/*          stroke-linecap="round"*/}
          {/*          stroke-linejoin="round"*/}
          {/*        />*/}
          {/*        <path*/}
          {/*          d="M29.1892 7.5L17.082 19.6071C16.8817 19.8035 16.6125 19.9134 16.332 19.9134C16.0516 19.9134 15.7823 19.8035 15.582 19.6071L10.6535 14.6786C10.4532 14.4823 10.1839 14.3723 9.90346 14.3723C9.62301 14.3723 9.35374 14.4823 9.15346 14.6786L1.33203 22.5"*/}
          {/*          stroke="#0171E3"*/}
          {/*          strokeWidth="2.5"*/}
          {/*          stroke-linecap="round"*/}
          {/*          stroke-linejoin="round"*/}
          {/*        />*/}
          {/*      </g>*/}
          {/*      <defs>*/}
          {/*        <clipPath id="clip0_1885_11328">*/}
          {/*          <rect*/}
          {/*            width="30"*/}
          {/*            height="30"*/}
          {/*            fill="white"*/}
          {/*            transform="translate(0.261719)"*/}
          {/*          />*/}
          {/*        </clipPath>*/}
          {/*      </defs>*/}
          {/*    </svg>*/}
          {/*    <p className={""}>*/}
          {/*      <span className={"text-blue-1000"}>*/}
          {/*        Мы создаем маркетинг, <br /> двигающий*/}
          {/*      </span>{" "}*/}
          {/*      индустрию вперёд.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </Container>

        {/*video content*/}

        <div>
          <video
            autoPlay={true}
            muted
            controls={false}
            playsInline
            preload="none"
            loop
          >
            <source
              src={
                "https://storage.googleapis.com/mkit_monster_bucket/Video/MKIT/IMAC_V3.mp4"
              }
              type="video/mp4"
            />
          </video>
        </div>

        <Container
          className={"bg-[#161617] py-[100px] mt-[50px] overflow-hidden"}
        >
          <legend className="legend-3lvl text-white mb-[80px]">
            Наши направления
          </legend>

          <Directions />

          <div className={"text-center w-full"}>
            <legend className="custom-legend-2lvl mt-[100px]">
              Наши показатели
            </legend>

            <Tabs className={cn("Our-Indicators")}>
              <TabList className="inline-flex p-[5px] my-[20px] rounded-full bg-white">
                <Tab className="tab__delivery_panels whitespace-nowrap px-6 py-2.5">
                  CG REEL
                </Tab>
                <Tab className="tab__delivery_panels whitespace-nowrap px-6 py-2.5">
                  AI REEL
                </Tab>
              </TabList>
              <TabPanel
                className={
                  "w-full xl:px-[100px] mt-[30px] flex flex-col gap-10"
                }
              >
                <IndicatorsLoading title={"Blender"} percent={95} />
                <IndicatorsLoading title={"Blender"} percent={95} />
                <IndicatorsLoading title={"Blender"} percent={95} />
              </TabPanel>
            </Tabs>
          </div>
        </Container>

        <Container className={"py-[200px] overflow-hidden"}>
          <legend className="text-center justify-center text-[#222] text-[80px] font-bold leading-[75px]">
            <span className={"text-[#0057e2]"}>Мы не создаем контент.</span>
            <br /> Мы создаем культуру.
          </legend>

          <div className={"mt-11 flex gap-5"}>
            <div
              className={
                "w-1/2 h-[660px] px-[60px] bg-[#f5f5f7] py-2.5 rounded-[28px] inline-flex flex-col justify-center items-start gap-[30px]"
              }
            >
              <div className="w-[517.22px] justify-center text-[#1a1a1c] text-[56px] font-bold leading-[61.60px]">
                Бренды должны быть больше, чем логотипы.
              </div>
            </div>

            <div className={"w-1/2 flex flex-col gap-5"}>
              <div className="min-h-[254px] py-2.5 px-[60px] bg-[#f5f5f7] rounded-[28px] text-[#1a1a1c] text-[44px] font-bold leading-[50px] flex justify-start gap-x-8 items-center">
                <svg
                  width="72"
                  height="73"
                  viewBox="0 0 72 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1906_11865)">
                    <path
                      d="M61.5982 5.06048C61.5206 4.88693 61.3942 4.73969 61.2344 4.63671C61.0746 4.53373 60.8883 4.47945 60.6982 4.48048H32.8382C32.6709 4.48076 32.5063 4.52302 32.3595 4.60339C32.2128 4.68375 32.0885 4.79966 31.9982 4.94048L10.5782 38.9405C10.4751 39.0885 10.4148 39.2622 10.4041 39.4423C10.3933 39.6224 10.4325 39.802 10.5173 39.9612C10.6021 40.1205 10.7292 40.2532 10.8847 40.3448C11.0401 40.4365 11.2178 40.4834 11.3982 40.4805H26.7382L13.1982 66.9805C13.1205 67.1381 13.0839 67.3128 13.092 67.4883C13.1001 67.6639 13.1525 67.8345 13.2444 67.9843C13.3362 68.1341 13.4646 68.2582 13.6174 68.3449C13.7702 68.4317 13.9425 68.4783 14.1182 68.4805H20.1182C20.257 68.4814 20.3945 68.4535 20.5219 68.3984C20.6493 68.3433 20.7638 68.2623 20.8582 68.1605L55.9982 30.1805C56.1377 30.0383 56.2316 29.8577 56.2678 29.6618C56.3039 29.4659 56.2808 29.2637 56.2013 29.081C56.1218 28.8984 55.9895 28.7436 55.8215 28.6366C55.6535 28.5296 55.4573 28.4753 55.2582 28.4805H41.7782L61.4382 6.12048C61.5649 5.97843 61.6476 5.80254 61.676 5.6143C61.7044 5.42606 61.6774 5.23361 61.5982 5.06048Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1906_11865">
                      <rect
                        width="72"
                        height="72"
                        fill="white"
                        transform="translate(0 0.480469)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div>
                  Реклама должна <br /> быть больше, <br /> чем креатив.
                </div>
              </div>

              <div
                className={
                  "w-full h-full bg-[#f5f5f7] rounded-[28px] px-[50px] flex flex-col gap-[30px] justify-center"
                }
              >
                <svg
                  width="83"
                  height="84"
                  viewBox="0 0 83 84"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1906_11893)">
                    <path
                      d="M79.5404 21.2305L44.957 55.8138L27.6654 38.5221L3.45703 62.7305M79.5404 21.2305H55.332M79.5404 21.2305V45.4388"
                      stroke="black"
                      stroke-width="8"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1906_11893">
                      <rect
                        width="83"
                        height="83"
                        fill="white"
                        transform="translate(0 0.480469)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div className="w-[432.72px] justify-center text-[#00c5c7] text-[45px] font-bold leading-[49.50px]">
                  Маркетинг должен быть больше
                  <br />
                  чем цифры.
                </div>
              </div>
            </div>
          </div>

          {/**/}

          <div className={"grid grid-cols-2 mt-[50px]"}>
            <div className={"flex justify-between ml-auto items-center"}>
              <svg
                className={"pr-[46px]"}
                width="354"
                height="43"
                viewBox="0 0 354 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.6528 25.6824L35.0099 17.3583H17.4647L8.73475 25.6824V17.3164H0.00644156L0 34.0467L17.4647 42.4111V29.8646L26.1946 34.0467L34.9229 29.8646V42.4127L52.3795 34.0483L52.3811 17.3164H43.6528V25.6824Z"
                  fill="#111111"
                />
                <path
                  d="M17.4647 8.95191L0 0.585938L0.00644156 8.95191H17.4647Z"
                  fill="#111111"
                />
                <path
                  d="M52.3882 0.585938L34.9219 8.95191H52.3817L52.3882 0.585938Z"
                  fill="#111111"
                />
                <path
                  d="M282.51 10.4779H298.025V16.1532H283.761V25.2783H298.025V32.3478H281.965V41.473H308.697V1.28125H282.51V10.469V10.4779Z"
                  fill="#111111"
                />
                <path
                  d="M336.269 1.28711H317.867V41.4788H328.592V29.6546H334.169L341.355 41.4788H353.34V39.9863L345.126 27.2415C355.735 20.3507 352.741 1.34073 336.269 1.28711ZM336.269 20.5205H328.592V10.4748C331.104 10.4748 333.74 10.4122 336.269 10.4748C342.365 10.5284 342.07 20.5205 336.269 20.5205Z"
                  fill="#111111"
                />
                <path
                  d="M92.561 41.4798H103.527V1.17188H99.6842L82.9622 18.6357L66.5441 1.17188H62.5938V41.4798H73.56V23.5602L82.4349 32.5245H83.6325L92.561 23.5602V41.4798Z"
                  fill="#111111"
                />
                <path
                  d="M111.613 21.4454C111.613 49.2945 154.638 49.2945 154.638 21.4454C154.638 -6.4037 111.613 -6.34114 111.613 21.4454ZM122.642 21.4454C122.642 6.98461 143.681 6.98461 143.681 21.4454C143.681 35.9062 122.642 36.0313 122.642 21.4454Z"
                  fill="#111111"
                />
                <path
                  d="M187.837 20.9801L166.619 1.12109H162.723V41.4826H173.814V21.7309L194.96 41.5363H198.794V1.29091H187.837V20.9801Z"
                  fill="#111111"
                />
                <path
                  d="M244.161 10.4748H254.466V41.4788H265.075V10.4748H275.317V1.28711H244.152V10.4748H244.161Z"
                  fill="#111111"
                />
                <path
                  d="M240.451 29.1978H230.075C230.075 34.31 216.955 34.3547 216.955 29.6625C216.955 26.8472 220.431 26.2126 224.614 25.9803C233.73 25.3547 239.718 22.3695 239.834 13.6377C240.201 -3.70995 207.597 -3.70995 207.838 13.6377H218.018C218.018 8.29305 229.288 8.7578 229.646 13.5215C229.878 16.5691 226.768 17.1947 222.987 17.5969C214.658 18.4639 206.516 19.6615 206.516 29.7251C206.516 46.599 240.666 46.876 240.433 29.1978H240.451Z"
                  fill="#111111"
                />
              </svg>
              <div className={"vertical__line"} />
            </div>

            <div className={"pl-[46px]"}>
              <p className="w-[466.25px] justify-start text-[#6e6e7b] text-2xl font-semibold font-['Nunito_Sans'] uppercase leading-[31.20px]">
                МЫ создаем новые смыслы.
                <br />
                Мы формируем будущее бизнеса.
                <br />
                Мы Monster Corp.
              </p>
            </div>
          </div>
        </Container>

        {/*<VimeoEmbed videoId={"1062552326"} videoURL={"e4348904e6"} />*/}
        <div className={"overflow-hidden"}>
          <Container>
            <LazyVideoFrame
              className={"rounded-[28px] overflow-hidden"}
              videoSrc={
                "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/COCA_COLA_AI_COMMERCIAL.mp4"
              }
            />
            <div className={"flex gap-5 mt-5 h-full"}>
              <LazyVideoFrame
                coreClassName={
                  "h-full w-full rounded-[28px] overflow-hidden h-[517.61px]"
                }
                className={"h-full"}
                videoSrc={
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/BAKAI_GPT_REMAKE.mov"
                }
              />
              <LazyVideoFrame
                coreClassName={
                  "h-full w-full bg-[#f5f5f7] rounded-[28px] overflow-hidden h-[517.61px]"
                }
                className={"h-full"}
                videoSrc={
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/INTERSPORT.mp4"
                }
                height={"100%"}
              />
            </div>
            <LazyVideoFrame
              coreClassName={"mt-5 rounded-[28px] overflow-hidden"}
              className={"h-full"}
              videoSrc={
                "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/organic_juice_commercial%20(1080p).mp4"
              }
              height={"100%"}
            />
            <div className={"flex gap-5 mt-5 h-full"}>
              <LazyVideoFrame
                coreClassName={
                  "h-full w-full rounded-[28px] overflow-hidden h-[517.61px]"
                }
                className={"h-full"}
                videoSrc={
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/BAKAI_GPT_REMAKE.mov"
                }
              />
              <LazyVideoFrame
                coreClassName={
                  "h-full w-full bg-[#f5f5f7] rounded-[28px] overflow-hidden h-[517.61px]"
                }
                className={"h-full"}
                videoSrc={
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/INTERSPORT.mp4"
                }
                height={"100%"}
              />
            </div>

            <div className="mt-5">
              <LazyVideoFrame
                videoSrc={
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_JOY_COMMERCIAL.mp4"
                }
                posterSrc={
                  "https://storage.googleapis.com/mkit_monster_bucket/Poster/JOY_COMMERCIAL_H.webp"
                }
              />
            </div>
          </Container>

          <Container className={"overflow-hidden my-[100px]"}>
            <legend className="text-[#222] text-[80px] font-bold leading-[75px] mt-[80px]">
              Изучите тариф.
            </legend>

            <Tabs className={cn("Our-Indicators")}>
              <TabList className="inline-flex p-[5px] rounded-full bg-white">
                <Tab className="tab__delivery_panels whitespace-nowrap px-6 py-2.5">
                  CG REEL
                </Tab>
                <Tab className="tab__delivery_panels whitespace-nowrap px-6 py-2.5">
                  AI REEL
                </Tab>
              </TabList>
              <TabPanel className={"w-full mt-[30px] flex flex-col gap-10"}>
                <Tariff />
              </TabPanel>{" "}
            </Tabs>
          </Container>

          <Container className={"pt-[100px] pb-[100px] bg-black"}>
            <LogoCubeAnimation />
          </Container>

          <Container className={"py-[100px] bg-black"}>
            <img
              src="https://storage.googleapis.com/mkit_monster_bucket/Poster/JOY_COMMERCIAL_H.webp"
              className="max-h-[580px] h-full w-full rounded-[28px]"
              alt="banner"
            />
          </Container>
          <Footer />
        </div>
      </div>
    </LazyMotion>
  );
};

export default App;
