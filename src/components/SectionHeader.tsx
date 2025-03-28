import { type FC, useEffect, useState } from "react";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import { useMediaQuery } from "usehooks-ts";
import { motion, useAnimation } from "motion/react";

import VideoPlayerHLSv2 from "components/VideoPlayerHLSv2";
import Container from "./Container";
import { AnimatedComponent } from "common/ui/animatedComponent";
import { cn } from "helpers/style";

const tabStyle =
  "relative whitespace-nowrap px-6 py-2.5 z-10 cursor-pointer focus:outline-none";
const tabSelectedStyle = "bg-[#0171e3] text-white rounded-[100px]";

const SectionHeader: FC = () => {
  const matches = useMediaQuery("(min-width: 650px)");

  const [aiGCVideo, setAIGCVideo] = useState<string>(
    matches
      ? "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/AI_REEL_HORIZONTAL_NEW/AI_REEL_HORIZONTAL_NEW/720p_mp4/stream.m3u8"
      : "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/AICG_VERTICAL/720p_mp4/stream.m3u8"
  );

  const [cgVideo, setCGVideo] = useState<string>(
    matches
      ? "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/CG_REEL_HORIZONTAL_2/CG_REEL_HORIZONTAL_2/720p_mp4/stream.m3u8"
      : "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/CG_REEL_VERTICAL/720p_mp4/stream.m3u8"
  );

  useEffect(() => {
    setCGVideo(
      matches
        ? "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/CG_REEL_HORIZONTAL_2/CG_REEL_HORIZONTAL_2/720p_mp4/stream.m3u8"
        : "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/CG_REEL_VERTICAL/720p_mp4/stream.m3u8"
    );
    setAIGCVideo(
      matches
        ? "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/AI_REEL_HORIZONTAL_NEW/AI_REEL_HORIZONTAL_NEW/720p_mp4/stream.m3u8"
        : "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/AICG_VERTICAL/720p_mp4/stream.m3u8"
    );
  }, [matches]);

  const controls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const sequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Анимация перемещения стиля между табами
      await controls.start({
        x: "120%", // Перемещаем выделение на второй таб
        transition: { duration: 0.5 },
      });
      await controls.start({
        x: "0%", // Возвращаемся на первый таб
        transition: { duration: 0.5 },
      });
      await controls.start({
        x: "120%", // Опять на второй таб
        transition: { duration: 0.5 },
      });
      await controls.start({
        x: "0%", // Окончательное возвращение на первый таб
        transition: { duration: 0.5 },
      });

      // После завершения анимации
      setIsAnimating(false);
    };

    sequence();
  }, [controls]);

  return (
    <>
      <Container className="py-[70px]">
        <div className="flex justify-between xl:flex-row flex-col gap-y-6 gap-x-[200px]">
          <AnimatedComponent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <svg
              className="w-[254px] md:w-[354px] md:h-[43px]"
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
            tag="div"
            className="text-black text-2xl grow-1 xl:max-w-[800px] text-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="leading-relaxed">
              MONSTER CORP — ЦИФРОВАЯ ЭКОСИСТЕМА УСЛУГ. <br />
            </p>
            <p>
              Первый цифровой медиакит для бизнеса — это ваш личный навигатор в
              мире маркетинга, продакшна, брендинга, VFX и IT. <br />
              Забудьте про бесконечные PDF — всё, что вам нужно, доступно онлайн
              в один клик.
            </p>
          </AnimatedComponent>
        </div>
      </Container>

      {/* Showreel */}
      <section className="text-center">
        <Tabs className="Monstr-Showreel">
          <TabPanel>
            <VideoPlayerHLSv2
              className={matches ? "" : "h-[700px]"}
              key={cgVideo}
              src="https://storage.googleapis.com/mkit_monster_bucket/Video/hls/CG_REEL_HORIZONTAL_2/CG_REEL_HORIZONTAL_2/720p_mp4/stream.m3u8"
              posterSrc={""}
              autoPlay
              isFullScreen
              playsInline={true}
              loop
            />
          </TabPanel>
          <TabPanel>
            <VideoPlayerHLSv2
              className={matches ? "" : "h-[700px]"}
              key={aiGCVideo}
              src={aiGCVideo}
              posterSrc=""
              autoPlay
              isFullScreen
              playsInline={true}
              loop
            />
          </TabPanel>
          <motion.div
            className={"switcher sticky bottom-5 pt-5 inline-block"}
            initial={{ y: 100, scale: 0 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "backOut", delay: 0.2 }}
          >
            <TabList className="relative flex p-[5px] bg-white rounded-full my-first-tab-step overflow-hidden">
              <Tab
                className={cn(tabStyle)}
                selectedClassName={cn(!isAnimating && tabSelectedStyle)}
              >
                CG REEL
              </Tab>
              <Tab
                className={cn(tabStyle)}
                selectedClassName={cn(!isAnimating && tabSelectedStyle)}
              >
                AIGC REEL
              </Tab>

              {isAnimating && (
                <motion.div
                  className="absolute top-[5px] left-[5px] w-[112px] h-11 bg-[#0171e3] rounded-full pointer-events-none"
                  animate={controls}
                />
              )}
            </TabList>
          </motion.div>
        </Tabs>
      </section>
    </>
  );
};

export default SectionHeader;
