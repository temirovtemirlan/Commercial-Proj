import { type FC, useState } from "react";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import { domAnimation, LazyMotion, motion } from "motion/react";

import Container from "components/Container";
import { cn } from "helpers/style";

import MonsReels from "components/MonsReels";
import Footer from "components/Footer";
import LazyVideoFrame from "components/LazyVideoFrame";
import Directions from "components/Directions";
import IndicatorsLoading from "common/IndicatorsLoading";
import Tariff from "components/Tariff";
import LogoCubeAnimation from "common/LogoCubeAnimation";
import WhyMonsterCorp from "components/WhyMonsterCorp";
import CultureSection from "components/CultureSection";

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
                <TabPanel className="w-full xl:px-[100px] mt-[30px] flex flex-col gap-10">
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

          {/* Мы не создаем контент. */}
          <CultureSection />
        </>

        <Container>
          <LazyVideoFrame
            videoSrc="https://storage.googleapis.com/mkit_monster_bucket/Video/AI/COCA_COLA_AI_COMMERCIAL.mp4"
            coreClassName="h-[400px] lg:h-auto"
            className="rounded-[28px] overflow-hidden h-full lg:h-auto"
          />
          <div className="grid lg:grid-cols-2 gap-5 mt-5 h-full">
            <LazyVideoFrame
              coreClassName="h-full w-full rounded-[28px] overflow-hidden h-[700px] md:h-[900px] lg:h-[518px]"
              className="h-full"
              videoSrc="https://storage.googleapis.com/mkit_monster_bucket/Video/AI/BAKAI_GPT_REMAKE.mov"
            />
            <LazyVideoFrame
              coreClassName="h-full w-full bg-[#f5f5f7] rounded-[28px] overflow-hidden h-[400px] md:h-[518px]"
              className="h-full"
              videoSrc="https://storage.googleapis.com/mkit_monster_bucket/Video/CG/INTERSPORT.mp4"
            />
          </div>
          <LazyVideoFrame
            coreClassName="mt-5 rounded-[28px] h-[700px] md:h-[900px] lg:h-auto overflow-hidden"
            className="h-full"
            videoSrc="https://storage.googleapis.com/mkit_monster_bucket/Video/AI/organic_juice_commercial%20(1080p).mp4"
          />
          <div className="grid lg:grid-cols-2 gap-5 mt-5 h-full">
            <LazyVideoFrame
              coreClassName="h-full w-full rounded-[28px] overflow-hidden h-[400px] md:h-[518px]"
              className="h-full"
              videoSrc="https://storage.googleapis.com/mkit_monster_bucket/Video/AI/BAKAI_GPT_REMAKE.mov"
            />
            <LazyVideoFrame
              coreClassName="h-full w-full bg-[#f5f5f7] rounded-[28px] overflow-hidden h-[700px] md:h-[900px] lg:h-[518px]"
              className="h-full"
              videoSrc="https://storage.googleapis.com/mkit_monster_bucket/Video/CG/INTERSPORT.mp4"
            />
          </div>
          <div className="mt-5">
            <LazyVideoFrame
              videoSrc="https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_JOY_COMMERCIAL.mp4"
              posterSrc="https://storage.googleapis.com/mkit_monster_bucket/Poster/JOY_COMMERCIAL_H.webp"
              coreClassName="h-[400px] lg:h-auto rounded-[28px] overflow-hidden"
              className="h-full lg:h-auto"
            />
          </div>
        </Container>

        <>
          <Container className={"overflow-hidden xl:py-[100px] py-[50px]"}>
            <legend className="legend-3lvl">Изучите тариф.</legend>

            <Tabs className="Our-Indicators">
              <TabList className="inline-flex p-[5px] rounded-full bg-white">
                <Tab className="tab__delivery_panels whitespace-nowrap px-6 py-2.5">
                  CG REEL
                </Tab>
                <Tab className="tab__delivery_panels whitespace-nowrap px-6 py-2.5">
                  AI REEL
                </Tab>
              </TabList>

              <TabPanel className="max-ss:flex max-ss:justify-center w-full mt-[30px]">
                <Tariff />
              </TabPanel>
            </Tabs>
          </Container>

          <Container className="pt-[100px] pb-[100px] bg-[#161617]">
            <LogoCubeAnimation />
          </Container>

          <Container className="py-[100px] bg-[#161617]">
            <img
              src="https://storage.googleapis.com/mkit_monster_bucket/Poster/JOY_COMMERCIAL_H.webp"
              className="max-h-[640px] mac:max-h-[960px] h-full w-full rounded-md"
              alt="banner"
            />
          </Container>
          <Footer />
        </>
      </div>
    </LazyMotion>
  );
};

export default App;
