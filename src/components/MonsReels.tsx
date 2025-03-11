import { CSSProperties, type FC } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import MonstriliCarousel from "components/MonstriliCarousel.tsx";
import VimeoEmbed from "components/VimeoEmbed";
import { cn } from "helpers/style.ts";
import VideoFrame, { VideoFrameProps } from "components/VideoFrame.tsx";

interface MonsReelsProps {
  className?: string;
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
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_MIN_BIFI.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BIFI_3D.webp",
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
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_WENDING.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_VENDING.webp",
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
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_DESSERT_CUBE.mp4",
    posterSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_DESSERT_BOX.webp",
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
      "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_BIOKEFIR_VKUSY.mp4",
    posterSrc: "",
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
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/ENESAI_5.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },
  {
    videoSrc:
      "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/VERTICAL.mp4",
    posterSrc: "https://storage.googleapis.com/mkit_monster_bucket/Poster/",
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
      "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_1.webp",
    width: "357",
    height: "700",
    className: " h-full rounded-2.5xl overflow-hidden",
    title: "",
  },

  //
  // <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
  //   <VimeoEmbed
  //     className={"object-center object-cover bg-black"}
  //     height={"700px"}
  //     videoId="1062549233"
  //     videoURL="5a009f461e"
  //   />
  // </div>,
  // <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
  //   <VimeoEmbed
  //     className={"object-center object-cover bg-black"}
  //     height={"700px"}
  //     videoId="1062549407"
  //     videoURL="cb6a6c8b09"
  //   />
  // </div>,
  // <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
  //   <VimeoEmbed
  //     className={"object-center object-cover bg-black"}
  //     height={"700px"}
  //     videoId="1062549593"
  //     videoURL="99b51a0fc7"
  //   />
  // </div>,
  // <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
  //   <VimeoEmbed
  //     className={"object-center object-cover bg-black"}
  //     height={"700px"}
  //     videoId="1062549632"
  //     videoURL="91397564b6"
  //     // https://player.vimeo.com/video/1062549632?h=91397564b6&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
  //   />
  // </div>,
  // <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
  //   <VimeoEmbed
  //     className={"object-center object-cover bg-black"}
  //     height={"700px"}
  //     videoId="1062549737"
  //     videoURL="77a5ea7f39"
  //     // https://player.vimeo.com/video/1062549737?h=77a5ea7f39&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
  //   />
  // </div>,
  // <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
  //   <VimeoEmbed
  //     className={"object-center object-cover bg-black"}
  //     height={"700px"}
  //     videoId="1062552326"
  //     videoURL="e4348904e6"
  //     // https://player.vimeo.com/video/1062552326?h=e4348904e6&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
  //   />
  // </div>,
  // <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
  //   <VimeoEmbed
  //     className={"object-center object-cover bg-black"}
  //     height={"700px"}
  //     videoId="1062552051"
  //     videoURL="646255a00f"
  //     // https://player.vimeo.com/video/1062552051?h=646255a00f&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
  //   />
  // </div>,
  // <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
  //   <VimeoEmbed
  //     className={"object-center object-cover bg-black"}
  //     height={"700px"}
  //     videoId="1062552292"
  //     videoURL="65ae959128"
  //     // https://player.vimeo.com/video/1062552292?h=65ae959128&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
  //   />
  // </div>,
  // <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
  //   <VimeoEmbed
  //     className={"object-center object-cover bg-black"}
  //     height={"700px"}
  //     videoId="1062552161"
  //     videoURL="c87bd13a6a"
  //     // https://player.vimeo.com/video/1062552161?h=c87bd13a6a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
  //   />
  // </div>,
  // <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
  //   <VimeoEmbed
  //     className={"object-center object-cover bg-black"}
  //     height={"700px"}
  //     videoId="1062552211"
  //     videoURL="2476f9ff5d"
  //     // https://player.vimeo.com/video/1062552211?h=2476f9ff5d&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
  //   />
  // </div>,
  // <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
  //   <VimeoEmbed
  //     className={"object-center object-cover bg-black"}
  //     height={"700px"}
  //     videoId="1062551983"
  //     videoURL="7fcae73275"
  //     title={"DODO PIZZA"}
  //     // https://player.vimeo.com/video/1062551983?h=7fcae73275&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
  //   />
  // </div>,
  // <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
  //   <VimeoEmbed
  //     className={"object-center object-cover bg-black"}
  //     height={"700px"}
  //     videoId="1062553874"
  //     videoURL="14a7a9b71a"
  //     title={"DODO PIZZA"}
  //     // https://player.vimeo.com/video/1062553874?h=14a7a9b71a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
  //   />
  // </div>,
  // <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
  //   <VimeoEmbed
  //     className={"object-center object-cover bg-black"}
  //     height={"700px"}
  //     videoId="1062554263"
  //     videoURL="03ca465e99"
  //     title={"DODO PIZZA"}
  //     //https://player.vimeo.com/video/1062554263?h=03ca465e99&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
  //   />
  // </div>,
  // <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
  //   <VimeoEmbed
  //     className={"object-center object-cover bg-black"}
  //     height={"700px"}
  //     videoId="1062554165"
  //     videoURL="dbdbcbf50f"
  //     title={"DODO PIZZA"}
  //     // https://player.vimeo.com/video/1062554165?h=dbdbcbf50f&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
  //   />
  // </div>,
  // <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
  //   <VimeoEmbed
  //     className={"object-center object-cover bg-black"}
  //     height={"700px"}
  //     videoId="1062553945"
  //     videoURL="b5b26c2c81"
  //     title="ENESAI"
  //     // https://player.vimeo.com/video/1062553945?h=b5b26c2c81&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479    />
  //   />
  // </div>,
  // <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
  //   <VimeoEmbed
  //     className={"object-center object-cover bg-black"}
  //     height={"700px"}
  //     videoId="1062554332"
  //     videoURL="45924735dd"
  //     title="ENESAI"
  //     // https://player.vimeo.com/video/1062554332?h=45924735dd&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
  //   />
  // </div>,
  // <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
  //   <VimeoEmbed
  //     className={"object-center object-cover bg-black"}
  //     height={"700px"}
  //     videoId="1062554055"
  //     videoURL="2ff8b042f4"
  //     title="ENESAI"
  //     // https://player.vimeo.com/video/1062554055?h=2ff8b042f4&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479    />
  //   />
  // </div>,
  // <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
  //   <VimeoEmbed
  //     className={"object-center object-cover bg-black"}
  //     height={"700px"}
  //     videoId="1062556025"
  //     videoURL="7938f2cf9b"
  //     title="ENESAI"
  //     // https://player.vimeo.com/video/1062556025?h=7938f2cf9b&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
  //   />
  // </div>,
];

