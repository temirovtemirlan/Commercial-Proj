export type TimeZone =
  | "Asia/Bishkek"
  | "Asia/Dubai"
  | "Asia/Tashkent"
  | "Asia/Almaty"
  | "America/New_York"
  | "Asia/Shanghai";

export type directionType = "CG" | "VFX" | "AI" | "WEBSITE";

// * Tariff

export interface ITariffHead {
  media: string;
  title: string;
  description: string;
  price: string;
  content: string;
}

export interface ITariffFooter {
  title: string | JSX.Element;
  descriptions: string[];
  before?: string;
}

export type TariffType = {
  head: ITariffHead;
  footer: ITariffFooter[];
  tabCategory: string;
};
