import { type FC } from "react";
import { useInView } from "react-intersection-observer";
import Container from "./Container";
import { AnimatedComponent } from "common/ui/animatedComponent";
import VideoPlayerHLSv2 from "./VideoPlayerHLSv2";
import { inViewProps } from "data/index";

const anVariantsOpacity = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const SectionVideos: FC = () => {
  const [videoOneRef, videoOneRefInView] = useInView(inViewProps);
  const [videoTwoRef, videoTwoRefInView] = useInView({
    ...inViewProps,
    threshold: 0.4,
  });

  return (
    <Container className="bg-[#f5f5f7]" ref={videoOneRef}>
      <AnimatedComponent
        initial={{ opacity: 0 }}
        animate={videoOneRefInView ? { opacity: 1 } : undefined}
        transition={{ duration: 0.5 }}
      >
        <VideoPlayerHLSv2
          src={
            "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/COCA_COLA_AI_COMMERCIAL_NEW/720p_mp4/stream.m3u8"
          }
          posterSrc={
            "https://storage.googleapis.com/mkit_monster_bucket/Poster/COLA_H.webp"
          }
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
          <VideoPlayerHLSv2
            src={
              "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/BAKAI_GPT_REMAKE/BAKAI_GPT_REMAKE/720p_mp4/stream.m3u8"
            }
            posterSrc={
              "https://storage.googleapis.com/mkit_monster_bucket/Poster/BAKAI_H.webp"
            }
            className="h-full w-full rounded-[28px] overflow-hidden md:h-[900px] lg:h-[518px]"
          />
        </AnimatedComponent>

        <AnimatedComponent
          initial="hidden"
          animate={videoOneRefInView ? "visible" : "hidden"}
          variants={anVariantsOpacity}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <VideoPlayerHLSv2
            src={
              "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/INTERSPORT/INTERSPORT/720p_mp4/stream.m3u8"
            }
            posterSrc="https://storage.googleapis.com/mkit_monster_bucket/Poster/INTERSPORT_H.webp"
            className="w-full bg-[#f5f5f7] rounded-[28px] overflow-hidden h-[400px] md:h-[518px]"
          />
        </AnimatedComponent>
      </AnimatedComponent>
      <AnimatedComponent
        initial={{ opacity: 0 }}
        animate={videoOneRefInView ? { opacity: 1 } : undefined}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        <VideoPlayerHLSv2
          src={
            "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/organic_juice_commercial%20(1080p)/organic_juice_commercial%20(1080p)/1080p_mp4/stream.m3u8"
          }
          posterSrc="https://storage.googleapis.com/mkit_monster_bucket/Poster/ORGANIC_2_H.webp"
          className="mt-5 rounded-[28px] h-[full] md:h-[900px] lg:h-auto overflow-hidden"
        />
      </AnimatedComponent>
      <div className="grid lg:grid-cols-2 gap-5 mt-5 h-full" ref={videoTwoRef}>
        <AnimatedComponent
          initial="hidden"
          animate={videoTwoRefInView ? "visible" : "hidden"}
          variants={anVariantsOpacity}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <VideoPlayerHLSv2
            src={
              "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/BMW_M5/BMW_M5/720p_mp4/stream.m3u8"
            }
            posterSrc="https://storage.googleapis.com/mkit_monster_bucket/Poster/BMW_H.webp"
            className="w-full rounded-[28px] overflow-hidden h-[400px] md:h-[518px]"
          />
        </AnimatedComponent>

        <AnimatedComponent
          initial="hidden"
          animate={videoTwoRefInView ? "visible" : "hidden"}
          variants={anVariantsOpacity}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <VideoPlayerHLSv2
            src={
              "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/3D_JOY_COMMERCIAL/3D_JOY_COMMERCIAL/720p_mp4/stream.m3u8"
            }
            posterSrc="https://storage.googleapis.com/mkit_monster_bucket/Poster/JOY_COMMERCIAL_H.webp"
            className="w-full bg-[#f5f5f7] rounded-[28px] overflow-hidden h-[400px] md:h-[518px]"
          />
        </AnimatedComponent>
      </div>
      <AnimatedComponent
        initial={{ opacity: 0 }}
        animate={videoTwoRefInView ? { opacity: 1 } : undefined}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="mt-5 h-full"
      >
        {/**/}
        <VideoPlayerHLSv2
          src={
            "https://storage.googleapis.com/mkit_monster_bucket/Video/hls/ENESAI_IMIDGE_WEB/ENESAI_IMIDGE_WEB/720p_mp4/stream.m3u8"
          }
          posterSrc="https://storage.googleapis.com/mkit_monster_bucket/Poster/ENESAI.webp"
          className="h-[400px] lg:h-auto rounded-[28px] overflow-hidden"
        />
      </AnimatedComponent>
    </Container>
  );
};

export default SectionVideos;
