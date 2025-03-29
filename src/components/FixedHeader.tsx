import type { FC } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useTranslation } from "react-i18next";
import LanguageComponent from "./LanguageComponent";

type theme = "dark" | "light";

interface FixedHeaderProps {
  theme?: theme;
}

const FixedHeader: FC<FixedHeaderProps> = ({ theme }) => {
  const matches = useMediaQuery("(min-width: 650px)");

  return theme === "light" ? (
    <div className="flex items-center justify-between h-full w-full">
      <div>
        {matches ? (
          <img
            className="h-full max-h-9 py-1"
            src="https://storage.googleapis.com/mkit_monster_bucket/Logo/MONSTER-LOGO-TEXT.svg"
            alt="monster-text"
          />
        ) : (
          <img
            className="h-full py-1"
            src="https://storage.googleapis.com/mkit_monster_bucket/Logo/MONSTER-LOGO.svg"
            alt="monster-text"
          />
        )}
      </div>

      <TwoBlock theme="light" />
    </div>
  ) : (
    // </div>
    <div className="flex items-center w-full bg-[#262829] px-[100px] z-50 box-border py-2.5 h-[60px]">
      <div className="flex items-center justify-between h-full w-full">
        <div></div>

        <TwoBlock theme="dark" />
      </div>
    </div>
  );
};

export default FixedHeader;

const TwoBlock: FC<{ theme: theme }> = ({ theme }) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-5">
      <LanguageComponent theme={theme} />

      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="9"
            r="3"
            stroke={theme === "dark" ? "#ffffff" : "#000000"}
            strokeWidth="1.5"
          />
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke={theme === "dark" ? "#ffffff" : "#000000"}
            strokeWidth="1.5"
          />
          <path
            d="M17.9696 20C17.8105 17.1085 16.9252 15 12.0004 15C7.0757 15 6.1904 17.1085 6.03125 20"
            stroke={theme === "dark" ? "#ffffff" : "#000000"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <a
        href="/#contactform"
        className="inline-flex items-center justify-center bg-[#0171e3] text-white rounded-[100px] px-2.5 py-2.5 min-w-[162px] h-10"
      >
        {t("settings.form.btn.leaveRequest")}
      </a>
    </div>
  );
};
