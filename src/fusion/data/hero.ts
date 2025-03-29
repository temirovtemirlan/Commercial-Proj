// !!! Суда только такие данные как env, имеется ввиду только глобальные константы
import type { langsType } from "fusion/type";

export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const LANG_STORAGE = "MONSTER_CORP_LANG_STORAGE";
export const DEFAULT_LANG: langsType = "ru";
