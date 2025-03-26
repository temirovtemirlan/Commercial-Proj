export type TimeZone =
  | "Asia/Bishkek"
  | "Asia/Dubai"
  | "Asia/Tashkent"
  | "Asia/Almaty"
  | "America/New_York"
  | "Asia/Shanghai";

export type directionType = "CG" | "VFX" | "AI" | "WEBSITE";

// * Tariff

type IconList =
  | "ae+nuke.png"
  | "ai.png"
  | "analyse.png"
  | "animation.png"
  | "brainstorm.png"
  | "colorcorrection.png"
  | "composting.png"
  | "consultation_brend.png"
  | "cube3d.png"
  | "docs.png"
  | "docs_ai.png"
  | "fire.png"
  | "framefilm.png"
  | "infinity.png"
  | "integrationai.png"
  | "post-prod.png"
  | "search.png"
  | "search_ai.png"
  | "sound_design.png"
  | "sound_design_ai.png"
  | "stoting.png"
  | "timeline.png"
  | "unboarding.png"
  | "unreale+blender+c4.png"
  | "unreale+blender.png"
  | "video.png"
  | "virus.png"
  | "voice.png"
  | "voiceai.png"
  | "world3d.png";

export interface ITariffHead {
  media: string;
  title: string | IconList;
  description: string;
  price: string;
  content: string;
}

export interface ITariffFooter {
  title: string | IconList;
  descriptions: string[];
  before?: string;
}

export type TariffType = {
  head: ITariffHead;
  footer: ITariffFooter[];
  tabCategory: string;
};
