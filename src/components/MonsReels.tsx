import type { CSSProperties, FC } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import MonstriliCarousel from "components/MonstriliCarousel";
import LazyVideoFrame from "components/LazyVideoFrame";
import type { VideoFrameProps } from "components/VideoFrame";
import { AnimatedComponent } from "common/ui/animatedComponent";

interface MonsReelsProps {
  inView: boolean;
}

const carouselStyle: CSSProperties = {
  background: "#f0f0f0",
  width: "100%",
  height: "700px",
  borderRadius: "28px",
  overflow: "hidden",
};

const CGReelData: VideoFrameProps[] = [
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_JOY_CHERRY.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/JOY_3D.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/FALL_SMETANA.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_FALL_SMETANA.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_MIN_MILK.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_PROMO.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_DESSERT_CUBE.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_DESSERT_BOX.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  // 4 pos end

  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/DODO_NOORUZ_2024_RU.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/DODO_CG.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_WENDING.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_VENDING.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_AIRAN_VIT.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_AIRAN_NEW.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_BREAKFAST.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_CG.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/GLOVO_NOORUZ_HD_RU.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/GLOVO.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/FALL_YOGURT.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_FALL_YOGURT.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_MASCOT_4.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_BOAM.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/FALL_CHALAP.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_FALL_CHALAP.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/CLOTH_KURANTY.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/ENESAI_1.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/FALL_AIRAN.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_FALL_AIRAN.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_KEFIR_CHILL.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_CHILL.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_TRANSITION_3.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_ANIMATION.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/TAMLER_LOCKET_3.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/TAMLER.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_KITCHEN_AUTO.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_KITCHEN.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_MASCOT_1.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_DANCE_1.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/ORGANIC_CHARACTER.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/ORGANIC_CHARACTER.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_PHONE_PRODUCTS.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_PHONE.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_PLASTINA_2.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_MILK_PLAYLIST.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_BIFI_2.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BIFI_COMMERCIAL.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/ORGANIC_WAVE_DAVINCI.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/ORGANIC.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_DESSERT_FLOW_3.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_DESSERT.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_IFTAR_2024.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_RAMADAN.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_BIFI_1.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BIFI.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/CLOTH_THEATRE.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/ENESAI_2.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_BIOKEFIR_VKUSY.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_BIOKEFIR.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_KEFIR_SPORT.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_KEFIR_SPORT.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_JOY_VENDING_2.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/JOY_TREND.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },

  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_MIN_BIFI.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BIFI_3D.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  // JOY JOY JOY COMMERCIAL
  // {
  //   videoSrc:
  //     "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_JOY_COMMERCIAL.mp4",
  //   posterSrc:
  //     "https://storage.googleapis.com/mkit_monster_bucket/Poster/JOY_COMMERCIAL_H.webp",
  //   width: "357",
  //   height: "700",
  //   className: " h-full rounded-2.5xl overflow-hidden",
  //   title: "",
  // },

  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_MASCOT_6.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_MARATHONE.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
];

const AIReelData = [
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/BBK_AI.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BOOBLIK.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/CHERRY_1.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/JOY_3.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/DEER_VERTICAL_2.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/ENESAI_22.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/DODO_AI.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/DODO.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/FLOWERS_VERTICAL_4.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/ENESAI_11.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/GOLDEN_PLANET.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/ENESAI_6.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/JOY_ANOUNCE_2.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/JOY_4.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/M5_COMMERCIAL_3.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BMW_M5.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/NUSRET.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/NUSRET.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/PEACH_1.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/JOY_2.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/S_1.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/ENESAI_4.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/SALUT_4.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/ENESAI_5.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/SILK_VERTICAL_3.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/ENESAI_3.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/VERTICAL.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/PAPA_JOHNS.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/WINTER_AI_1_KG.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_1.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/WINTER_AI_2.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_2.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
];

function videoCreaterComponents(data: VideoFrameProps[]) {
  return data?.map((el, index) => (
    <div key={index} className={"overflow-hidden"} style={carouselStyle}>
      <LazyVideoFrame {...el} />
    </div>
  ));
}

const MonsReels: FC<MonsReelsProps> = ({ inView }) => {
  return (
    <Tabs className="Mosnreel-tabs">
      <AnimatedComponent
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : undefined}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <TabList className="inline-flex gap-3.5 w-auto p-[5px] bg-white rounded-full xl:my-[80px] mt-[20px] my-[40px] max-w-full overflow-x-auto">
          <Tab className="tab__delivery_panels whitespace-nowrap px-6 py-2.5">
            CG REEL
          </Tab>
          <Tab className="tab__delivery_panels whitespace-nowrap px-6 py-2.5">
            AIGC REEL
          </Tab>
          <Tab className="tab__delivery_panels whitespace-nowrap px-6 py-2.5">
            DESIGN BRANDING
          </Tab>
        </TabList>
      </AnimatedComponent>

      <TabPanel>
        <MonstriliCarousel
          coreClassName={"monstrili-carousel"}
          className={"monsreel-carousel"}
          items={videoCreaterComponents(CGReelData)}
          nextEl={"cdf26213a150dc23a"}
          prevEl={"d41d8cd98f00b2dee"}
          inView={inView}
        />
      </TabPanel>

      <TabPanel>
        <MonstriliCarousel
          coreClassName={"monstrili-carousel"}
          className={"monsreel-carousel"}
          items={videoCreaterComponents(AIReelData)}
          nextEl={"cdf26213a150dc23a"}
          prevEl={"d41d8cd98f00b2dee"}
          inView={inView}
        />
      </TabPanel>
    </Tabs>
  );
};

export default MonsReels;
