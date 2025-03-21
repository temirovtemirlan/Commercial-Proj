import type { FC } from "react";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import { domAnimation, LazyMotion, motion } from "motion/react";
import { useInView } from "react-intersection-observer";

import Container from "components/Container";
import MonsReels from "components/MonsReels";
import Footer from "components/Footer";
import LazyVideoFrame from "components/LazyVideoFrame";
import Directions from "components/Directions";
import Tariff from "components/Tariff";
import LogoCubeAnimation from "common/LogoCubeAnimation";
import WhyMonsterCorp from "components/WhyMonsterCorp";
import CultureSection from "components/CultureSection";
import FooterVideo from "components/FooterVideo.tsx";
import ContactForm from "common/ContactForm.tsx";
import LazyLoadLayout from "components/LazyLoadLayout.tsx";
import OurIndicators from "components/OurIndicators";
import FloatingActionButtons from "components/FloatingActionButtons";
import { AnimatedComponent } from "common/ui/animatedComponent";
import { cn } from "helpers/style";
import VideoPlayerHLS from "components/VideoPlayerHLS.tsx";

interface HeaderProps {
  title: string;
  className?: string;
}
export const Header: FC<HeaderProps> = (props) => (
  <h1 className={cn("text-[80px] font-semibold", props.className)}>
    {props.title}
  </h1>
);

