export type TimeZone =
  | "Asia/Bishkek"
  | "Asia/Dubai"
  | "Asia/Tashkent"
  | "Asia/Almaty"
  | "America/New_York"
  | "Asia/Shanghai";

export type directionType = "CG" | "VFX" | "AI" | "WEBSITE";

// * Tariff

interface ITariffHead {
  media: string;
  title: string;
  description: string;
  price: string;
  content: string;
}

interface ITariffFooter {
  title: string | JSX.Element;
  descriptions: string[];
  before?: string;
}

export type TariffType = {
  head: ITariffHead;
  footer: ITariffFooter[];
  tabCategory: string;
};
