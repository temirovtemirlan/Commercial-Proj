import { type FC, useState } from "react";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import { domAnimation, LazyMotion } from "motion/react";

import Container from "components/Container.tsx";
import { cn } from "helpers/style.ts";

import MonsReels from "components/MonsReels.tsx";
import Footer from "components/Footer";
import LazyVideoFrame from "components/LazyVideoFrame.tsx";
import { motion } from "framer-motion";
import Directions from "components/Directions.tsx";
import IndicatorsLoading from "common/IndicatorsLoading.tsx";
import Tariff from "components/Tariff.tsx";
import LogoCubeAnimation from "common/LogoCubeAnimation";
import WhyMonsterCorp from "components/WhyMonsterCorp";

interface HeaderProps {
  title: string;
  className?: string;
}
export const Header: FC<HeaderProps> = (props) => (
  <h1 className={cn("text-[80px] font-semibold", props.className)}>
    {props.title}
  </h1>
);

const indicatorsLoading = [
  {
    gradientClass: "gradient-three",
    title: "Cinema 4D",
    end: 91,
    filter: "CG",
  },
  {
    gradientClass: "gradient-one",
    title: "Unity",
    end: 90,
    filter: "AI",
  },
  {
    gradientClass: "gradient-four",
    title: "Blender",
    end: 97,
    filter: "CG",
  },
  {
    gradientClass: "gradient-two",
    title: "Marvelous Design",
    end: 91,
    filter: "CG",
  },
];

const indicatorsAppsLogo = [
  {
    title: "",
    app: "/image 28.png",
    className: "",
    filter: "CG",
  },
  {
    title: "",
    app: "/image-1.png",
    className: "",
    filter: "AI",
  },
  {
    title: "",
    app: "/image.png",
    className: "",
    filter: "CG",
  },
];

const App: FC = () => {
  const [tappad, setTaped] = useState<string>("CG");

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

        {/*  Почему Monster Corp? */}
        <WhyMonsterCorp />

        {/*video content*/}
        <div className="relative w-full max-w-full px-5 md:px-10 lg:px-0 overflow-hidden">
          <video
            autoPlay
            muted
            playsInline
            preload="none"
            loop
            className="max-lg:w-full max-md:h-[260px] max-lg:h-[400px] object-cover"
          >
            <source
              src="https://storage.googleapis.com/mkit_monster_bucket/Video/MKIT/IMAC_V3.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="bg-[#161617] py-[100px] mt-[50px] overflow-hidden">
          <Container>
            <legend className="legend-3lvl text-white mb-[80px]">
              Наши направления
            </legend>
          </Container>

          <Directions />

          <Container className="text-center w-full">
            <legend className="custom-legend-2lvl mt-[100px]">
              Наши показатели
            </legend>

            <Tabs className={cn("Our-Indicators")}>
              <TabList className="inline-flex p-[5px] my-[20px] rounded-full bg-white">
                <Tab
                  onClick={() => setTaped("CG")}
                  className="tab__delivery_panels whitespace-nowrap px-6 py-2.5"
                >
                  CG REEL
                </Tab>
                <Tab
                  onClick={() => setTaped("AI")}
                  className="tab__delivery_panels whitespace-nowrap px-6 py-2.5"
                >
                  AI REEL
                </Tab>
              </TabList>
              <div className={"flex gap-x-9"}>
                {indicatorsAppsLogo?.map((app, index) => (
                  <>
                    <img
                      className={cn(app.className, {
                        "opacity-30": app.filter !== tappad,
                      })}
                      key={index}
                      src={app.app}
                      alt={app.title}
                      onClick={() => setTaped(app.filter)}
                    />
                  </>
                ))}
              </div>
              <TabPanel
                className={
                  "w-full xl:px-[100px] mt-[30px] flex flex-col gap-10"
                }
              >
                {indicatorsLoading
                  ?.filter((item) => item.filter === tappad)
                  ?.map((el, index) => (
                    <IndicatorsLoading
                      key={index}
                      title={el.title}
                      percent={el.end}
                      gradientClassName={el.gradientClass}
                    />
                  ))}
                {/*<IndicatorsLoading*/}
                {/*  title={"Blender"}*/}
                {/*  gradientClassName={"gradient-one "}*/}
                {/*  percent={95}*/}
                {/*/>*/}
                {/*<IndicatorsLoading*/}
                {/*  gradientClassName={"gradient-two"}*/}
                {/*  title={"Blender"}*/}
                {/*  percent={95}*/}
                {/*/>{" "}*/}
                {/*<IndicatorsLoading*/}
                {/*  gradientClassName={"gradient-four"}*/}
                {/*  title={"Blender"}*/}
                {/*  percent={95}*/}
                {/*/>*/}
              </TabPanel>
            </Tabs>
          </Container>
        </div>

        <Container className={"xl:py-[200px] py-[100px] overflow-hidden"}>
          <legend className="legend-2lvl">
            <span className={"gradient-legend-1lvl"}>
              Мы не создаем контент.
            </span>
            <br /> Мы создаем культуру.
          </legend>

          <div className={"mt- flex gap-5"}>
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

                <p>
                  Реклама должна <br /> быть больше, <br /> чем креатив.
                </p>
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

          <Container className={"overflow-hidden xl:py-[100px] py-[50px]"}>
            <legend className="legend-3lvl">Изучите тариф.</legend>

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