const view = { threshold: 0.2, triggerOnce: true };
const anVariantsOpacity = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const App: FC = () => {
  const [monsterCorpRef, monsterCorpInView] = useInView(view);
  const [monsreelsRef, monsreelsInView] = useInView({
    ...view,
    threshold: 0.9,
  });
  const [videoOneRef, videoOneRefInView] = useInView(view);
  const [videoTwoRef, videoTwoRefInView] = useInView({
    ...view,
    threshold: 0.4,
  });

  return (
    <>
      <LazyMotion features={domAnimation}>
        <Container className={"py-[70px]"}>
          <div className="flex justify-between xl:flex-row flex-col gap-y-6 gap-x-5">
            <AnimatedComponent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <svg
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
            </AnimatedComponent>

            <AnimatedComponent
              tag="p"
              className="text-black text-2xl grow-1 xl:max-w-[800px] text-balance"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span className="leading-relaxed">
                MONSTER CORP — ЦИФРОВАЯ ЭКОСИСТЕМА УСЛУГ. <br />
              </span>
              Первый цифровой медиакит для бизнеса — это ваш личный навигатор в
              мире маркетинга, продакшна, брендинга, VFX и IT. <br />
              Забудьте про бесконечные PDF — всё, что вам нужно, доступно онлайн
              в один клик.
            </AnimatedComponent>
          </div>
        </Container>

        {/* Showreel */}
        <div className="text-center">
          <Tabs defaultIndex={1} className="Monstr-Showreel">
            <TabPanel className="mac:min-h-[1000px]">
              <LazyVideoFrame
                src={[
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/CG_REEL_HORIZONTAL_2.mp4",
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/CG_REEL_HORIZONTAL_2.webm",
                ]}
                // videoSrcWebm="https://storage.googleapis.com/mkit_monster_bucket/Video/CG/CG_REEL_HORIZONTAL_2.webm"
                posterSrc={""}
                isFullScreen
              />
            </TabPanel>
            <TabPanel>
              <LazyVideoFrame
                src={[
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/AI_REEL_HORIZONTAL_NEW.mp4",
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/AI_REEL_HORIZONTAL_NEW.webm",
                ]}
                posterSrc={""}
                isFullScreen
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
                  AIGC REEL
                </Tab>
              </TabList>
            </motion.div>
          </Tabs>
        </div>

        <div className={"flex"}>
          <div className={"w-1/2"}>
            <VideoPlayerHLS
              autoPlay
              // muted
              controls={true}
              src={
                "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/coca_cola_ai/COCA_COLA_AI_COMMERCIAL.m3u8"
              }
            />
          </div>

          <div className={"w-1/2"}>
            <video
              autoPlay
              loop
              // muted
              controls={true}
              src="https://storage.googleapis.com/mkit_monster_bucket/Video/AI/COCA_COLA_AI_COMMERCIAL.mp4"
            ></video>
          </div>
        </div>

        <Container className="bg-[#f5f5f7] xl:pt-[100px] pt-[50px] text-center">
          <div ref={monsterCorpRef} />
          <AnimatedComponent
            className="w-full text-center"
            initial={{ y: 100, opacity: 0 }}
            animate={monsterCorpInView ? { y: 0, opacity: 1 } : undefined}
            transition={{ duration: 0.8 }}
          >
            <legend className="gradient-legend-1lvl">Monster Corp.</legend>
            <span className="legend-2lvl">Исскуство создавать будущее.</span>

            <p className="text-1lvl">
              Мы не просто создаем бренды, контент и технологии. <br /> Мы
              строим реальность, которой хочется быть частью. <br /> <br />В
              мире, где каждый борется за внимание, выигрывают те, кто умеет{" "}
              <br />
              захватывать воображение. Monster Corp. — это экосистема,
              <br /> где данные превращаются в стратегию, технологии — в эмоции,
              <br /> а идеи — в культуру.
            </p>
          </AnimatedComponent>
        </Container>

        <Container className="bg-[#f5f5f7] xl:pt-[150px] pt-[80px] xl:pb-[100px] overflow-hidden">
          <AnimatedComponent
            tag="legend"
            className="legend-3lvl"
            initial={{ y: 40, opacity: 0 }}
            animate={monsreelsInView ? { y: 0, opacity: 1 } : undefined}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Monsreels
          </AnimatedComponent>
          <div ref={monsreelsRef} />

          <MonsReels inView={monsreelsInView} />
        </Container>

        {/* Почему Monster Corp? */}
        <WhyMonsterCorp />

        {/* Video content*/}
        <div className="relative w-full max-w-full px-5 md:px-10 lg:px-0 overflow-hidden pb-[100px]">
          <video
            autoPlay
            muted
            playsInline
            preload="none"
            loop
            className="max-lg:w-full max-md:h-[260px] max-lg:h-[400px] object-cover"
          >
            <source
              src="https://storage.googleapis.com/mkit_monster_bucket/Video/MKIT/IMAC_V4.mp4"
              type="video/mp4"
            />
            <source
              src="https://storage.googleapis.com/mkit_monster_bucket/Video/MKIT/Video_MKIT_IMAC_V4.webm"
              type="video/webm"
            />
          </video>

          {/* <div
            className="absolute bottom-0 left-0 h-[50vh] w-full"
            style={{
              background:
                "linear-gradient(0deg, var(--bg-0), var(--bg-0) 15%, transparent)",
            }}
          /> */}
        </div>

        <div className="relative bg-[#161617] py-[100px] mt-[50px]">
          <Directions />

          <OurIndicators />
        </div>

        {/* Мы не создаем контент. */}
        <CultureSection />

        <Container className="bg-[#f5f5f7]" ref={videoOneRef}>
          <AnimatedComponent
            initial={{ opacity: 0 }}
            animate={videoOneRefInView ? { opacity: 1 } : undefined}
            transition={{ duration: 0.5 }}
          >
            <LazyVideoFrame
              src={[
                "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/COCA_COLA_AI_COMMERCIAL.mp4",
                "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/COCA_COLA_AI_COMMERCIAL.webm",
              ]}
              posterSrc="https://storage.googleapis.com/mkit_monster_bucket/Poster/COLA_H.webp"
              coreClassName="h-[400px] lg:h-auto"
              className="rounded-[28px] overflow-hidden h-full lg:h-auto"
            />
          </AnimatedComponent>

          <AnimatedComponent
            initial={{ opacity: 0 }}
            animate={videoOneRefInView ? { opacity: 1 } : undefined}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-5 mt-5 h-full"
          >
            <AnimatedComponent
              initial="hidden"
              animate={videoOneRefInView ? "visible" : "hidden"}
              variants={anVariantsOpacity}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <LazyVideoFrame
                coreClassName="h-full w-full rounded-[28px] overflow-hidden h-[700px] md:h-[900px] lg:h-[518px]"
                className="h-full"
                src={[
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/BAKAI_GPT_REMAKE.mov",
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/BAKAI_GPT_REMAKE.webm",
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/BAKAI_GPT_REMAKE.mp4",
                ]}
                posterSrc="https://storage.googleapis.com/mkit_monster_bucket/Poster/BAKAI_H.webp"
              />
            </AnimatedComponent>

            <AnimatedComponent
              initial="hidden"
              animate={videoOneRefInView ? "visible" : "hidden"}
              variants={anVariantsOpacity}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <LazyVideoFrame
                coreClassName="h-full w-full bg-[#f5f5f7] rounded-[28px] overflow-hidden h-[400px] md:h-[518px]"
                className="h-full"
                src={[
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/INTERSPORT.mp4",
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/INTERSPORT.webm",
                ]}
                posterSrc="https://storage.googleapis.com/mkit_monster_bucket/Poster/INTERSPORT_H.webp"
              />
            </AnimatedComponent>
          </AnimatedComponent>
          <AnimatedComponent
            initial={{ opacity: 0 }}
            animate={videoOneRefInView ? { opacity: 1 } : undefined}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <LazyVideoFrame
              coreClassName="mt-5 rounded-[28px] h-[full] md:h-[900px] lg:h-auto overflow-hidden"
              className="h-full"
              src={[
                "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/organic_juice_commercial%20(1080p).mp4",
                "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/organic_juice_commercial%20(1080p).webm",
              ]}
              posterSrc="https://storage.googleapis.com/mkit_monster_bucket/Poster/ORGANIC_2_H.webp"
            />
          </AnimatedComponent>
          <div
            className="grid lg:grid-cols-2 gap-5 mt-5 h-full"
            ref={videoTwoRef}
          >
            <AnimatedComponent
              initial="hidden"
              animate={videoTwoRefInView ? "visible" : "hidden"}
              variants={anVariantsOpacity}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <LazyVideoFrame
                coreClassName="h-full w-full rounded-[28px] overflow-hidden h-[400px] md:h-[518px]"
                className="h-full"
                src={[
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/BMW_M5.mp4",
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/BMW_M5.webm",
                ]}
                posterSrc="https://storage.googleapis.com/mkit_monster_bucket/Poster/BMW_H.webp"
              />
            </AnimatedComponent>

            <AnimatedComponent
              initial="hidden"
              animate={videoTwoRefInView ? "visible" : "hidden"}
              variants={anVariantsOpacity}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <LazyVideoFrame
                src={[
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_JOY_COMMERCIAL.mp4",
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_JOY_COMMERCIAL.webm",
                ]}
                posterSrc="https://storage.googleapis.com/mkit_monster_bucket/Poster/JOY_COMMERCIAL_H.webp"
                coreClassName="h-full w-full bg-[#f5f5f7] rounded-[28px] overflow-hidden h-[400px] md:h-[518px]"
                className="h-full object-cover"
              />
            </AnimatedComponent>
          </div>
          <AnimatedComponent
            initial={{ opacity: 0 }}
            animate={videoTwoRefInView ? { opacity: 1 } : undefined}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="mt-5 h-full"
          >
            <LazyVideoFrame
              className="h-full"
              coreClassName="h-[400px] lg:h-auto rounded-[28px] overflow-hidden"
              src={[
                "https://storage.googleapis.com/mkit_monster_bucket/Video/PRODUCTION/ENESAI_IMIDGE_WEB.mp4",
                "https://storage.googleapis.com/mkit_monster_bucket/Video/PRODUCTION/ENESAI_IMIDGE_WEB.webm",
              ]}
              posterSrc="https://storage.googleapis.com/mkit_monster_bucket/Poster/ENESAI.webp"
            />
          </AnimatedComponent>
        </Container>

        <Tariff />

        <LazyLoadLayout className="pt-[100px]">
          <Container className="pt-[100px] pb-[100px] bg-[#161617]">
            <LogoCubeAnimation />
          </Container>
        </LazyLoadLayout>

        <div>
          <FooterVideo />
        </div>

        <ContactForm />

        <Footer />
      </LazyMotion>

      <FloatingActionButtons />
    </>
  );
};

export default App;
