import { DEFAULT_LANG } from "data/hero";
import { parseISO, format } from "date-fns";
import { ru } from "date-fns/locale";
import type { langsType } from "fusion/type";

// *-*-*- NUMBER -*-*-*

export function formatNumberWithCommas(
  number: number,
  unicode?: string
): string {
  const formattedNumber = number
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${formattedNumber}${unicode ?? ""}`;
}

export function formatNumberWithSpace(
  number: number,
  unicode?: string
): string {
  let formattedNumber = number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  formattedNumber = formattedNumber.replace(/\.00$/, "");
  return `${formattedNumber}${unicode ?? ""}`;
}

export function formatNumberWithPunct(
  number: number,
  unicode?: boolean
): string {
  const formattedNumber = number
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${formattedNumber}${unicode ?? ""}`;
}

export function formatNumberWithUnicode(
  number: number,
  unicode?: string | number
): string {
  const formattedNumber = number
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${formattedNumber}${unicode ?? ""}`;
}

export function addLeadingZero(number: number): string {
  if (number >= 0 && number < 10) {
    return `0${number}`;
  } else {
    return number.toString();
  }
}

// *-*-*- STRING -*-*-*

export const toLowerReplace = (text: string | undefined, replace: string) => {
  return text?.toLowerCase().replace(`${replace}`, "") || "";
};

export const sliceTextLength = (text: string, len: number) => {
  return `${text.slice(0, len).trim()}${text?.length >= len ? "..." : ""}`;
};

// *-*-*- DATE -*-*-*

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`; // 01.01.2024
}

export const formatDateToRussian = (isoDate: string) =>
  format(parseISO(isoDate), "d MMMM yyyy", { locale: ru }); // 12 июля 2024

// *-*-*-* LANG

export const getCountry = (countryCode: string): langsType => {
  switch (countryCode) {
    case "ru":
      return "ru";
    case "uz":
      return "uz";
    case "kz":
      return "kz";
    case "us":
      return "en";
    default:
      return DEFAULT_LANG;
  }
};