function videoCreaterComponents(data: VideoFrameProps[]) {
  return data?.map((el, index) => (
    <div key={index} className={"overflow-hidden"} style={carouselStyle}>
      <VideoFrame {...el} />
    </div>
  ));
}

const commonCn = "";

const MonsReels: FC<MonsReelsProps> = ({ className }) => {
  const h = videoCreaterComponents(CGReelData);

  console.log("videoCreaterComponents ", h);

  return (
    <Tabs className={cn("Mosnreel-tabs", className)}>
      <TabList className="inline-flex gap-3.5 p-[5px] bg-white rounded-full mb-[80px]">
        <Tab className="tab__delivery_panels whitespace-nowrap px-6 py-2.5">
          CG REEL
        </Tab>
        <Tab className="tab__delivery_panels whitespace-nowrap px-6 py-2.5">
          AI REEL
        </Tab>
        <Tab className="tab__delivery_panels whitespace-nowrap px-6 py-2.5">
          DESIGN BRANDING
        </Tab>
      </TabList>

      <TabPanel>
        <MonstriliCarousel
          coreClassName={"monstrili-carousel"}
          className={"monsreel-carousel"}
          items={videoCreaterComponents(CGReelData)}
          nextEl={"cdf26213a150dc23a"}
          prevEl={"d41d8cd98f00b2dee"}
        />
      </TabPanel>

      <TabPanel>
        <MonstriliCarousel
          coreClassName={"monstrili-carousel"}
          className={"monsreel-carousel"}
          items={videoCreaterComponents(AIReelData)}
          nextEl={"cdf26213a150dc23a"}
          prevEl={"d41d8cd98f00b2dee"}
        />
      </TabPanel>
    </Tabs>
  );
};

export default MonsReels;
